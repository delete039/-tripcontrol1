import { ArrowRight, CalendarClock, CheckCircle2, CloudSun, TicketCheck } from "lucide-react";
import { ActivityTimeline } from "../components/ActivityTimeline";
import { DaySelector } from "../components/DaySelector";
import { Photo } from "../components/Photo";
import { getDisplayedDays } from "../data/dayView";
import { prepItems, reservationItems, tripMeta } from "../data/trip";
import { useWeather } from "../hooks/useWeather";
import { useTrip } from "../TripContext";

function daysUntilTrip() {
  const diff = new Date(`${tripMeta.startDate}T00:00:00+09:00`).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86_400_000));
}

export function OverviewPage({ onOpenReservations, onOpenPrep }: { onOpenReservations: () => void; onOpenPrep: () => void }) {
  const { state, setSelectedDate } = useTrip();
  const days = getDisplayedDays();
  const selected = days.find((day) => day.date === state.selectedDate) ?? days[0];
  const weatherPoint = selected.route[selected.route.length - 1];
  const weather = useWeather(selected.date, weatherPoint.lat, weatherPoint.lng);
  const booked = reservationItems.filter((item) => (state.reservationStatuses[item.id] ?? item.status) === "booked").length;
  const prepDone = state.completedPrep.length;
  const urgent = reservationItems.filter((item) => (state.reservationStatuses[item.id] ?? item.status) !== "booked").slice(0, 4);

  return (
    <div className="page overview-page">
      <section className="dashboard-intro">
        <div>
          <span className="eyebrow">出发倒计时</span>
          <div className="countdown"><strong>{daysUntilTrip()}</strong><span>天</span></div>
          <p>{tripMeta.outbound}<br />{tripMeta.inbound}</p>
        </div>
        <div className="readiness-strip">
          <button onClick={onOpenReservations}><TicketCheck size={20} /><span><strong>{booked}/{reservationItems.length}</strong>预约进度</span><ArrowRight size={17} /></button>
          <button onClick={onOpenPrep}><CheckCircle2 size={20} /><span><strong>{prepDone}/{prepItems.length}</strong>行前准备</span><ArrowRight size={17} /></button>
          <div><CalendarClock size={20} /><span><strong>10/4–10/8</strong>JR EAST PASS</span></div>
        </div>
      </section>

      <DaySelector />

      <div className="dashboard-grid">
        <section className="selected-day-panel">
          <Photo imageKey={selected.imageKey} className="day-hero" showCredit />
          <div className="day-hero-overlay">
            <div><span>{selected.shortDate} · {selected.weekday}</span><h1>{selected.title}</h1><p>{selected.subtitle}</p></div>
            <button className="secondary-button" onClick={() => setSelectedDate(selected.date)}>查看当天</button>
          </div>
          <ActivityTimeline activities={selected.activities} compact limit={5} />
        </section>

        <aside className="dashboard-rail">
          <section className="rail-section">
            <header><div><span className="eyebrow">天气窗口</span><strong>{selected.city}</strong></div><CloudSun size={21} /></header>
            {weather.state === "future" && <p>实时预报将在出发前约 16 天开放。10/5 东京自由活动与下午进仙台按实际情况调整。</p>}
            {weather.state === "loading" && <p>正在读取最新天气...</p>}
            {weather.state === "ready" && <div className="weather-values"><strong>{weather.min}–{weather.max}°C</strong><span>降雨 {weather.precipitation}%</span><span>最大风速 {weather.wind} km/h</span></div>}
            {(weather.state === "offline" || weather.state === "error") && <p>当前无法读取在线天气，已保留离线行程。</p>}
          </section>


          <section className="rail-section">
            <header><div><span className="eyebrow">下一批操作</span><strong>预约与复核</strong></div></header>
            <ul className="action-list">
              {urgent.map((item) => <li key={item.id}><span className={`priority-dot ${item.priority}`} /><div><strong>{item.title}</strong><small>{item.dueDate ?? item.eventDate}</small></div></li>)}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
