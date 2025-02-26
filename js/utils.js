/**
 * Utility functions for The Poetry Gym
 */
const Utils = (function() {
    'use strict';
    
    /**
     * Get a random item from an array
     * @param {Array} array - The array to select from
     * @returns {*} A random item from the array
     */
    function getRandomItem(array) {
        if (!array || array.length === 0) {
            return null;
        }
        return array[Math.floor(Math.random() * array.length)];
    }
    
    /**
     * Debounce function to limit how often a function can be called
     * @param {Function} func - The function to debounce
     * @param {number} wait - The time to wait in milliseconds
     * @returns {Function} The debounced function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    /**
     * Create and show a message
     * @param {string} message - Message text to display
     * @param {number} duration - How long to show the message in ms
     * @param {boolean} isError - Whether this is an error message
     */
    function showMessage(message, duration = 3000, isError = false) {
        // Remove any existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = 'message' + (isError ? ' error-message' : '');
        messageElement.textContent = message;
        
        document.body.appendChild(messageElement);
        
        // Show the message
        setTimeout(() => {
            messageElement.classList.add('show');
        }, 10);
        
        // Hide and remove after duration
        setTimeout(() => {
            messageElement.classList.remove('show');
            setTimeout(() => {
                messageElement.remove();
            }, 300);
        }, duration);
    }
    
    /**
     * Show an error message
     * @param {string} message - Error message to display
     */
    function showError(message) {
        showMessage(message, 5000, true);
    }
    
    /**
     * Get URL parameters as an object
     * @returns {Object} Object with URL parameters
     */
    function getUrlParams() {
        const params = {};
        new URL(window.location.href).searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }
    
    /**
     * Update URL with a parameter without page reload
     * @param {string} key - Parameter name
     * @param {string} value - Parameter value
     */
    function updateUrlParam(key, value) {
        if (window.history && window.history.pushState) {
            const url = new URL(window.location.href);
            
            if (value) {
                url.searchParams.set(key, value);
            } else {
                url.searchParams.delete(key);
            }
            
            window.history.pushState({ [key]: value }, '', url.toString());
        }
    }
    
    /**
     * Store data in local storage with error handling
     * @param {string} key - The key to store under
     * @param {*} value - The value to store
     * @returns {boolean} Success state
     */
    function storeLocal(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error storing in localStorage:', e);
            return false;
        }
    }
    
    /**
     * Retrieve data from local storage with error handling
     * @param {string} key - The key to retrieve
     * @returns {*} The retrieved value or null
     */
    function getLocal(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error getting from localStorage:', e);
            return null;
        }
    }
    
    // Public API
    return {
        getRandomItem,
        debounce,
        showMessage,
        showError,
        getUrlParams,
        updateUrlParam,
        storeLocal,
        getLocal
    };
})();
