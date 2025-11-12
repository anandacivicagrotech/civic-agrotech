/**
 * Projects Module - Main Entry Point
 *
 * This module is split into several files:
 * - state.js: State management
 * - navigation.js: Navigation & back button
 * - list.js: Projects list view
 * - forms.js: Create/edit forms
 * - details.js: Detail views
 *
 * All functions are available globally for onclick handlers
 */

// This file serves as documentation and entry point
// All sub-modules are loaded separately in index.html

console.log('📁 Projects module loaded');

// Main entry point called by app.js
// This is a temporary placeholder that will be called before projects.js loads
function renderProjects() {
    // Will call the real implementation once projects.js is loaded
    if (typeof showProjectsList === 'function') {
        showProjectsList();
    } else {
        console.log('Waiting for projects.js to load...');
    }
}
