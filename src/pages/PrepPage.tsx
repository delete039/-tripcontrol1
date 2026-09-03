import { Check, ChevronDown, Circle, Smartphone, Wifi } from "lucide-react";
import { useMemo, useState } from "react";
import { prepItems } from "../data/trip";
import { useTrip } from "../TripContext";

export function PrepPage() {
  const { state, togglePrep } = useTrip();
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const groups = useMemo(() => [...new Set(prepItems.map((item) => item.group))], []);
  const done = state.completedPrep.length;

  return (
    <div className="page prep-page">
      <div className="page-heading">
        <div><span className="eyebrow">出发前控制台</span><h1>行前准备</h1><p>所有任务使用统一清单，状态只保存在当前设备中。</p></div>
        <div className="prep-progress"><div style={{ "--progress": `${(done / prepItems.length) * 100}%` } as React.CSSProperties} /><strong>{done}/{prepItems.length}</strong><span>准备完成</span></div>
      </div>

      <section className="network-band">
        <div><Wifi size={26} /><div><span className="eyebrow">优先处理</span><h2>两部手机分别联网</h2><p>先确认 eSIM 能力，再比较流量卡和运营商漫游。不要只依赖一台手机热点。</p></div></div>
        <div className="network-checks"><span><Smartphone size={17} />机型兼容</span><span><Wifi size={17} />热点限制</span><span><Check size={17} />日本落地激活</span></div>
      </section>

      <div className="prep-groups">
        {groups.map((group) => {
          const items = prepItems.filter((item) => item.group === group);
          const groupDone = items.filter((item) => state.completedPrep.includes(item.id)).length;
          const open = openGroups.includes(group) || groupDone < items.length;
          return (
            <section className="prep-group" key={group}>
              <button className="prep-group-header" onClick={() => setOpenGroups((current) => current.includes(group) ? current.filter((item) => item !== group) : [...current, group])}>
                <div><strong>{group}</strong><span>{groupDone}/{items.length}</span></div><ChevronDown size={19} className={open ? "open" : ""} />
              </button>
              {open && <div className="prep-list">{items.map((item) => {
                const checked = state.completedPrep.includes(item.id);
                return <button key={item.id} className={checked ? "checked" : ""} onClick={() => togglePrep(item.id)}><span className="prep-checkbox">{checked ? <Check size={16} /> : <Circle size={16} />}</span><div><span className="prep-timing">{item.timing}</span><strong>{item.title}</strong><p>{item.detail}</p></div><span className={`priority-tag ${item.priority}`}>{item.priority === "high" ? "重要" : item.priority === "medium" ? "建议" : "可选"}</span></button>;
              })}</div>}
            </section>
          );
        })}
      </div>
    </div>
  );
}
