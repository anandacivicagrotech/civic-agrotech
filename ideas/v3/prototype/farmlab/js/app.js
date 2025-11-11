// Main application logic and navigation

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing FarmLab...');
    
    // Initialize all tabs
    try {
        renderProjects();
        renderDataEntryForm();
        renderGreenhousesTab();
        renderGreenhouses();
        console.log('All tabs initialized successfully');
    } catch (error) {
        console.error('Error initializing tabs:', error);
    }
});

// Tab navigation
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    // Clear navigation history when switching tabs
    if (typeof navigationHistory !== 'undefined') {
        navigationHistory = [];
    }

    // Load tab-specific content (reset to main view)
    if (tabName === 'dashboard') {
        loadDashboard();
    } else if (tabName === 'projects') {
        // Reset to projects list
        showProjectsList();
    } else if (tabName === 'data') {
        // Data entry already rendered
    } else if (tabName === 'greenhouses') {
        loadGreenhouses();
    }
}

// Placeholder for dashboard
function loadDashboard() {
    console.log('Dashboard - กำลังพัฒนาใน Phase 5');
}
