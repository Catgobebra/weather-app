import { DOM_ELEMENTS } from './scripts/config.js';
import { 
  handleHeaderClick, 
  handleFormSubmit,
  handleMapLibreButtonClick,
  handleOpenLayersButtonClick 
} from './scripts/eventHandlers.js';

function setupEventListeners() {
  DOM_ELEMENTS.form.addEventListener("submit", handleFormSubmit);
  DOM_ELEMENTS.headerWidgets.addEventListener("click", handleHeaderClick);
  
  DOM_ELEMENTS.mainContainer.addEventListener('click', handleMapContainerClick);
}

function handleMapContainerClick(event) {
  const target = event.target;
  
  if (target.id === 'mapLibre-button') {
    event.preventDefault();
    handleMapLibreButtonClick(event);
  } else if (target.id === 'openLayers-button') {
    event.preventDefault();
    handleOpenLayersButtonClick(event);
  }
}

function initializeApplication() {
  setupEventListeners();
  console.log("Приложение погоды инициализировано");
}

document.addEventListener("DOMContentLoaded", initializeApplication);