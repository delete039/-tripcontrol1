import { useEffect, useState } from "react";
import { AppShell } from "./components/AppShell";
import { DiningPage } from "./pages/DiningPage";
import { InfoPage } from "./pages/InfoPage";
import { ItineraryPage } from "./pages/ItineraryPage";
import { MapPage } from "./pages/MapPage";
import { OverviewPage } from "./pages/OverviewPage";
import { PrepPage } from "./pages/PrepPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { TravelMode } from "./pages/TravelMode";
import { useTrip } from "./TripContext";
import type { NavId } from "./types";

const validNav = new Set<NavId>(["overview", "itinerary", "map", "dining", "reservations", "prep", "info"]);

function initialNav(): NavId {
  const hash = window.location.hash.replace("#", "") as NavId;
  return validNav.has(hash) ? hash : "overview";
}

export default function App() {
  const [nav, setNav] = useState<NavId>(initialNav);
  const { travelMode } = useTrip();

  useEffect(() => {
    const handler = () => setNav(initialNav());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (id: NavId) => {
    setNav(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (travelMode) return <TravelMode />;

  return (
    <AppShell nav={nav} onNavigate={navigate}>
      {nav === "overview" && <OverviewPage onOpenReservations={() => navigate("reservations")} onOpenPrep={() => navigate("prep")} />}
      {nav === "itinerary" && <ItineraryPage />}
      {nav === "map" && <MapPage />}
      {nav === "dining" && <DiningPage />}
      {nav === "reservations" && <ReservationsPage />}
      {nav === "prep" && <PrepPage />}
      {nav === "info" && <InfoPage />}
    </AppShell>
  );
}
