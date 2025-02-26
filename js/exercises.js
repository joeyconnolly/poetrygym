/**
 * Exercise management module for The Poetry Gym
 * Handles loading, filtering, and managing exercise data
 */
const ExerciseManager = (function() {
    'use strict';
    
    // Data storage
    const data = {
        exercises: [],
        categories: [],
        exercisesByTopic: {}
    };
    
    // Default exercises (for initial/fallback use)
    const defaultExercises = [
        {
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
            const response = await fetch('data/categories.json');
            
            if (!response.ok) {
                throw new Error('Failed to load categories');
            }
            
            data.categories = await response.json();
            return data.categories;
            
        } catch (error) {
            console.error('Error loading categories:', error);
            // Use default categories
            data.categories = [
                { id: 'rhyme', name: 'Rhyme' },
                { id: 'rhythm', name: 'Rhythm' },
                { id: 'prosody', name: 'Prosody' },
                { id: 'image-making', name: 'Image' },
                { id: 'metaphor', name: 'Metaphor' },
                { id: 'form', name: 'Form' },
                { id: 'line-breaks', name: 'Line Breaks' },
                { id: 'stanza', name: 'Stanza' },
                { id: 'sound', name: 'Sound' },
                { id: 'voice', name: 'Voice' },
                { id: 'alliteration', name: 'Alliteration' },
                { id: 'assonance', name: 'Assonance' },
                { id: 'repetition', name: 'Repetition' },
                { id: 'persona', name: 'Persona' }
            ];
            return data.categories;
        }
    }
    
    /**
     * Load exercise data from topic subdirectories
     * For large datasets, this can be optimized to load only a subset initially
     */
    async function loadExercises() {
        try {
            // For full implementation, you would fetch from the server
            // This is a placeholder for the actual fetch logic
            
            // In a real implementation, you would loop through topics
            // and fetch exercises from each topic directory
            
            // For now, we'll use the default exercises
            data.exercises = [...defaultExercises];
            
            // Organize exercises by topic for faster filtering
            data.exercises.forEach(exercise => {
                exercise.topics.forEach(topic => {
                    if (!data.exercisesByTopic[topic]) {
                        data.exercisesByTopic[topic] = [];
                    }
                    data.exercisesByTopic[topic].push(exercise);
                });
            });
            
            return data.exercises;
            
        } catch (error) {
            console.error('Error loading exercises:', error);
            // Use default exercises
            data.exercises = [...defaultExercises];
            return data.exercises;
        }
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
    
    // Public API
    return {
        loadCategories,
        loadExercises,
        getAllExercises,
        getAllCategories,
        filterExercisesByTopics,
        getExercisesByTopic
    };
})();
