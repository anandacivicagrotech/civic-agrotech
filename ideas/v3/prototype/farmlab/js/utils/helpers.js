// General Helper Functions

/**
 * Generate unique ID
 */
function generateId(prefix = '') {
    return prefix + Date.now() + Math.random().toString(36).substr(2, 9);
}

/**
 * Format number with decimals
 */
function formatNumber(num, decimals = 2) {
    if (num === null || num === undefined || num === '') return '-';
    return Number(num).toFixed(decimals);
}

/**
 * Check if value is empty
 */
function isEmpty(value) {
    return value === null || value === undefined || value === '';
}

/**
 * Safe parse JSON
 */
function safeParseJSON(str, fallback = []) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return fallback;
    }
}

/**
 * Truncate text
 */
function truncate(str, maxLength = 100) {
    if (!str || str.length <= maxLength) return str;
    return str.substring(0, maxLength) + '...';
}

/**
 * Escape HTML
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Export to window
window.Utils = window.Utils || {};
Object.assign(window.Utils, {
    generateId,
    formatNumber,
    isEmpty,
    safeParseJSON,
    truncate,
    escapeHtml
});
