export const applicationState = {
  weatherWidgets: [],
  currentMapType: null,
  activeWidgetIndex: -1,
  currentMapInstance: null,
};

export function addWidgetToState(widget) {
  applicationState.weatherWidgets.push(widget);
}

export function getWidgetByIndex(index) {
  return applicationState.weatherWidgets[index];
}

export function setCurrentMap(mapInstance, mapType) {
  applicationState.currentMapInstance = mapInstance;
  applicationState.currentMapType = mapType;
}

export function clearCurrentMap() {
  applicationState.currentMapInstance = null;
  applicationState.currentMapType = null;
}