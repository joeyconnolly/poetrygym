/**
 * UI handling module for The Poetry Gym
 * Manages all user interface interactions and updates
 */
const UI = (function() {
    'use strict';
    
    // DOM elements cache
    const elements = {
        exerciseCard: document.getElementById('exercise-card'),
        topicFilters: document.getElementById('topic-filters'),
        generateButton: document.getElementById('generate-btn'),
        loadingIndicator: document.getElementById('loading-indicator')
    };
    
    // Exercise structure elements reference
    let exerciseElements = null;
    
    /**
     * Initialize topic filter buttons
     */
    function initializeTopicFilters() {
        console.log('Initializing topic filters...');
        
        // Make sure the topicFilters element exists
        if (!elements.topicFilters) {
            console.error('Topic filters container not found');
            return; // Exit gracefully
        }
        
        // Get categories
        const categories = PoetryGymData.getCategories();
        
        if (!categories || categories.length === 0) {
            console.warn('No categories available for filters');
            elements.topicFilters.innerHTML = '<span class="filter-note">No topics available</span>';
            return;
        }
        
        // Clear existing filters
        elements.topicFilters.innerHTML = '';
        
        // Create filter buttons
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.setAttribute('data-topic', category.id);
            button.textContent = category.id;
            button.addEventListener('click', () => {
                window.PoetryGym.toggleTopic(category.id);
            });
            
            elements.topicFilters.appendChild(button);
        });
        
        console.log('Topic filters initialized with', categories.length, 'categories');
    }
    
    /**
     * Update topic filter buttons based on selection
     */
    function updateTopicFilters(selectedTopics) {
        // Update button states
        const buttons = elements.topicFilters.querySelectorAll('.filter-btn');
        
        buttons.forEach(button => {
            const topic = button.getAttribute('data-topic');
            if (selectedTopics.includes(topic)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
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
    
    /**
     * Create exercise card structure
     */
    function createExerciseStructure() {
        // Hide loading indicator
        if (elements.loadingIndicator) {
            elements.loadingIndicator.classList.add('hidden');
        }
        
        // Clear the exercise card
        elements.exerciseCard.innerHTML = '';
        
        // Create header
        const header = document.createElement('div');
        header.className = 'exercise-header';
        
        const exerciseTitle = document.createElement('h2');
        exerciseTitle.className = 'exercise-title';
        
        const meta = document.createElement('div');
        meta.className = 'exercise-meta';
        
        const exerciseTopicTag = document.createElement('span');
        exerciseTopicTag.className = 'topic-tag';
        
        const separator = document.createTextNode(' · ');
        
        const exerciseLevelTag = document.createElement('span');
        exerciseLevelTag.className = 'level-tag';
        
        meta.appendChild(exerciseTopicTag);
        meta.appendChild(separator);
        meta.appendChild(exerciseLevelTag);
        
        header.appendChild(exerciseTitle);
        header.appendChild(meta);
        
        // Create content container
        const content = document.createElement('div');
        content.className = 'exercise-content';
        
        const exerciseContext = document.createElement('p');
        exerciseContext.className = 'context';
        
        const exerciseQuote = document.createElement('div');
        exerciseQuote.className = 'poem-quote';
        
        const exerciseAttribution = document.createElement('div');
        exerciseAttribution.className = 'poem-attribution';
        
        const exerciseTask = document.createElement('p');
        exerciseTask.className = 'task';
        
        const exerciseInstructions = document.createElement('ul');
        exerciseInstructions.className = 'task-list';
        
        const writingArea = document.createElement('div');
        writingArea.className = 'writing-area';
        
        const writingField = document.createElement('textarea');
        writingField.className = 'writing-field';
        writingField.placeholder = 'Write your poem here...';
        
        writingArea.appendChild(writingField);
        
        // Writing actions
        const writingActions = document.createElement('div');
        writingActions.className = 'writing-actions';
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Copy text`;
        copyBtn.addEventListener('click', handleCopyText);
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = "Abandon poem. Next exercise.";
        completeBtn.addEventListener('click', handleCompleteExercise);
        
        writingActions.appendChild(copyBtn);
        writingActions.appendChild(completeBtn);
        writingArea.appendChild(writingActions);
        
        content.appendChild(exerciseContext);
        content.appendChild(exerciseQuote);
        content.appendChild(exerciseAttribution);
        content.appendChild(exerciseTask);
        content.appendChild(exerciseInstructions);
        content.appendChild(writingArea);
        
        elements.exerciseCard.appendChild(header);
        elements.exerciseCard.appendChild(content);
        
        // Store references to elements for future updates
        exerciseElements = {
            title: exerciseTitle,
            topicTag: exerciseTopicTag,
            levelTag: exerciseLevelTag,
            context: exerciseContext,
            quote: exerciseQuote,
            attribution: exerciseAttribution,
            task: exerciseTask,
            instructions: exerciseInstructions,
            writingField: writingField,
            copyBtn: copyBtn,
            completeBtn: completeBtn
        };
        
        return exerciseElements;
    }
    
    /**
     * Display an exercise
     */
    function displayExercise(exercise) {
        console.log('Displaying exercise:', exercise.id);
        
        // Ensure we have a valid exercise object
        if (!exercise) {
            console.error('No exercise data provided');
            Utils.showError('Failed to load exercise data');
            return;
        }
        
        // Create/get structure elements if needed
        if (!exerciseElements) {
            exerciseElements = createExerciseStructure();
        }
        
        // Update content with fallbacks
        exerciseElements.title.textContent = exercise.title || 'Untitled Exercise';
        
        if (exercise.topics && exercise.topics.length > 0) {
            exerciseElements.topicTag.textContent = exercise.topics[0].charAt(0).toUpperCase() + exercise.topics[0].slice(1);
        } else {
            exerciseElements.topicTag.textContent = 'General';
        }
        
        exerciseElements.levelTag.textContent = (exercise.level || 'intermediate').charAt(0).toUpperCase() + 
                                               (exercise.level || 'intermediate').slice(1);
        
        exerciseElements.context.textContent = exercise.context || '';
        exerciseElements.quote.innerHTML = (exercise.quote || '').replace(/\n/g, '<br>');
        exerciseElements.attribution.textContent = exercise.attribution || '';
        exerciseElements.task.textContent = exercise.task || '';
        
        // Populate instructions list
        exerciseElements.instructions.innerHTML = '';
        if (exercise.instructions && exercise.instructions.length > 0) {
            exercise.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction;
                exerciseElements.instructions.appendChild(li);
            });
        }
        
        // Clear the writing field
        exerciseElements.writingField.value = '';
        
        // Scroll to top of exercise
        elements.exerciseCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    /**
     * Handle copy text button click
     */
    function handleCopyText() {
        if (!exerciseElements || !exerciseElements.writingField) return;
        
        navigator.clipboard.writeText(exerciseElements.writingField.value)
            .then(() => {
                exerciseElements.copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Copied!`;
                setTimeout(() => {
                    exerciseElements.copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Copy text`;
                }, 2000);
            })
            .catch(err => {
                console.error('Error copying text: ', err);
                Utils.showError('Could not copy text. Please try again.');
            });
    }
    
    /**
     * Handle complete exercise button click
     */
    function handleCompleteExercise(e) {
        // Create an ink splash effect
        createInkSplashEffect(e);
        
        // Wait for animation, then generate a new exercise
        setTimeout(() => {
            window.PoetryGym.generateNewExercise();
        }, 800);
    }
    
    /**
     * Create ink splash animation effect
     */
    function createInkSplashEffect(event) {
        const splash = document.createElement('div');
        splash.className = 'ink-splash';
        
        // Position it where the button was clicked
        const rect = event.target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get position relative to exercise card
        const cardRect = elements.exerciseCard.getBoundingClientRect();
        
        splash.style.left = (rect.left + rect.width/2 - cardRect.left - 50) + 'px';
        splash.style.top = (rect.top + rect.height/2 - cardRect.top + scrollTop - 50) + 'px';
        
        elements.exerciseCard.appendChild(splash);
        
        // Animate the splash
        splash.style.animation = 'ink-splash 1s ease-out forwards';
        
        // Remove splash element after animation
        setTimeout(() => {
            splash.remove();
        }, 1000);
    }
    
    // Public API
    return {
        initializeTopicFilters,
        updateTopicFilters,
        displayExercise,
        showLoadingState,
        hideLoadingState
    };
})();
