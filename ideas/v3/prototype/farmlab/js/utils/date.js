// Date Utilities

/**
 * Format date to Thai locale
 */
function formatDate(date, options = {}) {
    if (!date) return '-';
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) return '-';

    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
    };

    return d.toLocaleDateString('th-TH', defaultOptions);
}

/**
 * Format date to short format (dd/mm/yyyy)
 */
function formatDateShort(date) {
    if (!date) return '-';
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) return '-';

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
}

/**
 * Format date for input[type="date"]
 */
function formatDateInput(date) {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) return '';

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

/**
 * Parse date string
 */
function parseDate(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
}

/**
 * Check if valid date
 */
function isValidDate(date) {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d instanceof Date && !isNaN(d.getTime());
}

/**
 * Get today's date in YYYY-MM-DD format
 */
function getTodayString() {
    return formatDateInput(new Date());
}

// Export to window
window.DateUtils = {
    formatDate,
    formatDateShort,
    formatDateInput,
    parseDate,
    isValidDate,
    getTodayString
};
