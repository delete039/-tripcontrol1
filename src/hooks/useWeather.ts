import { useEffect, useState } from "react";

interface WeatherResult {
  state: "future" | "loading" | "ready" | "offline" | "error";
  max?: number;
  min?: number;
  precipitation?: number;
  wind?: number;
}

export function useWeather(date: string, lat: number, lng: number): WeatherResult {
  const [result, setResult] = useState<WeatherResult>({ state: "future" });

  useEffect(() => {
    const today = new Date();
    const target = new Date(`${date}T12:00:00+09:00`);
    const days = Math.ceil((target.getTime() - today.getTime()) / 86_400_000);
    if (days > 16) {
      setResult({ state: "future" });
      return;
    }
    if (!navigator.onLine) {
      setResult({ state: "offline" });
      return;
    }
    setResult({ state: "loading" });
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lng),
      daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
      timezone: "Asia/Tokyo",
      start_date: date,
      end_date: date
    });
    fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
      .then((response) => {
        if (!response.ok) throw new Error("weather");
        return response.json();
      })
      .then((data) => {
        setResult({
          state: "ready",
          max: data.daily.temperature_2m_max[0],
          min: data.daily.temperature_2m_min[0],
          precipitation: data.daily.precipitation_probability_max[0],
          wind: data.daily.wind_speed_10m_max[0]
        });
      })
      .catch(() => setResult({ state: "error" }));
  }, [date, lat, lng]);

  return result;
}
