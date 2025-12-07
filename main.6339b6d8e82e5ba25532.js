/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/vmo.json":
/*!***************************!*\
  !*** ./src/data/vmo.json ***!
  \***************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"0":{"day":"Ясно","night":"Ясно","icon_day":"☀️","icon_night":"🌙","category":"clear","img":"clear"},"1":{"day":"Преимущественно ясно","night":"Преимущественно ясно","icon_day":"🌤️","icon_night":"☁️","category":"clear","img":"clear"},"2":{"day":"Переменная облачность","night":"Переменная облачность","icon_day":"⛅","icon_night":"☁️","category":"cloudy","img":"cloudy"},"3":{"day":"Пасмурно","night":"Пасмурно","icon_day":"☁️","icon_night":"☁️","category":"cloudy","img":"cloudy"},"45":{"day":"Туман","night":"Туман","icon_day":"🌫️","icon_night":"🌫️","category":"fog","img":"fog"},"48":{"day":"Туман с инеем","night":"Туман с инеем","icon_day":"🌫️","icon_night":"🌫️","category":"fog","img":"fog"},"51":{"day":"Морось: слабая","night":"Морось: слабая","icon_day":"🌦️","icon_night":"🌧️","category":"drizzle","img":"rain"},"53":{"day":"Морось: умеренная","night":"Морось: умеренная","icon_day":"🌦️","icon_night":"🌧️","category":"drizzle","img":"rain"},"55":{"day":"Морось: сильная","night":"Морось: сильная","icon_day":"🌧️","icon_night":"🌧️","category":"drizzle","img":"rain"},"56":{"day":"Ледяная морось: слабая","night":"Ледяная морось: слабая","icon_day":"🌨️","icon_night":"🌨️","category":"freezing_drizzle","img":"rain"},"57":{"day":"Ледяная морось: сильная","night":"Ледяная морось: сильная","icon_day":"🌨️","icon_night":"🌨️","category":"freezing_drizzle","img":"rain"},"61":{"day":"Дождь: слабый","night":"Дождь: слабый","icon_day":"🌦️","icon_night":"🌧️","category":"rain","img":"rain"},"63":{"day":"Дождь: умеренный","night":"Дождь: умеренный","icon_day":"🌧️","icon_night":"🌧️","category":"rain","img":"rain"},"65":{"day":"Дождь: сильный","night":"Дождь: сильный","icon_day":"🌧️","icon_night":"🌧️","category":"rain","img":"rain"},"66":{"day":"Ледяной дождь: слабый","night":"Ледяной дождь: слабый","icon_day":"🌨️","icon_night":"🌨️","category":"freezing_rain","img":"rain"},"67":{"day":"Ледяной дождь: сильный","night":"Ледяной дождь: сильный","icon_day":"🌨️","icon_night":"🌨️","category":"freezing_rain","img":"rain"},"71":{"day":"Снег: слабый","night":"Снег: слабый","icon_day":"🌨️","icon_night":"🌨️","category":"snow","img":"snow"},"73":{"day":"Снег: умеренный","night":"Снег: умеренный","icon_day":"🌨️","icon_night":"🌨️","category":"snow","img":"snow"},"75":{"day":"Снег: сильный","night":"Снег: сильный","icon_day":"🌨️","icon_night":"🌨️","category":"snow","img":"snow"},"77":{"day":"Снежные зерна","night":"Снежные зерна","icon_day":"🌨️","icon_night":"🌨️","category":"snow","img":"snow"},"80":{"day":"Ливневый дождь: слабый","night":"Ливневый дождь: слабый","icon_day":"🌦️","icon_night":"🌧️","category":"shower_rain","img":"rain"},"81":{"day":"Ливневый дождь: умеренный","night":"Ливневый дождь: умеренный","icon_day":"🌧️","icon_night":"🌧️","category":"shower_rain","img":"rain"},"82":{"day":"Ливневый дождь: сильный","night":"Ливневый дождь: сильный","icon_day":"🌧️","icon_night":"🌧️","category":"shower_rain","img":"rain"},"85":{"day":"Ливневый снег: слабый","night":"Ливневый снег: слабый","icon_day":"🌨️","icon_night":"🌨️","category":"shower_snow","img":"snow"},"86":{"day":"Ливневый снег: сильный","night":"Ливневый снег: сильный","icon_day":"🌨️","icon_night":"🌨️","category":"shower_snow","img":"snow"},"95":{"day":"Гроза","night":"Гроза","icon_day":"⛈️","icon_night":"⛈️","category":"thunderstorm","img":"thunderstorm"},"96":{"day":"Гроза со слабым градом","night":"Гроза со слабым градом","icon_day":"⛈️","icon_night":"⛈️","category":"thunderstorm_hail","img":"thunderstorm"},"99":{"day":"Гроза с сильным градом","night":"Гроза с сильным градом","icon_day":"⛈️","icon_night":"⛈️","category":"thunderstorm_hail","img":"thunderstorm"}}');

/***/ }),

/***/ "./src/scripts/api/fetchWeatherData.js":
/*!*********************************************!*\
  !*** ./src/scripts/api/fetchWeatherData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function fetchWeatherData(_x, _x2) {
  return _fetchWeatherData.apply(this, arguments);
}
function _fetchWeatherData() {
  _fetchWeatherData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(lat, lon) {
    var res;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return fetch("https://api.open-meteo.com/v1/forecast?latitude=".concat(lat, "&longitude=").concat(lon, "&current=temperature_2m,wind_speed_10m,weather_code,visibility,surface_pressure"), {
            headers: {
              accept: "application/json"
            }
          });
        case 1:
          res = _context.v;
          if (res.ok) {
            _context.n = 2;
            break;
          }
          throw new Error("HTTP ".concat(res.status));
        case 2:
          return _context.a(2, res.json());
      }
    }, _callee);
  }));
  return _fetchWeatherData.apply(this, arguments);
}

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM_ELEMENTS: () => (/* binding */ DOM_ELEMENTS),
/* harmony export */   MAP_TYPES: () => (/* binding */ MAP_TYPES)
/* harmony export */ });
var DOM_ELEMENTS = {
  form: document.querySelector(".location-form"),
  weatherResult: document.querySelector(".weather-answer"),
  headerWidgets: document.querySelector(".header__widgets"),
  pageBody: document.querySelector("body"),
  mainContainer: document.querySelector(".main"),
  latitudeInput: document.querySelector("#latitude"),
  longitudeInput: document.querySelector("#longitude"),
  addWidgetButton: document.querySelector("#addWidget")
};
var MAP_TYPES = {
  MAPLIBRE: "maplibre",
  OPENLAYERS: "openlayers"
};

/***/ }),

/***/ "./src/scripts/eventHandlers.js":
/*!**************************************!*\
  !*** ./src/scripts/eventHandlers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit),
/* harmony export */   handleHeaderClick: () => (/* binding */ handleHeaderClick),
/* harmony export */   handleMapLibreButtonClick: () => (/* binding */ handleMapLibreButtonClick),
/* harmony export */   handleOpenLayersButtonClick: () => (/* binding */ handleOpenLayersButtonClick)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");
/* harmony import */ var _validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation/validation */ "./src/scripts/validation/validation.js");
/* harmony import */ var _api_fetchWeatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/fetchWeatherData */ "./src/scripts/api/fetchWeatherData.js");
/* harmony import */ var _widgetManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgetManager.js */ "./src/scripts/widgetManager.js");
/* harmony import */ var _mapManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapManager.js */ "./src/scripts/mapManager.js");
/* harmony import */ var _weatherManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weatherManager.js */ "./src/scripts/weatherManager.js");
/* harmony import */ var _data_vmo_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/vmo.json */ "./src/data/vmo.json");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







function handleHeaderClick(event) {
  var target = event.target;
  if (target.id === "addWidget") {
    event.preventDefault();
    (0,_widgetManager_js__WEBPACK_IMPORTED_MODULE_3__.addWeatherWidget)(_config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.latitudeInput.value, _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.longitudeInput.value);
  } else if (target.classList.contains("widget-button")) {
    var widgetIndex = parseInt(target.dataset.index);
    (0,_widgetManager_js__WEBPACK_IMPORTED_MODULE_3__.switchActiveWidget)(widgetIndex);
  }
}
function handleFormSubmit(_x) {
  return _handleFormSubmit.apply(this, arguments);
}
function _handleFormSubmit() {
  _handleFormSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
    var formData, latitude, longitude;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          event.preventDefault();
          formData = new FormData(_config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.form);
          latitude = formData.get("Latitude");
          longitude = formData.get("Longitude");
          _context.n = 1;
          return processWeatherRequest(latitude, longitude);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _handleFormSubmit.apply(this, arguments);
}
function handleMapLibreButtonClick(event) {
  event.preventDefault();
  var latitude = _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.latitudeInput.value;
  var longitude = _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.longitudeInput.value;
  console.log('MapLibre clicked');
  if (!latitude || !longitude) {
    alert("Введите координаты для отображения карты");
    return;
  }
  (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_4__.initializeMapLibreMap)(latitude, longitude);
}
function handleOpenLayersButtonClick(event) {
  event.preventDefault();
  var latitude = _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.latitudeInput.value;
  var longitude = _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.longitudeInput.value;
  console.log('OpenLayers clicked');
  if (!latitude || !longitude) {
    alert("Введите координаты для отображения карты");
    return;
  }
  (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_4__.initializeOpenLayersMap)(latitude, longitude);
}
function processWeatherRequest(_x2, _x3) {
  return _processWeatherRequest.apply(this, arguments);
}
function _processWeatherRequest() {
  _processWeatherRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(latitude, longitude) {
    var weatherData, weatherCode, weatherDescription, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          (0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.validateCoordinates)(latitude, longitude);
          _context2.n = 1;
          return (0,_api_fetchWeatherData__WEBPACK_IMPORTED_MODULE_2__.fetchWeatherData)(latitude, longitude);
        case 1:
          weatherData = _context2.v;
          weatherCode = weatherData.current.weather_code;
          weatherDescription = _data_vmo_json__WEBPACK_IMPORTED_MODULE_6__[weatherCode];
          if (weatherDescription) {
            _context2.n = 2;
            break;
          }
          throw new Error("Неизвестный код погоды");
        case 2:
          (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_4__.removeAllMaps)();
          (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_4__.removeMapSelectionButtons)();
          (0,_weatherManager_js__WEBPACK_IMPORTED_MODULE_5__.displayWeatherResults)(weatherData, weatherDescription);
          (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_4__.createMapSelectionButtons)();
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          (0,_weatherManager_js__WEBPACK_IMPORTED_MODULE_5__.handleWeatherError)(_t);
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return _processWeatherRequest.apply(this, arguments);
}

/***/ }),

/***/ "./src/scripts/mapManager.js":
/*!***********************************!*\
  !*** ./src/scripts/mapManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMapSelectionButtons: () => (/* binding */ createMapSelectionButtons),
/* harmony export */   initializeMapLibreMap: () => (/* binding */ initializeMapLibreMap),
/* harmony export */   initializeOpenLayersMap: () => (/* binding */ initializeOpenLayersMap),
/* harmony export */   removeAllMaps: () => (/* binding */ removeAllMaps),
/* harmony export */   removeMapSelectionButtons: () => (/* binding */ removeMapSelectionButtons)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./src/scripts/state.js");


function removeAllMaps() {
  var mapElements = document.querySelectorAll(".map");
  mapElements.forEach(function (mapElement) {
    return mapElement.remove();
  });
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.clearCurrentMap)();
}
function removeMapSelectionButtons() {
  var mapButtonContainer = document.querySelector(".map-choose-container");
  if (mapButtonContainer) {
    mapButtonContainer.remove();
  }
}
function createMapElement(mapType) {
  var mapContainer = document.createElement("div");
  mapContainer.id = "map_".concat(mapType);
  mapContainer.className = "map";
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.mainContainer.appendChild(mapContainer);
  return mapContainer;
}
function initializeMapLibreMap(latitude, longitude) {
  removeAllMaps();
  var mapElement = createMapElement(_config_js__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPES.MAPLIBRE);
  var mapInstance = new maplibregl.Map({
    container: mapElement.id,
    style: "https://demotiles.maplibre.org/style.json",
    center: [longitude, latitude],
    zoom: 9
  });
  var mapMarker = new maplibregl.Marker().setLngLat([longitude, latitude]).addTo(mapInstance);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentMap)(mapInstance, _config_js__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPES.MAPLIBRE);
  return mapInstance;
}
function initializeOpenLayersMap(latitude, longitude) {
  removeAllMaps();
  var mapElement = createMapElement(_config_js__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPES.OPENLAYERS);
  var markerFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude, latitude]))
  });
  var markerLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [markerFeature]
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: "./assets/img/marker.png"
      })
    })
  });
  var mapInstance = new ol.Map({
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 10
    }),
    layers: [new ol.layer.Tile({
      source: new ol.source.OSM()
    }), markerLayer],
    target: mapElement.id
  });
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentMap)(mapInstance, _config_js__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPES.OPENLAYERS);
  return mapInstance;
}
function createMapSelectionButtons() {
  removeMapSelectionButtons();
  removeAllMaps();
  var buttonContainer = document.createElement("div");
  buttonContainer.className = "map-choose-container";
  var mapLibreButton = createMapButton("MapLibre", "mapLibre-button");
  var openLayersButton = createMapButton("OpenLayers", "openLayers-button");
  buttonContainer.appendChild(mapLibreButton);
  buttonContainer.appendChild(openLayersButton);
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.mainContainer.appendChild(buttonContainer);
}
function createMapButton(buttonText, buttonId) {
  var button = document.createElement("button");
  button.type = "button";
  button.className = "map-choose-container__button button";
  button.id = buttonId;
  button.textContent = buttonText;
  return button;
}

/***/ }),

/***/ "./src/scripts/state.js":
/*!******************************!*\
  !*** ./src/scripts/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWidgetToState: () => (/* binding */ addWidgetToState),
/* harmony export */   applicationState: () => (/* binding */ applicationState),
/* harmony export */   clearCurrentMap: () => (/* binding */ clearCurrentMap),
/* harmony export */   getWidgetByIndex: () => (/* binding */ getWidgetByIndex),
/* harmony export */   setCurrentMap: () => (/* binding */ setCurrentMap)
/* harmony export */ });
var applicationState = {
  weatherWidgets: [],
  currentMapType: null,
  activeWidgetIndex: -1,
  currentMapInstance: null
};
function addWidgetToState(widget) {
  applicationState.weatherWidgets.push(widget);
}
function getWidgetByIndex(index) {
  return applicationState.weatherWidgets[index];
}
function setCurrentMap(mapInstance, mapType) {
  applicationState.currentMapInstance = mapInstance;
  applicationState.currentMapType = mapType;
}
function clearCurrentMap() {
  applicationState.currentMapInstance = null;
  applicationState.currentMapType = null;
}

/***/ }),

/***/ "./src/scripts/validation/validation.js":
/*!**********************************************!*\
  !*** ./src/scripts/validation/validation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateCoordinates: () => (/* binding */ validateCoordinates)
/* harmony export */ });
var PATTERNS = {
  Latitude: /^-?(0|[1-9]\d*)(\.\d+)?$/,
  Longitude: /^-?(0|[1-9]\d*)(\.\d+)?$/
};
function validateCoordinates(lat, lon) {
  if (isNaN(lat) || isNaN(lon)) throw new Error("Введите числовые значения");
  if (!(PATTERNS.Latitude.test(lat) && PATTERNS.Longitude.test(lon))) throw new Error("Введите валидные данные");
  if (lat < -90 || lat > 90) throw new Error("Широта должна быть от -90 до 90");
  if (lon < -180 || lon > 180) throw new Error("Долгота должна быть от -180 до 180");
}

/***/ }),

/***/ "./src/scripts/weatherManager.js":
/*!***************************************!*\
  !*** ./src/scripts/weatherManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayWeatherResults: () => (/* binding */ displayWeatherResults),
/* harmony export */   formatWeatherHTML: () => (/* binding */ formatWeatherHTML),
/* harmony export */   handleWeatherError: () => (/* binding */ handleWeatherError),
/* harmony export */   resetWeatherDisplay: () => (/* binding */ resetWeatherDisplay),
/* harmony export */   updateBackgroundImage: () => (/* binding */ updateBackgroundImage)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");

function formatWeatherHTML(weatherData, weatherDescription) {
  var currentData = weatherData.current;
  var currentUnits = weatherData.current_units;
  return "\n    <div class=\"weather-info\">\n      <p><strong>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430:</strong> ".concat(currentData.temperature_2m, " ").concat(currentUnits.temperature_2m, " \uD83C\uDF21\uFE0F</p>\n      <p><strong>\u041F\u043E\u0433\u043E\u0434\u0430:</strong> ").concat(weatherDescription.day, " ").concat(weatherDescription.icon_day, "</p>\n      <p><strong>\u0412\u0435\u0442\u0435\u0440:</strong> ").concat(currentData.wind_speed_10m, " ").concat(currentUnits.wind_speed_10m, " \uD83D\uDCA8</p>\n      <p><strong>\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C:</strong> ").concat(currentData.visibility, " ").concat(currentUnits.visibility, " \uD83D\uDC40</p>\n      <p><strong>\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435:</strong> ").concat(currentData.surface_pressure, " ").concat(currentUnits.surface_pressure, " \u23F2\uFE0F</p>\n    </div>\n  ");
}
function updateBackgroundImage(weatherDescription) {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.pageBody.style.background = "\n    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(./assets/img/".concat(weatherDescription.img, ".jpg) center/cover no-repeat fixed\n  ");
}
function resetWeatherDisplay() {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.weatherResult.innerHTML = "";
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.weatherResult.style.color = "black";
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.form.style.color = "black";
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.pageBody.style.background = "";
}
function displayWeatherResults(weatherData, weatherDescription) {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.weatherResult.innerHTML = formatWeatherHTML(weatherData, weatherDescription);
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.weatherResult.style.color = "white";
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.form.style.color = "white";
  updateBackgroundImage(weatherDescription);
}
function handleWeatherError(error) {
  console.error("Ошибка получения погоды:", error);
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.weatherResult.textContent = error.message || "Не удалось получить данные о погоде";
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.weatherResult.style.color = "red";
}

/***/ }),

/***/ "./src/scripts/widgetManager.js":
/*!**************************************!*\
  !*** ./src/scripts/widgetManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWeatherWidget: () => (/* binding */ addWeatherWidget),
/* harmony export */   switchActiveWidget: () => (/* binding */ switchActiveWidget)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./src/scripts/state.js");
/* harmony import */ var _mapManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapManager.js */ "./src/scripts/mapManager.js");
/* harmony import */ var _weatherManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherManager.js */ "./src/scripts/weatherManager.js");




function addWeatherWidget(latitude, longitude) {
  if (!areCoordinatesValid(latitude, longitude)) return;
  var newWidget = {
    latitude: latitude,
    longitude: longitude,
    timestamp: Date.now()
  };
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.addWidgetToState)(newWidget);
  var widgetIndex = _state_js__WEBPACK_IMPORTED_MODULE_1__.applicationState.weatherWidgets.length - 1;
  createWidgetButton(widgetIndex);
  return widgetIndex;
}
function areCoordinatesValid(latitude, longitude) {
  return latitude && longitude && !isNaN(parseFloat(latitude)) && !isNaN(parseFloat(longitude));
}
function createWidgetButton(widgetIndex) {
  var widgetButton = document.createElement("button");
  widgetButton.className = "widget-button button";
  widgetButton.textContent = _state_js__WEBPACK_IMPORTED_MODULE_1__.applicationState.weatherWidgets.length;
  widgetButton.dataset.index = widgetIndex;
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.headerWidgets.insertBefore(widgetButton, _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.addWidgetButton);
}
function switchActiveWidget(widgetIndex) {
  if (widgetIndex >= _state_js__WEBPACK_IMPORTED_MODULE_1__.applicationState.weatherWidgets.length) {
    console.error("Виджет не найден:", widgetIndex);
    return;
  }
  var targetWidget = (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWidgetByIndex)(widgetIndex);
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.latitudeInput.value = targetWidget.latitude;
  _config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.longitudeInput.value = targetWidget.longitude;
  (0,_weatherManager_js__WEBPACK_IMPORTED_MODULE_3__.resetWeatherDisplay)();
  (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_2__.removeAllMaps)();
  (0,_mapManager_js__WEBPACK_IMPORTED_MODULE_2__.removeMapSelectionButtons)();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/config.js */ "./src/scripts/config.js");
/* harmony import */ var _scripts_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/eventHandlers.js */ "./src/scripts/eventHandlers.js");


function setupEventListeners() {
  _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.form.addEventListener("submit", _scripts_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleFormSubmit);
  _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.headerWidgets.addEventListener("click", _scripts_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleHeaderClick);
  _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__.DOM_ELEMENTS.mainContainer.addEventListener('click', handleMapContainerClick);
}
function handleMapContainerClick(event) {
  var target = event.target;
  if (target.id === 'mapLibre-button') {
    event.preventDefault();
    (0,_scripts_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleMapLibreButtonClick)(event);
  } else if (target.id === 'openLayers-button') {
    event.preventDefault();
    (0,_scripts_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleOpenLayersButtonClick)(event);
  }
}
function initializeApplication() {
  setupEventListeners();
  console.log("Приложение погоды инициализировано");
}
document.addEventListener("DOMContentLoaded", initializeApplication);
})();

/******/ })()
;
//# sourceMappingURL=main.6339b6d8e82e5ba25532.js.map