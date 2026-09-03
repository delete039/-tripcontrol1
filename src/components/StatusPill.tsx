import type { TaskStatus } from "../types";

const labels: Record<TaskStatus, string> = {
  todo: "待预约",
  booked: "已完成",
  verify: "待复核",
  "not-needed": "无需预约"
};

export function StatusPill({ status }: { status: TaskStatus }) {
  return <span className={`status-pill status-${status}`}>{labels[status]}</span>;
}
