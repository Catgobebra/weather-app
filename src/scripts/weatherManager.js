import { DOM_ELEMENTS } from './config.js';

export function formatWeatherHTML(weatherData, weatherDescription) {
  const currentData = weatherData.current;
  const currentUnits = weatherData.current_units;
  
  return `
    <div class="weather-info">
      <p><strong>Температура:</strong> ${currentData.temperature_2m} ${currentUnits.temperature_2m} 🌡️</p>
      <p><strong>Погода:</strong> ${weatherDescription.day} ${weatherDescription.icon_day}</p>
      <p><strong>Ветер:</strong> ${currentData.wind_speed_10m} ${currentUnits.wind_speed_10m} 💨</p>
      <p><strong>Видимость:</strong> ${currentData.visibility} ${currentUnits.visibility} 👀</p>
      <p><strong>Давление:</strong> ${currentData.surface_pressure} ${currentUnits.surface_pressure} ⏲️</p>
    </div>
  `;
}

export function updateBackgroundImage(weatherDescription) {
  DOM_ELEMENTS.pageBody.style.background = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/img/${weatherDescription.img}.jpg) center/cover no-repeat fixed
  `;
}

export function resetWeatherDisplay() {
  DOM_ELEMENTS.weatherResult.innerHTML = "";
  DOM_ELEMENTS.weatherResult.style.color = "black";
  DOM_ELEMENTS.form.style.color = "black";
  DOM_ELEMENTS.pageBody.style.background = "";
}

export function displayWeatherResults(weatherData, weatherDescription) {
  DOM_ELEMENTS.weatherResult.innerHTML = formatWeatherHTML(
    weatherData, 
    weatherDescription
  );
  
  DOM_ELEMENTS.weatherResult.style.color = "white";
  DOM_ELEMENTS.form.style.color = "white";
  
  updateBackgroundImage(weatherDescription);
}

export function handleWeatherError(error) {
  console.error("Ошибка получения погоды:", error);
  DOM_ELEMENTS.weatherResult.textContent = 
    error.message || "Не удалось получить данные о погоде";
  DOM_ELEMENTS.weatherResult.style.color = "red";
}