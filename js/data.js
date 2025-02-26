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
        },
        {
            id: "metrical-substitution-01",
            title: "Metrical Substitution",
            topics: ["rhythm", "prosody"],
            level: "advanced",
            context: "The strategic disruption of established meter can create emphasis, tension, and emotional resonance in formal poetry.",
            quote: "Some say the world will end in fire,\nSome say in ice.\nFrom what I've tasted of desire\nI hold with those who favor fire.",
            attribution: "— Robert Frost, from \"Fire and Ice\"",
            task: "Create a poem that uses metrical variation for effect.",
            instructions: [
                "Write 14 lines in iambic pentameter (five pairs of unstressed/stressed syllables)",
                "Deliberately substitute one iambic foot in each line with a different metrical foot (trochee, spondee, etc.)",
                "Ensure each substitution serves the meaning of the line",
                "The poem should address a difficult choice or contradiction",
                "Include a volta (turn in thought) around line 9"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 4,
            estimatedTime: "30-45 minutes",
            tags: ["meter", "formal", "prosody", "substitution", "iambic"]
        },
        {
            id: "extended-metaphor-01",
            title: "Extended Metaphor Workshop",
            topics: ["metaphor"],
            level: "intermediate",
            context: "Extended metaphors allow poets to explore complex ideas through sustained comparison, revealing new dimensions of both subjects.",
            quote: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all",
            attribution: "— Emily Dickinson, from \"Hope is the thing with feathers\"",
            task: "Develop a poem built around a sustained metaphorical comparison.",
            instructions: [
                "Choose an abstract concept and compare it to something concrete and unexpected",
                "Develop this comparison across at least 16 lines",
                "Explore at least four different aspects of your metaphor",
                "Avoid directly stating the comparison (\"X is like Y\") more than once",
                "End with a surprising twist or deepening of the metaphor"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "25-35 minutes",
            tags: ["metaphor", "comparison", "abstraction", "depth", "exploration"]
        },
        {
            id: "line-break-explorations-01",
            title: "Line Break Explorations",
            topics: ["line-breaks"],
            level: "intermediate",
            context: "Line breaks are one of the poet's most powerful tools, controlling pacing, emphasis, and the visual experience of a poem.",
            quote: "the cicadas came\nin the heat of August with\ntheir raspy voices\n\nI tried to hear what\nthey were desperate to say",
            attribution: "— Ada Limón, from \"The Conditional\"",
            task: "Experiment with the power of line breaks to create different effects.",
            instructions: [
                "Write a poem of 15-20 lines about a momentary observation",
                "Deliberately break your lines in unexpected places",
                "Break at least three lines in the middle of grammatical units",
                "Create at least one enjambment that causes a surprising meaning shift",
                "Experiment with varying line lengths for rhythmic effect"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "20-30 minutes",
            tags: ["lineation", "enjambment", "white space", "pacing", "rhythm"]
        },
        {
            id: "sound-orchestration-01",
            title: "Sound Orchestration",
            topics: ["sound", "alliteration", "assonance"],
            level: "intermediate",
            context: "The orchestration of sounds in poetry creates musicality, mood, and reinforces meaning in powerful ways.",
            quote: "Sudden in a shaft of sunlight\nEven while the dust moves\nThere rises the hidden laughter\nOf children in the foliage",
            attribution: "— T.S. Eliot, from \"Burnt Norton\"",
            task: "Create a poem that deliberately uses sound patterns to enhance its effect.",
            instructions: [
                "Write a poem of 12-16 lines about an emotional state",
                "Include at least three instances of alliteration",
                "Include at least three instances of assonance",
                "Use consonance to create texture in at least two lines",
                "Experiment with how the sounds reinforce the emotional content"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "20-30 minutes",
            tags: ["sound", "musicality", "alliteration", "assonance", "consonance"]
        },
        {
            id: "voice-development-01",
            title: "Voice Development",
            topics: ["voice", "persona"],
            level: "intermediate",
            context: "Finding a distinct poetic voice is crucial to developing as a poet, whether speaking as yourself or through a persona.",
            quote: "I have gone out, a possessed witch,\nhaunting the black air, braver at night;\ndreaming evil, I have done my hitch\nover the plain houses, light by light:",
            attribution: "— Anne Sexton, from \"Her Kind\"",
            task: "Develop a poem with a strong, distinctive voice.",
            instructions: [
                "Write a poem of 16-20 lines in first person",
                "Create a consistent and distinctive speaking voice",
                "Include at least three phrases or expressions unique to this voice",
                "Use diction and syntax that reveal something about the speaker",
                "Consider how the lineation and rhythm support the voice"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "25-35 minutes",
            tags: ["voice", "persona", "character", "diction", "perspective"]
        },
        {
            id: "stanza-architecture-01",
            title: "Stanza Architecture",
            topics: ["stanza", "form"],
            level: "intermediate",
            context: "The structure of stanzas shapes how readers experience a poem, controlling pacing and creating visual patterns on the page.",
            quote: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all;\n\nAnd sweetest in the gale is heard;",
            attribution: "— Emily Dickinson",
            task: "Create a poem with deliberate stanza structure.",
            instructions: [
                "Write a poem with exactly five stanzas",
                "Use a consistent stanza length (tercets, quatrains, etc.)",
                "Create a visual pattern on the page through consistent indentation",
                "Consider how the stanza breaks affect the pacing of the poem",
                "Use the final stanza to create resolution or revelation"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "20-30 minutes",
            tags: ["stanza", "form", "white space", "visual", "structure"]
        },
        {
            id: "patterns-of-repetition-01",
            title: "Patterns of Repetition",
            topics: ["repetition", "form"],
            level: "intermediate",
            context: "Repetition is a powerful poetic device, creating emphasis, musicality, and emotional impact through echoing elements.",
            quote: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.",
            attribution: "— Dylan Thomas",
            task: "Create a poem using deliberate patterns of repetition.",
            instructions: [
                "Write a poem of 16-20 lines",
                "Include a repeated phrase that appears at least three times",
                "Vary the repeated element slightly with each appearance",
                "Consider how the repetition builds meaning or emotional intensity",
                "End the poem with either the repeated phrase or a significant variation of it"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 3,
            estimatedTime: "20-30 minutes",
            tags: ["repetition", "refrain", "rhythm", "emphasis", "structure"]
        },
        {
            id: "blank-verse-narrative-01",
            title: "Blank Verse Narrative",
            topics: ["form", "rhythm"],
            level: "advanced",
            context: "Blank verse (unrhymed iambic pentameter) has been used for centuries to tell stories with a balance of natural speech and formal structure.",
            quote: "The apparition of these faces in the crowd;\nPetals on a wet, black bough.",
            attribution: "— Ezra Pound, from \"In a Station of the Metro\"",
            task: "Craft a narrative poem in blank verse.",
            instructions: [
                "Write 20-30 lines in unrhymed iambic pentameter",
                "Tell a story with a clear beginning, middle, and end",
                "Include at least one character facing a moment of decision",
                "Use at most three instances of enjambment (lines running over)",
                "Include at least one simile and one metaphor"
            ],
            created: "2024-02-26",
            lastModified: "2024-02-26",
            author: "Poetry Gym Team",
            difficulty: 4,
            estimatedTime: "30-45 minutes",
            tags: ["blank verse", "narrative", "iambic pentameter", "storytelling", "formal"]
        }
    };
})();
