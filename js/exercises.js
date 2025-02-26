/**
 * Exercise management module for The Poetry Gym
 * Handles loading, filtering, and managing exercise data from a single JSON file
 */
const ExerciseManager = (function() {
    'use strict';
    
    // Data storage
    const data = {
        exercises: [],
        categories: [],
        exercisesByTopic: {},
        exercisesById: {},
        version: null,
        lastUpdated: null
    };
    
    // Default exercises (for initial/fallback use)
    const defaultExercises = [
        {
            id: "image-chain-01",
            title: "Image Chain",
            topics: ["image-making"],
            level: "intermediate",
            context: "Image-making lies at the heart of poetry. The ability to transition between images creates a sense of movement and discovery in a poem.",
            quote: "The dragonfly hovers like a blue thread\nloosened from the sky—\nIn the elevator, the woman's silk scarf\ncarries the scent of lemons.",
            attribution: "— Jane Hirshfield, from \"The Weighing\"",
            task: "Create a poem that links distinct images through subtle transitions.",
            instructions: [
                "Begin with a concrete, vivid image from the natural world",
                "Find one element from that image to transition to a completely different image",
                "Continue this chain for exactly five stanzas of 3-4 lines each",
                "By the final stanza, you should be in a completely different setting than where you began",
                "Use no more than two adjectives per stanza"
            ]
        },
        {
            id: "end-to-end-rhyming-01",
            title: "End-to-End Rhyming",
            topics: ["rhyme"],
            level: "starting",
            context: "While contemporary poetry often uses slant rhymes or no rhymes at all, understanding classical rhyme schemes builds fundamental craft awareness.",
            quote: "Tell all the truth but tell it slant—\nSuccess in Circuit lies\nToo bright for our infirm Delight\nThe Truth's superb surprise",
            attribution: "— Emily Dickinson, from \"Tell all the truth but tell it slant\"",
            task: "Compose a short poem with a structured rhyme scheme.",
            instructions: [
                "Write a poem of exactly twelve lines",
                "Maintain an AABB rhyme scheme throughout (pairs of lines that rhyme)",
                "Keep line length consistent (approximately 8-10 syllables each)",
                "The poem should address a small moment of personal observation",
                "Avoid clichéd rhymes and forced phrasing"
            ]
        }
    ];
    
    /**
     * Load categories data from JSON
     */
async function loadCategories() {
    try {
        // Add base path for GitHub Pages
        const basePath = window.location.pathname.includes('/your-repo-name/') ? '/your-repo-name' : '';
        const response = await fetch(`${basePath}/data/categories.json`);
        
        if (!response.ok) {
            throw new Error('Failed to load categories');
        }
        
        data.categories = await response.json();
        return data.categories;
        
    } catch (error) {
        console.error('Error loading categories:', error);
        // Use default categories
        // ...rest of function
    }
}

async function loadExercises() {
    try {
        // Add base path for GitHub Pages
        const basePath = window.location.pathname.includes('/your-repo-name/') ? '/your-repo-name' : '';
        const response = await fetch(`${basePath}/data/all-exercises.json`);
        
        if (!response.ok) {
            throw new Error('Failed to load exercises');
        }
        
        // Rest of function
        // ...
    } catch (error) {
        // ...
    }
}
    
    /**
     * Index exercises for faster access
     */
    function indexExercises(exercises) {
        // Reset indexes
        data.exercisesByTopic = {};
        data.exercisesById = {};
        
        // Create indexes
        exercises.forEach(exercise => {
            // Index by ID
            data.exercisesById[exercise.id] = exercise;
            
            // Index by topics
            exercise.topics.forEach(topic => {
                if (!data.exercisesByTopic[topic]) {
                    data.exercisesByTopic[topic] = [];
                }
                data.exercisesByTopic[topic].push(exercise);
            });
        });
    }
    
    /**
     * Get all available exercises
     */
    function getAllExercises() {
        return data.exercises.length > 0 ? data.exercises : defaultExercises;
    }
    
    /**
     * Get all available categories
     */
    function getAllCategories() {
        return data.categories;
    }
    
    /**
     * Filter exercises by selected topics
     */
    function filterExercisesByTopics(selectedTopics) {
        if (!selectedTopics || selectedTopics.length === 0) {
            return getAllExercises();
        }
        
        // Find exercises that match any of the selected topics
        return data.exercises.filter(exercise => 
            selectedTopics.some(topic => exercise.topics.includes(topic))
        );
    }
    
    /**
     * Get exercises by specific topic
     */
    function getExercisesByTopic(topic) {
        return data.exercisesByTopic[topic] || [];
    }
    
    /**
     * Get an exercise by ID
     */
    function getExerciseById(id) {
        return data.exercisesById[id] || null;
    }
    
    /**
     * Get metadata about the exercise collection
     */
    function getMetadata() {
        return {
            version: data.version,
            lastUpdated: data.lastUpdated,
            totalExercises: data.exercises.length,
            topicCounts: Object.keys(data.exercisesByTopic).reduce((counts, topic) => {
                counts[topic] = data.exercisesByTopic[topic].length;
                return counts;
            }, {})
        };
    }
    
    // Public API
    return {
        loadCategories,
        loadExercises,
        getAllExercises,
        getAllCategories,
        filterExercisesByTopics,
        getExercisesByTopic,
        getExerciseById,
        getMetadata
    };
})();
