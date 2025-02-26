// Add these new functions to the UI module

/**
 * Show loading state
 */
function showLoadingState() {
    // Make sure the loading indicator exists
    if (!elements.loadingIndicator) {
        elements.loadingIndicator = document.createElement('div');
        elements.loadingIndicator.className = 'loading-indicator';
        elements.loadingIndicator.innerHTML = '<span>Loading exercises...</span>';
        elements.exerciseCard.appendChild(elements.loadingIndicator);
    } else {
        elements.loadingIndicator.classList.remove('hidden');
    }
    
    // Disable generate button during loading
    if (elements.generateButton) {
        elements.generateButton.disabled = true;
        elements.generateButton.classList.add('disabled');
    }
}

/**
 * Hide loading state
 */
function hideLoadingState() {
    // Hide the loading indicator
    if (elements.loadingIndicator) {
        elements.loadingIndicator.classList.add('hidden');
    }
    
    // Enable generate button
    if (elements.generateButton) {
        elements.generateButton.disabled = false;
        elements.generateButton.classList.remove('disabled');
    }
}

// Add these functions to the public API return statement
return {
    // ... existing functions
    showLoadingState,
    hideLoadingState
};
