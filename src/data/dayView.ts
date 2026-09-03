import { tripDays } from "./trip";
import type { TripDay } from "../types";

function withoutDinner(day: TripDay) {
  return day.activities.filter((activity) => activity.id !== "d3-dinner" && activity.id !== "d4-dinner");
}

function dinner(day: TripDay) {
  return day.activities.filter((activity) => activity.id === "d3-dinner" || activity.id === "d4-dinner");
}

export function getDisplayedDays(swapped: boolean): TripDay[] {
  if (!swapped) return tripDays;
  const catDay = tripDays[2];
  const onsenDay = tripDays[3];

  return tripDays.map((day) => {
    if (day.date === catDay.date) {
      return {
        ...day,
        title: onsenDay.title,
        subtitle: `${onsenDay.subtitle} · 由天气备选切换`,
        imageKey: onsenDay.imageKey,
        color: onsenDay.color,
        route: onsenDay.route,
        activities: [...withoutDinner(onsenDay), ...dinner(catDay)]
      };
    }
    if (day.date === onsenDay.date) {
      return {
        ...day,
        title: catDay.title,
        subtitle: `${catDay.subtitle} · 由天气备选切换`,
        imageKey: catDay.imageKey,
        color: catDay.color,
        route: catDay.route,
        activities: [...withoutDinner(catDay), ...dinner(onsenDay)]
      };
    }
    return day;
  });
}
