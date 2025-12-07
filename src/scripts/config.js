export const DOM_ELEMENTS = {
  form: document.querySelector(".location-form"),
  weatherResult: document.querySelector(".weather-answer"),
  headerWidgets: document.querySelector(".header__widgets"),
  pageBody: document.querySelector("body"),
  mainContainer: document.querySelector(".main"),
  latitudeInput: document.querySelector("#latitude"),
  longitudeInput: document.querySelector("#longitude"),
  addWidgetButton: document.querySelector("#addWidget"),
};

export const MAP_TYPES = {
  MAPLIBRE: "maplibre",
  OPENLAYERS: "openlayers",
};