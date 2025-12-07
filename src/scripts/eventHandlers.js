import { DOM_ELEMENTS } from './config.js';
import { validateCoordinates } from "./validation/validation";
import { fetchWeatherData } from "./api/fetchWeatherData";
import { addWeatherWidget, switchActiveWidget } from './widgetManager.js';
import { 
  removeAllMaps, 
  removeMapSelectionButtons,
  createMapSelectionButtons,
  initializeOpenLayersMap,
  initializeMapLibreMap 
} from './mapManager.js';
import { 
  displayWeatherResults, 
  handleWeatherError 
} from './weatherManager.js';
import weatherCodeMapping from '../data/vmo.json';

export function handleHeaderClick(event) {
  const target = event.target;
  
  if (target.id === "addWidget") {
    event.preventDefault();
    addWeatherWidget(
      DOM_ELEMENTS.latitudeInput.value,
      DOM_ELEMENTS.longitudeInput.value
    );
  } else if (target.classList.contains("widget-button")) {
    const widgetIndex = parseInt(target.dataset.index);
    switchActiveWidget(widgetIndex);
  }
}

export async function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(DOM_ELEMENTS.form);
  const latitude = formData.get("Latitude");
  const longitude = formData.get("Longitude");
  
  await processWeatherRequest(latitude, longitude);
}

export function handleMapLibreButtonClick(event) {
  event.preventDefault();
  const latitude = DOM_ELEMENTS.latitudeInput.value;
  const longitude = DOM_ELEMENTS.longitudeInput.value;
  console.log('MapLibre clicked');
  
  if (!latitude || !longitude) {
    alert("Введите координаты для отображения карты");
    return;
  }
  
  initializeMapLibreMap(latitude, longitude);
}

export function handleOpenLayersButtonClick(event) {
  event.preventDefault();
  const latitude = DOM_ELEMENTS.latitudeInput.value;
  const longitude = DOM_ELEMENTS.longitudeInput.value;
  console.log('OpenLayers clicked');
  
  if (!latitude || !longitude) {
    alert("Введите координаты для отображения карты");
    return;
  }
  
  initializeOpenLayersMap(latitude, longitude);
}

async function processWeatherRequest(latitude, longitude) {
  try {
    validateCoordinates(latitude, longitude);
    const weatherData = await fetchWeatherData(latitude, longitude);
    
    const weatherCode = weatherData.current.weather_code;
    const weatherDescription = weatherCodeMapping[weatherCode];
    
    if (!weatherDescription) {
      throw new Error("Неизвестный код погоды");
    }
    
    removeAllMaps();
    removeMapSelectionButtons();
    
    displayWeatherResults(weatherData, weatherDescription);
    createMapSelectionButtons();
    
  } catch (error) {
    handleWeatherError(error);
  }
}