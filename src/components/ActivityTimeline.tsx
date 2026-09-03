import {
  Bath,
  BedDouble,
  Bus,
  Check,
  ChevronRight,
  CircleEllipsis,
  Footprints,
  Landmark,
  Plane,
  Ship,
  ShoppingBag,
  TrainFront,
  Utensils
} from "lucide-react";
import { useState } from "react";
import { useTrip } from "../TripContext";
import type { Activity, ActivityCategory, ActivityOverride } from "../types";
import { EditDrawer } from "./EditDrawer";

const categoryIcons: Record<ActivityCategory, typeof Plane> = {
  flight: Plane,
  rail: TrainFront,
  boat: Ship,
  bus: Bus,
  walk: Footprints,
  visit: Landmark,
  shopping: ShoppingBag,
  meal: Utensils,
  hotel: BedDouble,
  bath: Bath,
  buffer: CircleEllipsis
};

export function mergedActivity(activity: Activity, override?: ActivityOverride): Activity & { note?: string } {
  return { ...activity, ...override };
}

interface ActivityTimelineProps {
  activities: Activity[];
  compact?: boolean;
  limit?: number;
}

export function ActivityTimeline({ activities, compact = false, limit }: ActivityTimelineProps) {
  const { state, toggleActivity, updateActivity } = useTrip();
  const [editing, setEditing] = useState<Activity | null>(null);
  const visible = typeof limit === "number" ? activities.slice(0, limit) : activities;

  return (
    <>
      <div className={`timeline ${compact ? "timeline-compact" : ""}`}>
        {visible.map((raw) => {
          const activity = mergedActivity(raw, state.activityOverrides[raw.id]);
          const done = state.completedActivities.includes(raw.id);
          const Icon = categoryIcons[raw.category];
          return (
            <article key={raw.id} className={`timeline-item ${done ? "done" : ""}`}>
              <button className="timeline-check" onClick={() => toggleActivity(raw.id)} aria-label={done ? "标记为未完成" : "标记完成"}>
                {done ? <Check size={15} /> : <Icon size={16} />}
              </button>
              <div className="timeline-time"><strong>{activity.time}</strong>{activity.end && <span>{activity.end}</span>}</div>
              <button className="timeline-body" onClick={() => setEditing(raw)}>
                <div className="timeline-heading">
                  <div><strong>{activity.title}</strong>{activity.japanese && <small>{activity.japanese}</small>}</div>
                  <ChevronRight size={17} />
                </div>
                {!compact && <p>{activity.detail}</p>}
                {!compact && (activity.cost || activity.alert) && (
                  <div className="timeline-meta">
                    {activity.cost && <span>{activity.cost}</span>}
                    {activity.alert && <span className="alert-text">{activity.alert}</span>}
                  </div>
                )}
              </button>
            </article>
          );
        })}
      </div>
      {editing && (
        <EditDrawer
          activity={mergedActivity(editing, state.activityOverrides[editing.id])}
          onClose={() => setEditing(null)}
          onSave={(values) => {
            updateActivity(editing.id, values);
            setEditing(null);
          }}
        />
      )}
    </>
  );
}
