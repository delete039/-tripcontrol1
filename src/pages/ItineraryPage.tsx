import { Printer, RefreshCw } from "lucide-react";
import { ActivityTimeline } from "../components/ActivityTimeline";
import { DaySelector } from "../components/DaySelector";
import { Photo } from "../components/Photo";
import { getDisplayedDays } from "../data/dayView";
import { useTrip } from "../TripContext";

export function ItineraryPage() {
  const { state, toggleWeatherSwap } = useTrip();
  const days = getDisplayedDays(state.swappedWeatherDays);
  const day = days.find((item) => item.date === state.selectedDate) ?? days[0];

  return (
    <div className="page itinerary-page">
      <div className="page-heading">
        <div><span className="eyebrow">按分钟安排</span><h1>每日行程</h1><p>点击任一项目修改时间、说明或添加私人备注。</p></div>
        <div className="heading-actions">
          <button className="secondary-button" onClick={toggleWeatherSwap}><RefreshCw size={17} />交换天气日</button>
          <button className="secondary-button" onClick={() => window.print()}><Printer size={17} />打印</button>
        </div>
      </div>
      <DaySelector />
      <section className="itinerary-banner" style={{ "--day-color": day.color } as React.CSSProperties}>
        <Photo imageKey={day.imageKey} showCredit />
        <div><span>{day.shortDate} · {day.weekday} · {day.city}</span><h2>{day.title}</h2><p>{day.subtitle}</p></div>
      </section>
      <section className="itinerary-list"><ActivityTimeline activities={day.activities} /></section>
    </div>
  );
}
