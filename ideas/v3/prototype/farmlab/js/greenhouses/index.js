/**
 * Greenhouses Module - Main Entry Point
 *
 * This module is split into several files:
 * - state.js: State management
 * - list.js: Greenhouses list view
 * - forms.js: Create/edit forms
 * - details.js: Detail views
 *
 * All functions are available globally for onclick handlers
 */

console.log('🏠 Greenhouses module loaded');

// Main entry point called by app.js
function loadGreenhouses() {
    console.log('Loading Greenhouses...');
    if (typeof renderGreenhouses === 'function') {
        renderGreenhouses();
    }
}
