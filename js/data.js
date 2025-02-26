// Replace your entire data.js file with this corrected version
const PoetryGymData = (function() {
    'use strict';
    
    // Categories data
    const categories = [
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
    
    // Exercises data (keeping just two for brevity, but include all of yours)
    const exercises = [
        {
            id: "image-chain-01",
            title: "Image Chain",
            topics: ["image-making"],
            level: "intermediate",
            context: "Image-making lies at the heart of poetry...",
            quote: "The dragonfly hovers like a blue thread...",
            attribution: "— Jane Hirshfield",
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
            context: "While contemporary poetry often uses slant rhymes...",
            quote: "Tell all the truth but tell it slant—...",
            attribution: "— Emily Dickinson",
            task: "Compose a short poem with a structured rhyme scheme.",
            instructions: [
                "Write a poem of exactly twelve lines",
                "Maintain an AABB rhyme scheme throughout (pairs of lines that rhyme)",
                "Keep line length consistent (approximately 8-10 syllables each)",
                "The poem should address a small moment of personal observation",
                "Avoid clichéd rhymes and forced phrasing"
            ]
        }
        // Add your other exercises here
    ];
    
    // Export public methods
    return {
        getCategories: function() {
            return [...categories];
        },
        
        getExercises: function() {
            return [...exercises];
        },
        
        getMetadata: function() {
            return {
                version: "1.0",
                lastUpdated: "2025-02-26",
                totalExercises: exercises.length
            };
        }
    };
})();
