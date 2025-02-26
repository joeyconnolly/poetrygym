/**
 * Main application script for The Poetry Gym
 * GitHub Pages optimized version
 */
(function() {
    'use strict';
    
    // App state
    const state = {
        selectedTopics: [],
        currentExercise: null,
        lastExerciseId: null // Track the last exercise to avoid immediate repeats
    };
    
    // Initialize the application
    function init() {
        console.log('Initializing Poetry Gym');
        
        try {
            // Show loading state
            UI.showLoadingState();
            
            // Initialize UI components
            console.log('Setting up UI components');
            UI.initializeTopicFilters();
            
            // Set up event listeners
            console.log('Setting up event listeners');
            setupEventListeners();
            
            // Check for exercise ID in URL
            checkUrlForExerciseId();
            
            // Hide loading state
            UI.hideLoadingState();
            
            // Generate first exercise if none loaded from URL
            if (!state.currentExercise) {
                generateNewExercise();
            }
            
        } catch (error) {
            console.error('Error initializing app:', error);
            Utils.showError('Failed to initialize the app. Please refresh the page.');
        }
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Generate button
        const generateButton = document.getElementById('generate-btn');
        if (generateButton) {
            generateButton.addEventListener('click', generateNewExercise);
        }
        
        // Setup keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl+Enter or Cmd+Enter to generate new exercise
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                generateNewExercise();
                e.preventDefault();
            }
        });
    }
    
    // Generate a new exercise
    function generateNewExercise() {
        try {
            // Get all exercises
            const allExercises = PoetryGymData.getExercises();
            
            // Filter exercises based on selected topics
            let filteredExercises = allExercises;
            if (state.selectedTopics.length > 0) {
                filteredExercises = allExercises.filter(exercise => 
                    state.selectedTopics.some(topic => exercise.topics.includes(topic))
                );
            }
            
            if (filteredExercises.length === 0) {
                Utils.showMessage('No exercises match your selected criteria. Try different filters!');
                return;
            }
            
            // Filter out the last exercise to avoid repetition if there are enough exercises
            let availableExercises = filteredExercises;
            if (state.lastExerciseId && filteredExercises.length > 1) {
                availableExercises = filteredExercises.filter(ex => ex.id !== state.lastExerciseId);
            }
            
            // Get a random exercise
            const randomExercise = Utils.getRandomItem(availableExercises);
            state.currentExercise = randomExercise;
            state.lastExerciseId = randomExercise.id;
            
            // Display the exercise
            UI.displayExercise(randomExercise);
            
            // Update URL with exercise ID
            Utils.updateUrlParam('exercise', randomExercise.id);
            
        } catch (error) {
            console.error('Error generating exercise:', error);
            Utils.showError('Failed to generate an exercise. Please try again.');
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
        
        // Store selected topics in localStorage
        Utils.storeLocal('poetry-gym-topics', state.selectedTopics);
        
        // Generate new exercise based on updated topics
        generateNewExercise();
    }
    
    // Check if there's an exercise ID in the URL
    function checkUrlForExerciseId() {
        const params = Utils.getUrlParams();
        
        if (params.exercise) {
            loadExerciseById(params.exercise);
        }
        
        // Also load any saved topics from localStorage
        const savedTopics = Utils.getLocal('poetry-gym-topics');
        if (savedTopics && Array.isArray(savedTopics)) {
            state.selectedTopics = savedTopics;
            UI.updateTopicFilters(state.selectedTopics);
        }
    }
    
    // Load a specific exercise by ID
    function loadExerciseById(exerciseId) {
        const allExercises = PoetryGymData.getExercises();
        const exercise = allExercises.find(ex => ex.id === exerciseId);
        
        if (exercise) {
            state.currentExercise = exercise;
            state.lastExerciseId = exercise.id;
            UI.displayExercise(exercise);
            return true;
        } else {
            console.warn('Exercise not found:', exerciseId);
            return false;
        }
    }
    
    // Public API
    window.PoetryGym = {
        init,
        toggleTopic,
        generateNewExercise,
        loadExerciseById
    };
    
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', init);
})();
