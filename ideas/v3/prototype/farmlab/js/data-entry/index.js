/**
 * Data Entry Module - Main Entry Point
 *
 * This module handles plant data recording
 *
 * All functions are available globally for onclick handlers
 */

console.log('📝 Data Entry module loaded');

// Main entry point called by app.js
function updateDataProjectOptions() {
    if (typeof loadDataEntryTab === 'function') {
        loadDataEntryTab();
    }
}
