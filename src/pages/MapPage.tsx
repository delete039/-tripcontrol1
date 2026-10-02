import { useEffect, useRef, useState } from "react";
import maplibregl, { type Map as MapLibreMap, type Marker } from "maplibre-gl";
import { ExternalLink, MapPin, WifiOff } from "lucide-react";
import { DaySelector } from "../components/DaySelector";
import { getDisplayedDays } from "../data/dayView";
import { useTrip } from "../TripContext";

export function MapPage() {
  const { state } = useTrip();
  const days = getDisplayedDays();
  const day = days.find((item) => item.date === state.selectedDate) ?? days[0];
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const [online, setOnline] = useState(navigator.onLine);
  const [mapFailed, setMapFailed] = useState(false);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  useEffect(() => {
    if (!online || !containerRef.current) return;
    setMapFailed(false);
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
    mapRef.current?.remove();

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors"
          }
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }]
      },
      center: [day.route[0].lng, day.route[0].lat],
      zoom: 8,
      attributionControl: { compact: true }
    });
    mapRef.current = map;
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: { type: "LineString", coordinates: day.route.map((point) => [point.lng, point.lat]) }
        }
      });
      map.addLayer({
        id: "route-line",
        type: "line",
        source: "route",
        paint: { "line-color": day.color, "line-width": 4, "line-opacity": 0.88 }
      });
      const bounds = new maplibregl.LngLatBounds();
      day.route.forEach((point, index) => {
        bounds.extend([point.lng, point.lat]);
        const element = document.createElement("button");
        element.className = "map-marker";
        element.style.background = day.color;
        element.textContent = String(index + 1);
        const marker = new maplibregl.Marker({ element }).setLngLat([point.lng, point.lat]).addTo(map);
        markersRef.current.push(marker);
      });
      map.fitBounds(bounds, { padding: 70, maxZoom: 12, duration: 0 });
    });
    map.on("error", () => setMapFailed(true));
    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, [day, online]);

  const places = day.activities.filter((activity) => activity.coordinate);
  const showFallback = !online || mapFailed;

  return (
    <div className="page map-page">
      <div className="page-heading"><div><span className="eyebrow">在线地图与离线示意</span><h1>路线地图</h1><p>地图只显示当天核心移动，站内换乘以时间线说明为准。</p></div></div>
      <DaySelector />
      <div className="map-layout">
        <section className="map-stage">
          {showFallback ? (
            <div className="offline-map">
              <WifiOff size={28} /><span className="eyebrow">离线路线</span><h2>{day.title}</h2>
              <div className="route-schematic">{places.map((activity, index) => <div key={activity.id}><span style={{ background: day.color }}>{index + 1}</span><div><strong>{activity.place ?? activity.title}</strong><small>{activity.time} · {activity.title}</small></div></div>)}</div>
            </div>
          ) : <div ref={containerRef} className="map-container" />}
        </section>
        <aside className="map-places">
          <header><span>{day.shortDate} · {day.weekday}</span><h2>{day.title}</h2><p>{day.subtitle}</p></header>
          <div>{places.map((activity, index) => (
            <article key={activity.id}><span className="map-index" style={{ background: day.color }}>{index + 1}</span><div><strong>{activity.title}</strong><small><MapPin size={13} />{activity.place ?? day.city}</small><p>{activity.detail}</p></div>{activity.source && <a href={activity.source} target="_blank" rel="noreferrer"><ExternalLink size={16} /></a>}</article>
          ))}</div>
        </aside>
      </div>
    </div>
  );
}
