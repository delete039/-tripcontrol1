import { ExternalLink } from "lucide-react";
import { StatusPill } from "../components/StatusPill";
import { reservationItems } from "../data/trip";
import { useTrip } from "../TripContext";
import type { TaskStatus } from "../types";

const statusOptions: Array<{ value: TaskStatus; label: string }> = [
  { value: "todo", label: "待预约" },
  { value: "booked", label: "已完成" },
  { value: "verify", label: "待复核" },
  { value: "not-needed", label: "无需预约" }
];

export function ReservationsPage() {
  const { state, setReservationStatus } = useTrip();
  const count = reservationItems.filter((item) => (state.reservationStatuses[item.id] ?? item.status) === "booked").length;
  return (
    <div className="page reservations-page">
      <div className="page-heading">
        <div><span className="eyebrow">统一操作清单</span><h1>预约中心</h1><p>北京与日本相差一小时，下列开售时间已换算为北京时间。</p></div>
        <div className="completion-meter"><strong>{count}/{reservationItems.length}</strong><span>已完成</span></div>
      </div>
      <div className="reservation-table">
        <div className="reservation-row reservation-head"><span>项目</span><span>使用日期</span><span>最晚操作</span><span>状态</span><span /></div>
        {reservationItems.map((item) => {
          const status = state.reservationStatuses[item.id] ?? item.status;
          return (
            <article className="reservation-row" key={item.id}>
              <div><span className={`priority-line ${item.priority}`} /><div><strong>{item.title}</strong><small>{item.time}</small><p>{item.detail}</p></div></div>
              <span>{item.eventDate}</span>
              <span>{item.dueDate ?? "已完成"}</span>
              <label className="status-select"><StatusPill status={status} /><select value={status} onChange={(e) => setReservationStatus(item.id, e.target.value as TaskStatus)}>{statusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
              {item.url ? <a href={item.url} target="_blank" rel="noreferrer" className="icon-button"><ExternalLink size={17} /></a> : <span />}
            </article>
          );
        })}
      </div>
    </div>
  );
}
