// LocalStorage Wrapper

/**
 * Save data to localStorage
 */
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

/**
 * Load data from localStorage
 */
function loadFromStorage(key, fallback = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return fallback;
    }
}

/**
 * Remove item from localStorage
 */
function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error('Error removing from localStorage:', e);
        return false;
    }
}

/**
 * Clear all localStorage
 */
function clearStorage() {
    try {
        localStorage.clear();
        return true;
    } catch (e) {
        console.error('Error clearing localStorage:', e);
        return false;
    }
}

/**
 * Check if key exists
 */
function hasInStorage(key) {
    return localStorage.getItem(key) !== null;
}

// Export to window
window.StorageUtils = {
    save: saveToStorage,
    load: loadFromStorage,
    remove: removeFromStorage,
    clear: clearStorage,
    has: hasInStorage
};
