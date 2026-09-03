import { createContext, useContext, type ReactNode } from "react";
import { useTripState, type TripStateApi } from "./hooks/useTripState";

const TripContext = createContext<TripStateApi | null>(null);

export function TripProvider({ children }: { children: ReactNode }) {
  const value = useTripState();
  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}

export function useTrip() {
  const value = useContext(TripContext);
  if (!value) throw new Error("useTrip must be used inside TripProvider");
  return value;
}
