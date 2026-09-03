import { ExternalLink, Save, X } from "lucide-react";
import { useState } from "react";
import type { Activity, ActivityOverride } from "../types";

interface EditDrawerProps {
  activity: Activity & { note?: string };
  onClose: () => void;
  onSave: (values: ActivityOverride) => void;
}

export function EditDrawer({ activity, onClose, onSave }: EditDrawerProps) {
  const [values, setValues] = useState<ActivityOverride>({
    time: activity.time,
    end: activity.end ?? "",
    title: activity.title,
    detail: activity.detail,
    note: activity.note ?? ""
  });

  return (
    <div className="drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="edit-drawer" aria-label="编辑行程">
        <header>
          <div><span className="eyebrow">编辑行程</span><strong>{activity.japanese ?? activity.title}</strong></div>
          <button className="icon-button" onClick={onClose} title="关闭"><X size={20} /></button>
        </header>
        <div className="drawer-form">
          <div className="form-row">
            <label>开始时间<input value={values.time} onChange={(e) => setValues({ ...values, time: e.target.value })} /></label>
            <label>结束时间<input value={values.end} onChange={(e) => setValues({ ...values, end: e.target.value })} /></label>
          </div>
          <label>标题<input value={values.title} onChange={(e) => setValues({ ...values, title: e.target.value })} /></label>
          <label>安排<textarea rows={5} value={values.detail} onChange={(e) => setValues({ ...values, detail: e.target.value })} /></label>
          <label>私人备注<textarea rows={4} value={values.note} placeholder="例如：预约号、集合点、临时变化" onChange={(e) => setValues({ ...values, note: e.target.value })} /></label>
          {activity.source && <a className="source-link" href={activity.source} target="_blank" rel="noreferrer"><ExternalLink size={16} />打开官方来源</a>}
        </div>
        <footer>
          <button className="secondary-button" onClick={onClose}>取消</button>
          <button className="primary-button" onClick={() => onSave(values)}><Save size={17} />保存修改</button>
        </footer>
      </aside>
    </div>
  );
}
