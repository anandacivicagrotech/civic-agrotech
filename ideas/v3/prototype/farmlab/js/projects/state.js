// Projects State Management

// Global navigation state
let currentProjectId = null;
let currentRoundId = null;
let currentCropId = null;
let selectedProjectLayers = [];
let previousPage = null;

// Field ID counter for forms
let fieldIdCounter = 1;

// Export state
window.ProjectsState = {
    get currentProjectId() { return currentProjectId; },
    set currentProjectId(id) { currentProjectId = id; },

    get currentRoundId() { return currentRoundId; },
    set currentRoundId(id) { currentRoundId = id; },

    get currentCropId() { return currentCropId; },
    set currentCropId(id) { currentCropId = id; },

    get selectedProjectLayers() { return selectedProjectLayers; },
    set selectedProjectLayers(layers) { selectedProjectLayers = layers; },

    get previousPage() { return previousPage; },
    set previousPage(page) { previousPage = page; },

    get fieldIdCounter() { return fieldIdCounter; },
    incrementFieldId() { return ++fieldIdCounter; },
    resetFieldId() { fieldIdCounter = 1; }
};
