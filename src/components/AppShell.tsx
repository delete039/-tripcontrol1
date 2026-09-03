import type { ReactNode } from "react";
import {
  CalendarCheck,
  CheckSquare2,
  Download,
  Info,
  Map,
  MapPinned,
  Play,
  RotateCcw,
  Route,
  Undo2,
  Upload,
  Utensils
} from "lucide-react";
import { tripMeta } from "../data/trip";
import { useTrip } from "../TripContext";
import type { NavId } from "../types";

const navItems: Array<{ id: NavId; label: string; icon: typeof Map }> = [
  { id: "overview", label: "总览", icon: MapPinned },
  { id: "itinerary", label: "每日行程", icon: Route },
  { id: "map", label: "路线地图", icon: Map },
  { id: "dining", label: "餐饮对比", icon: Utensils },
  { id: "reservations", label: "预约中心", icon: CalendarCheck },
  { id: "prep", label: "行前准备", icon: CheckSquare2 },
  { id: "info", label: "旅行资料", icon: Info }
];

interface AppShellProps {
  nav: NavId;
  onNavigate: (id: NavId) => void;
  children: ReactNode;
}

export function AppShell({ nav, onNavigate, children }: AppShellProps) {
  const { canUndo, undo, reset, exportState, importState, setManualTravelMode } = useTrip();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => onNavigate("overview")}>
          <span className="brand-mark"><Route size={22} /></span>
          <span><strong>{tripMeta.title}</strong><small>2026 · 6 DAYS</small></span>
        </button>
        <nav className="side-nav" aria-label="主导航">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={nav === item.id ? "active" : ""}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={19} /><span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="sidebar-foot">
          <span>东京 · 宫城 · 秋田</span>
          <small>数据核实：2026-08-28</small>
        </div>
      </aside>

      <div className="app-main">
        <header className="topbar">
          <div>
            <span className="eyebrow">2026/10/03–10/08</span>
            <strong>{tripMeta.subtitle}</strong>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" onClick={undo} disabled={!canUndo} title="撤销上一步">
              <Undo2 size={18} />
            </button>
            <label className="icon-button" title="导入行程状态">
              <Upload size={18} />
              <input
                type="file"
                accept="application/json"
                hidden
                onChange={(event) => event.target.files?.[0] && importState(event.target.files[0])}
              />
            </label>
            <button className="icon-button" onClick={exportState} title="导出行程状态">
              <Download size={18} />
            </button>
            <button className="icon-button" onClick={reset} title="恢复初始方案">
              <RotateCcw size={18} />
            </button>
            <button className="travel-button" onClick={() => setManualTravelMode(true)} aria-label="旅行模式">
              <Play size={17} fill="currentColor" /><span>旅行模式</span>
            </button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>

      <nav className="mobile-nav" aria-label="移动端导航">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={nav === item.id ? "active" : ""} onClick={() => onNavigate(item.id)}>
              <Icon size={19} /><span>{item.label.replace("每日", "").replace("路线", "").replace("对比", "").replace("中心", "").replace("行前", "").replace("旅行资料", "资料")}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
