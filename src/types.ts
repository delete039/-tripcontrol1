export type NavId =
  | "overview"
  | "itinerary"
  | "map"
  | "dining"
  | "reservations"
  | "prep"
  | "info";

export type ActivityCategory =
  | "flight"
  | "rail"
  | "boat"
  | "bus"
  | "walk"
  | "visit"
  | "shopping"
  | "meal"
  | "hotel"
  | "bath"
  | "buffer";

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Activity {
  id: string;
  time: string;
  end?: string;
  title: string;
  japanese?: string;
  detail: string;
  place?: string;
  category: ActivityCategory;
  cost?: string;
  alert?: string;
  source?: string;
  coordinate?: Coordinate;
  editable?: boolean;
}

export interface TripDay {
  date: string;
  shortDate: string;
  weekday: string;
  city: string;
  title: string;
  subtitle: string;
  imageKey: string;
  color: string;
  activities: Activity[];
  route: Coordinate[];
}

export interface Rating {
  provider: string;
  score: string;
  checked: string;
  url?: string;
}

export interface DiningOption {
  id: string;
  date: string;
  meal: "午餐" | "晚餐" | "咖啡";
  name: string;
  japanese: string;
  role: "主选" | "候补" | "可选";
  category: string;
  price: string;
  ratings: Rating[];
  summary: string;
  orders: string[];
  caution?: string;
  imageKey: string;
  coordinate: Coordinate;
  url: string;
}

export type TaskStatus = "todo" | "booked" | "verify" | "not-needed";

export interface ReservationItem {
  id: string;
  title: string;
  eventDate: string;
  dueDate?: string;
  time?: string;
  status: TaskStatus;
  priority: "high" | "medium" | "low";
  detail: string;
  url?: string;
}

export interface PrepItem {
  id: string;
  group: string;
  title: string;
  timing: string;
  priority: "high" | "medium" | "low";
  detail: string;
  url?: string;
}

export interface TravelInfoSection {
  id: string;
  title: string;
  items: Array<{
    label: string;
    value: string;
    note?: string;
    url?: string;
  }>;
}

export interface ActivityOverride {
  time?: string;
  end?: string;
  title?: string;
  detail?: string;
  note?: string;
}

export interface AppState {
  completedActivities: string[];
  activityOverrides: Record<string, ActivityOverride>;
  reservationStatuses: Record<string, TaskStatus>;
  completedPrep: string[];
  swappedWeatherDays: boolean;
  manualTravelMode: boolean | null;
  selectedDate: string;
}
