import { DOM_ELEMENTS, MAP_TYPES } from './config.js';
import { setCurrentMap, clearCurrentMap } from './state.js';

export function removeAllMaps() {
  const mapElements = document.querySelectorAll(".map");
  mapElements.forEach(mapElement => mapElement.remove());
  
  clearCurrentMap();
}

export function removeMapSelectionButtons() {
  const mapButtonContainer = document.querySelector(".map-choose-container");
  if (mapButtonContainer) {
    mapButtonContainer.remove();
  }
}

function createMapElement(mapType) {
  const mapContainer = document.createElement("div");
  mapContainer.id = `map_${mapType}`;
  mapContainer.className = "map";
  DOM_ELEMENTS.mainContainer.appendChild(mapContainer);
  return mapContainer;
}

export function initializeMapLibreMap(latitude, longitude) {
  removeAllMaps();
  
  const mapElement = createMapElement(MAP_TYPES.MAPLIBRE);
  
  const mapInstance = new maplibregl.Map({
    container: mapElement.id,
    style: "https://demotiles.maplibre.org/style.json",
    center: [longitude, latitude],
    zoom: 9,
  });

  const mapMarker = new maplibregl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(mapInstance);
  
  setCurrentMap(mapInstance, MAP_TYPES.MAPLIBRE);
  
  return mapInstance;
}

export function initializeOpenLayersMap(latitude, longitude) {
  removeAllMaps();
  
  const mapElement = createMapElement(MAP_TYPES.OPENLAYERS);
  
  const markerFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude, latitude])),
  });

  const markerLayer = new ol.layer.Vector({
    source: new ol.source.Vector({ features: [markerFeature] }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: "./assets/img/marker.png",
      }),
    }),
  });

  const mapInstance = new ol.Map({
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 10,
    }),
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() }),
      markerLayer,
    ],
    target: mapElement.id,
  });
  
  setCurrentMap(mapInstance, MAP_TYPES.OPENLAYERS);
  
  return mapInstance;
}

export function createMapSelectionButtons() {
  removeMapSelectionButtons();
  removeAllMaps();
  
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "map-choose-container";
  
  const mapLibreButton = createMapButton("MapLibre", "mapLibre-button");
  const openLayersButton = createMapButton("OpenLayers", "openLayers-button");
  
  buttonContainer.appendChild(mapLibreButton);
  buttonContainer.appendChild(openLayersButton);
  DOM_ELEMENTS.mainContainer.appendChild(buttonContainer);
}

function createMapButton(buttonText, buttonId) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "map-choose-container__button button";
  button.id = buttonId;
  button.textContent = buttonText;
  return button;
}