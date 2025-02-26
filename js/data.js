/**
 * Poetry Gym Data
 * Contains all exercise data and categories
 */
const PoetryGymData = (function() {
    'use strict';
    
    // Categories data
    const categories = [
        { id: 'rhyme', name: 'Rhyme', description: 'Exercises focusing on different rhyme schemes and techniques' },
        { id: 'rhythm', name: 'Rhythm', description: 'Explore poetic rhythm and meter' },
        { id: 'prosody', name: 'Prosody', description: 'Study of sound and rhythm in poetry' },
        { id: 'image-making', name: 'Image', description: 'Create vivid and compelling poetic images' },
        { id: 'metaphor', name: 'Metaphor', description: 'Develop metaphorical language and comparisons' },
        { id: 'form', name: 'Form', description: 'Work with traditional and contemporary poetic forms' },
        { id: 'line-breaks', name: 'Line Breaks', description: 'Practice the art of line breaks and enjambment' },
        { id: 'stanza', name: 'Stanza', description: 'Explore stanza forms and structures' },
        { id: 'sound', name: 'Sound', description: 'Focus on the sound qualities in poetry' },
        { id: 'voice', name: 'Voice', description: 'Develop a distinctive poetic voice' },
        { id: 'alliteration', name: 'Alliteration', description: 'Use repeated consonant sounds for effect' },
        { id: 'assonance', name: 'Assonance', description: 'Work with repeated vowel sounds' },
        { id: 'repetition', name: 'Repetition', description: 'Employ repetition as a poetic device' },
        { id: 'persona', name: 'Persona', description: 'Write from different perspectives and voices' }
    ];
    
    // Exercises data
    const exercises = [
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
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "20-30 minutes",
            tags: ["imagery", "transitions", "stanza", "nature", "observation"]
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
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 2,
            estimatedTime: "15-20 minutes",
            tags: ["rhyme", "structure", "observation", "tradition"]
        }
        // Add other exercises as needed...
    ];

    return {
        categories,
        exercises
    };
})();
