import { DOM_ELEMENTS } from './config.js';
import { addWidgetToState, getWidgetByIndex, applicationState } from './state.js';
import { removeAllMaps, removeMapSelectionButtons } from './mapManager.js';
import { resetWeatherDisplay } from './weatherManager.js';

export function addWeatherWidget(latitude, longitude) {
  if (!areCoordinatesValid(latitude, longitude)) return;
  
  const newWidget = {
    latitude: latitude,
    longitude: longitude,
    timestamp: Date.now(),
  };
  
  addWidgetToState(newWidget);
  const widgetIndex = applicationState.weatherWidgets.length - 1;
  
  createWidgetButton(widgetIndex);
  
  return widgetIndex;
}

function areCoordinatesValid(latitude, longitude) {
  return latitude && longitude && 
         !isNaN(parseFloat(latitude)) && 
         !isNaN(parseFloat(longitude));
}

function createWidgetButton(widgetIndex) {
  const widgetButton = document.createElement("button");
  widgetButton.className = "widget-button button";
  widgetButton.textContent = applicationState.weatherWidgets.length;
  widgetButton.dataset.index = widgetIndex;
  
  DOM_ELEMENTS.headerWidgets.insertBefore(
    widgetButton, 
    DOM_ELEMENTS.addWidgetButton
  );
}

export function switchActiveWidget(widgetIndex) {
  if (widgetIndex >= applicationState.weatherWidgets.length) {
    console.error("Виджет не найден:", widgetIndex);
    return;
  }
  
  const targetWidget = getWidgetByIndex(widgetIndex);
  DOM_ELEMENTS.latitudeInput.value = targetWidget.latitude;
  DOM_ELEMENTS.longitudeInput.value = targetWidget.longitude;
  
  resetWeatherDisplay();
  removeAllMaps();
  removeMapSelectionButtons();
}