import { Check, Copy, ExternalLink, Hotel, MapPin, X } from "lucide-react";
import { useEffect, useMemo } from "react";
import { ActivityTimeline, mergedActivity } from "../components/ActivityTimeline";
import { getDisplayedDays } from "../data/dayView";
import { tripDays, tripMeta } from "../data/trip";
import { useTrip } from "../TripContext";

function minutes(value: string) {
  const match = value.match(/^(\d{1,2}):(\d{2})$/);
  return match ? Number(match[1]) * 60 + Number(match[2]) : Number.POSITIVE_INFINITY;
}

export function TravelMode() {
  const { state, japanDate, setSelectedDate, setManualTravelMode, toggleActivity } = useTrip();
  const days = getDisplayedDays(state.swappedWeatherDays);

  useEffect(() => {
    if (tripDays.some((day) => day.date === japanDate) && state.selectedDate !== japanDate) setSelectedDate(japanDate);
  }, [japanDate, setSelectedDate, state.selectedDate]);

  const day = days.find((item) => item.date === state.selectedDate) ?? days[0];
  const nowMinutes = useMemo(() => {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
    return minutes(parts);
  }, []);
  const upcomingIndex = day.activities.findIndex((activity) => minutes(activity.time) >= nowMinutes);
  const nextIndex = upcomingIndex === -1 ? day.activities.length - 1 : upcomingIndex;
  const rawNext = day.activities[nextIndex];
  const next = mergedActivity(rawNext, state.activityOverrides[rawNext.id]);
  const done = state.completedActivities.includes(rawNext.id);

  return (
    <div className="travel-mode-screen">
      <header className="travel-mode-header">
        <div><span className="eyebrow">旅行模式 · 日本时间</span><strong>{day.shortDate} {day.weekday} · {day.city}</strong></div>
        <button className="icon-button" onClick={() => setManualTravelMode(false)} title="退出旅行模式"><X size={21} /></button>
      </header>
      <div className="travel-day-tabs">{days.map((item) => <button key={item.date} className={day.date === item.date ? "active" : ""} onClick={() => setSelectedDate(item.date)}><strong>{item.shortDate}</strong><span>{item.title}</span></button>)}</div>
      <main className="travel-mode-main">
        <section className="next-action" style={{ "--day-color": day.color } as React.CSSProperties}>
          <span className="eyebrow">下一步</span>
          <div className="next-time"><strong>{next.time}</strong>{next.end && <span>至 {next.end}</span>}</div>
          <h1>{next.title}</h1>{next.japanese && <h2>{next.japanese}</h2>}
          <p>{next.detail}</p>
          {next.alert && <div className="travel-alert">{next.alert}</div>}
          <div className="next-actions">
            <button className={done ? "primary-button completed" : "primary-button"} onClick={() => toggleActivity(rawNext.id)}><Check size={18} />{done ? "已完成" : "标记完成"}</button>
            {next.place && <button className="secondary-button" onClick={() => navigator.clipboard?.writeText(next.place!)}><Copy size={17} />复制地点</button>}
            {next.coordinate && <a className="secondary-button" href={`https://www.google.com/maps/search/?api=1&query=${next.coordinate.lat},${next.coordinate.lng}`} target="_blank" rel="noreferrer"><MapPin size={17} />导航</a>}
            {next.source && <a className="icon-button" href={next.source} target="_blank" rel="noreferrer" title="官方来源"><ExternalLink size={18} /></a>}
          </div>
        </section>
        <aside className="travel-upcoming">
          <span className="eyebrow">接下来</span><h2>{day.title}</h2>
          <ActivityTimeline activities={day.activities.slice(Math.max(0, nextIndex), Math.max(0, nextIndex) + 4)} compact />
          <div className="hotel-shortcut"><Hotel size={19} /><div><span>今晚住宿</span><strong>{day.date === "2026-10-03" ? tripMeta.tokyoHotel : day.date === "2026-10-08" ? "返程航班" : tripMeta.sendaiHotel}</strong></div></div>
        </aside>
      </main>
    </div>
  );
}
