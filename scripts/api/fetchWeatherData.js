export async function getWeather(latitude,longitude) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m,weather_code`, {
    headers: { accept: "text/plain" }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}


/*
https://api.open-meteo.com/v1/forecast?
latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m
*/