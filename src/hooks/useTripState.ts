import { useCallback, useMemo, useRef, useState } from "react";
import { tripDays } from "../data/trip";
import type { ActivityOverride, AppState, TaskStatus } from "../types";

const STORAGE_KEY = "japan-trip-control-state-v1";

const defaultState: AppState = {
  completedActivities: [],
  activityOverrides: {},
  reservationStatuses: {},
  completedPrep: [],
  swappedWeatherDays: false,
  manualTravelMode: null,
  selectedDate: tripDays[0].date
};

function loadState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
  } catch {
    return defaultState;
  }
}

export function getJapanDate(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

export function useTripState() {
  const [state, setState] = useState<AppState>(loadState);
  const undoRef = useRef<AppState | null>(null);

  const commit = useCallback((updater: (current: AppState) => AppState) => {
    setState((current) => {
      undoRef.current = current;
      const next = updater(current);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleActivity = useCallback(
    (id: string) =>
      commit((current) => ({
        ...current,
        completedActivities: current.completedActivities.includes(id)
          ? current.completedActivities.filter((value) => value !== id)
          : [...current.completedActivities, id]
      })),
    [commit]
  );

  const updateActivity = useCallback(
    (id: string, override: ActivityOverride) =>
      commit((current) => ({
        ...current,
        activityOverrides: {
          ...current.activityOverrides,
          [id]: { ...current.activityOverrides[id], ...override }
        }
      })),
    [commit]
  );

  const setReservationStatus = useCallback(
    (id: string, status: TaskStatus) =>
      commit((current) => ({
        ...current,
        reservationStatuses: { ...current.reservationStatuses, [id]: status }
      })),
    [commit]
  );

  const togglePrep = useCallback(
    (id: string) =>
      commit((current) => ({
        ...current,
        completedPrep: current.completedPrep.includes(id)
          ? current.completedPrep.filter((value) => value !== id)
          : [...current.completedPrep, id]
      })),
    [commit]
  );

  const setSelectedDate = useCallback(
    (date: string) => commit((current) => ({ ...current, selectedDate: date })),
    [commit]
  );

  const toggleWeatherSwap = useCallback(
    () => commit((current) => ({ ...current, swappedWeatherDays: !current.swappedWeatherDays })),
    [commit]
  );

  const setManualTravelMode = useCallback(
    (value: boolean | null) => commit((current) => ({ ...current, manualTravelMode: value })),
    [commit]
  );

  const undo = useCallback(() => {
    if (!undoRef.current) return;
    const previous = undoRef.current;
    undoRef.current = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(previous));
    setState(previous);
  }, [state]);

  const reset = useCallback(() => {
    undoRef.current = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    setState(defaultState);
  }, [state]);

  const exportState = useCallback(() => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "japan-trip-state.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }, [state]);

  const importState = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          commit(() => ({ ...defaultState, ...parsed }));
        } catch {
          window.alert("无法读取这份行程状态文件。");
        }
      };
      reader.readAsText(file);
    },
    [commit]
  );

  const japanDate = getJapanDate();
  const isTripDate = japanDate >= "2026-10-03" && japanDate <= "2026-10-08";
  const travelMode = state.manualTravelMode ?? isTripDate;

  return useMemo(
    () => ({
      state,
      travelMode,
      japanDate,
      canUndo: undoRef.current !== null,
      toggleActivity,
      updateActivity,
      setReservationStatus,
      togglePrep,
      setSelectedDate,
      toggleWeatherSwap,
      setManualTravelMode,
      undo,
      reset,
      exportState,
      importState
    }),
    [
      state,
      travelMode,
      japanDate,
      toggleActivity,
      updateActivity,
      setReservationStatus,
      togglePrep,
      setSelectedDate,
      toggleWeatherSwap,
      setManualTravelMode,
      undo,
      reset,
      exportState,
      importState
    ]
  );
}

export type TripStateApi = ReturnType<typeof useTripState>;
