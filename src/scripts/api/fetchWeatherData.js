export async function fetchWeatherData(lat,lon) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code,visibility,surface_pressure`, {
    headers: { accept: "application/json" }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}