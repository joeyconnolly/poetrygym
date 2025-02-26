/**
 * Main application script for The Poetry Gym
 */
(function() {
    'use strict';
    
    // App state
    const state = {
        selectedTopics: [],
        currentExercise: null,
        exercisesLoaded: false
    };
    
    // Initialize the application
    async function init() {
        try {
            // Load categories first
            await ExerciseManager.loadCategories();
            
            // Initialize UI components
            UI.initializeTopicFilters();
            
            // Set up event listeners
            setupEventListeners();
            
            // Start loading exercises
            await ExerciseManager.loadExercises();
            state.exercisesLoaded = true;
            
            // Generate first exercise
            generateNewExercise();
            
        } catch (error) {
            console.error('Error initializing app:', error);
            UI.showError('Failed to initialize the app. Please refresh the page.');
        }
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Generate button
        const generateButton = document.querySelector('.generate-btn');
        generateButton.addEventListener('click', generateNewExercise);
        
        // Topic filter buttons will be set up by UI.initializeTopicFilters()
    }
    
    // Generate a new exercise
    function generateNewExercise() {
        if (!state.exercisesLoaded) {
            UI.showMessage('Loading exercises, please wait...');
            return;
        }
        
        try {
            // Filter exercises based on selected topics
            const filteredExercises = ExerciseManager.filterExercisesByTopics(state.selectedTopics);
            
            if (filteredExercises.length === 0) {
                UI.showMessage('No exercises match your selected criteria. Try different filters!');
                return;
            }
            
            // Get a random exercise
            const randomExercise = Utils.getRandomItem(filteredExercises);
            state.currentExercise = randomExercise;
            
            // Display the exercise
            UI.displayExercise(randomExercise);
            
        } catch (error) {
            console.error('Error generating exercise:', error);
            UI.showError('Failed to generate an exercise. Please try again.');
        }
    }
    
    // Topic selection handler
    function toggleTopic(topic) {
        if (state.selectedTopics.includes(topic)) {
            // Remove topic
            state.selectedTopics = state.selectedTopics.filter(t => t !== topic);
        } else {
            // Add topic
            state.selectedTopics.push(topic);
        }
        
        // Update UI
        UI.updateTopicFilters(state.selectedTopics);
    }
    
    // Public API
    window.PoetryGym = {
        init,
        toggleTopic,
        generateNewExercise
    };
    
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', init);
})();
