import { tripDays } from "../data/trip";
import { useTrip } from "../TripContext";

export function DaySelector() {
  const { state, setSelectedDate } = useTrip();
  return (
    <div className="day-selector" role="tablist" aria-label="选择日期">
      {tripDays.map((day, index) => (
        <button
          key={day.date}
          role="tab"
          aria-selected={state.selectedDate === day.date}
          className={state.selectedDate === day.date ? "active" : ""}
          onClick={() => setSelectedDate(day.date)}
          style={{ "--day-color": day.color } as React.CSSProperties}
        >
          <small>DAY {index + 1}</small>
          <strong>{day.shortDate}</strong>
          <span>{day.city.split("・")[0].split(" → ")[0]}</span>
        </button>
      ))}
    </div>
  );
}
