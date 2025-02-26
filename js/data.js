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
        id: "fixed-meter-01",
        title: "The Iambic Pulse",
        context: "Iambic pentameter, the backbone of English verse, creates a natural yet elevated rhythm. Mastering it teaches control over pacing, breath, and emphasis while offering a structured constraint that fosters creativity.",
        quote: "Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate.",
        attribution: "— William Shakespeare, from 'Sonnet 18'",
        task: "Write a quatrain (four-line stanza) in iambic pentameter.",
        instructions: [
            "Write a single line in iambic pentameter (five feet of unstressed-stressed syllables).",
            "Compose a second line that follows the same meter and relates thematically.",
            "Expand to a four-line stanza with consistent iambic pentameter.",
            "Revise to ensure natural flow, avoiding forced word choices for the sake of meter."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["meter", "rhythm", "prosody"]
    },
    {
        id: "trochaic-experiment-01",
        title: "Falling into Trochee",
        context: "Trochaic meter (stressed-unstressed) creates an incantatory, driving rhythm. It appears in nursery rhymes and dark, spell-like verse. Practicing trochees sharpens awareness of stress patterns and tonal effects.",
        quote: "Tyger, Tyger, burning bright\nIn the forests of the night—",
        attribution: "— William Blake, from 'The Tyger'",
        task: "Compose a short stanza using trochaic meter.",
        instructions: [
            "Write a single trochaic line (e.g., 'Golden fire, crackling wide').",
            "Extend it to a couplet with the same meter.",
            "Add two more lines to form a quatrain, maintaining the rhythm.",
            "Experiment with variation—where does trochaic energy feel most natural or unnatural?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "10-15 minutes",
        tags: ["meter", "rhythm", "prosody"]
    },
    {
        id: "free-verse-flow-01",
        title: "The Speech of the Line",
        context: "Free verse follows the natural cadences of speech rather than a fixed metrical pattern. Mastering free verse means learning how to sculpt rhythm without predictable beats, using enjambment and pauses deliberately.",
        quote: "so much depends\nupon\na red wheel\nbarrow",
        attribution: "— William Carlos Williams, from 'The Red Wheelbarrow'",
        task: "Write a four-line poem where rhythm emerges from natural speech, not meter.",
        instructions: [
            "Choose a simple but evocative subject (e.g., an object, a moment of motion).",
            "Write a four-line poem that mimics the way you would say it aloud.",
            "Revise to break the lines where breath and emphasis feel most natural.",
            "Test different line breaks—how do changes affect rhythm and meaning?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 2,
        estimatedTime: "10-15 minutes",
        tags: ["free verse", "line breaks", "rhythm"]
    },
    {
        id: "sprung-rhythm-01",
        title: "Spring into Sprung Rhythm",
        context: "Gerard Manley Hopkins’s ‘sprung rhythm’ breaks traditional meter while maintaining strong beats, producing a dynamic, muscular sound. This exercise trains the ear for irregular stresses while keeping rhythmic intensity.",
        quote: "Glory be to God for dappled things—\nFor skies of couple-colour as a brinded cow;",
        attribution: "— Gerard Manley Hopkins, from 'Pied Beauty'",
        task: "Compose a short passage using Hopkins’s sprung rhythm technique.",
        instructions: [
            "Write a two-line phrase with heavy stresses, aiming for a rough but driving rhythm.",
            "Expand into a four-line stanza, letting stresses lead rather than syllable count.",
            "Use alliteration and internal rhyme to enhance the sonic effect.",
            "Read aloud—does it have the rolling, energetic feel of sprung rhythm?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 5,
        estimatedTime: "15-20 minutes",
        tags: ["sprung rhythm", "stress", "sound"]
    },
    {
        id: "rhythmic-variation-01",
        title: "The Shifting Pulse",
        context: "Poets often vary meter across stanzas to create contrast, tension, or musical shifts. This exercise builds flexibility in handling rhythm changes while maintaining coherence.",
        quote: "My candle burns at both ends;\nIt will not last the night;\nBut ah, my foes, and oh, my friends—\nIt gives a lovely light!",
        attribution: "— Edna St. Vincent Millay, from 'First Fig'",
        task: "Write a three-stanza poem where each stanza follows a different meter.",
        instructions: [
            "Write the first stanza in a fixed meter (e.g., iambic tetrameter).",
            "Shift to a looser or contrasting meter in the second stanza (e.g., trochaic trimeter).",
            "For the third stanza, return to the original meter or mix meters creatively.",
            "Read aloud—do the shifts create tension or emphasis? Adjust accordingly."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "20 minutes",
        tags: ["meter", "variation", "prosody"]
    },
    {
        id: "rhythmic-contrast-01",
        title: "Fast & Slow: The Rhythms of Motion",
        context: "Poetry’s rhythm can shape meaning—quick, clipped lines create urgency, while long, drawn-out phrases evoke a slow, meditative feel. This exercise sharpens the ability to control pacing through line structure and syllabic rhythm.",
        quote: "The apparition of these faces in the crowd;\nPetals on a wet, black bough.",
        attribution: "— Ezra Pound, from 'In a Station of the Metro'",
        task: "Write two short poems on the same subject—one with a fast rhythm, one with a slow rhythm.",
        instructions: [
            "Choose a subject that can evoke both rapid and slow sensations (e.g., rain, a heartbeat, footsteps).",
            "Write a four-line poem with short, punchy lines and quick rhythm (e.g., monosyllables, enjambment).",
            "Now write another four-line poem on the same subject with slow, elongated phrasing (e.g., longer words, commas, caesuras).",
            "Compare—how does the shift in rhythm alter the emotional tone?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "15-20 minutes",
        tags: ["rhythm", "contrast", "pacing"]
    },
    {
        id: "musicality-repetition-01",
        title: "Drumbeat of the Poem",
        context: "Repetition gives poetry a musical, hypnotic quality. Whether mimicking a heartbeat or a drum, repeating sounds and phrases can reinforce meaning, build momentum, and create a sense of inevitability.",
        quote: "Because I do not hope to turn again\nBecause I do not hope\nBecause I do not hope to turn",
        attribution: "— T.S. Eliot, from 'Ash Wednesday'",
        task: "Use repeated rhythmic phrases to simulate a heartbeat or a drumbeat.",
        instructions: [
            "Write a single line that has a strong rhythm, like a chant or heartbeat.",
            "Repeat the line exactly, then alter it slightly on the third repetition (e.g., change a word, shift stress).",
            "Build a four-line stanza that develops this pattern while maintaining the rhythm.",
            "Revise by experimenting with placement—where does repetition gain or lose power?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "10-15 minutes",
        tags: ["repetition", "rhythm", "musicality"]
    },
    {
        id: "metrical-subversion-01",
        title: "Breaking the Pattern",
        context: "Poets use metrical subversion to jolt the reader, adding drama or tension. Deliberate disruptions—whether a single unexpected stress or a sudden shift in meter—can create striking emotional effects.",
        quote: "This is the way the world ends\nNot with a bang but a whimper.",
        attribution: "— T.S. Eliot, from 'The Hollow Men'",
        task: "Write a poem in a recognizable meter that deliberately breaks its pattern at key moments.",
        instructions: [
            "Write a four-line stanza in a fixed meter (e.g., iambic tetrameter).",
            "In the second stanza, introduce a break—a sudden extra stress or missing beat.",
            "Continue this pattern, using subversion strategically for effect.",
            "Read aloud—do the disruptions add surprise, emphasis, or unease? Adjust as needed."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["meter", "subversion", "rhythm"]
    },
    {
        id: "sound-breath-01",
        title: "One Breath Per Line",
        context: "Poetry is an oral art—breath shapes how we read and experience rhythm. By writing lines that fit within a single breath, poets develop an intuitive feel for pacing and natural phrasing.",
        quote: "I saw the best minds of my generation destroyed by madness, starving hysterical naked,",
        attribution: "— Allen Ginsberg, from 'Howl'",
        task: "Write a poem where each line is composed to be read in one breath.",
        instructions: [
            "Write a four-line poem, making sure each line can be spoken in a single breath.",
            "Revise, shortening or lengthening lines where breath naturally falls.",
            "Experiment—what happens when you shift pauses or add punctuation?",
            "Read aloud again—where does rhythm feel most organic? Adjust accordingly."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 2,
        estimatedTime: "10-15 minutes",
        tags: ["breath", "sound", "rhythm"]
    },
    {
        id: "visual-meter-mapping-01",
        title: "Rhythm Mapping: Seeing the Beat",
        context: "Before writing, poets can visualize rhythm by mapping stressed and unstressed syllables. This pre-writing strategy helps uncover hidden patterns and sharpen metrical control.",
        quote: "Whose woods these are I think I know.\nHis house is in the village though;",
        attribution: "— Robert Frost, from 'Stopping by Woods on a Snowy Evening'",
        task: "Sketch a ‘rhythm chart’ for your poem before writing, mapping its metrical pattern.",
        instructions: [
            "Choose a subject and draft a single poetic line.",
            "Mark stressed (/) and unstressed (x) syllables above the words (e.g., ‘The SEA / was CALM / and BRIGHT’).",
            "Write three more lines, ensuring they follow a similar or deliberately varied pattern.",
            "Adjust the rhythm chart—what happens when you shift stress? Revise your lines accordingly."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["meter", "rhythm", "mapping"]
    },
    {
        id: "strict-rhyme-01",
        title: "Locked in Rhyme",
        context: "A strict rhyme scheme demands discipline and ingenuity. Fixed patterns like ABAB or AABB shape rhythm, create expectation, and drive momentum. Mastering these constraints strengthens poetic control.",
        quote: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all.",
        attribution: "— Emily Dickinson, from 'Hope is the Thing with Feathers'",
        task: "Write a poem with a consistent rhyme scheme.",
        instructions: [
            "Choose a rhyme scheme (e.g., ABAB, AABB, or another structured pattern).",
            "Write a quatrain (four-line stanza) adhering strictly to the chosen pattern.",
            "Expand to a second stanza, maintaining the rhyme scheme.",
            "Revise to ensure fluency—does any rhyme feel forced? Adjust as needed."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "15-20 minutes",
        tags: ["rhyme", "form", "prosody"]
    },
    {
        id: "slant-rhyme-01",
        title: "Almost Rhyme",
        context: "Slant rhyme softens sonic repetition while maintaining resonance. By using near-rhymes (e.g., ‘time’ and ‘tame’), poets add musicality without predictability, creating subtle echoes and tension.",
        quote: "I heard a Fly buzz—when I died—\nThe Stillness in the Room\nWas like the Stillness in the Air—\nBetween the Heaves of Storm—",
        attribution: "— Emily Dickinson, from 'I heard a Fly buzz—when I died—'",
        task: "Write a poem that employs only slant (near) rhymes.",
        instructions: [
            "List five pairs of slant rhymes (e.g., ‘gone / dawn’, ‘close / lose’).",
            "Write a quatrain where each end word follows a slant-rhyme pattern.",
            "Expand into a second stanza using a different set of slant rhymes.",
            "Read aloud—how do slant rhymes affect mood compared to perfect rhyme?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "15-20 minutes",
        tags: ["slant rhyme", "sound", "prosody"]
    },
    {
        id: "internal-rhymes-01",
        title: "Echoes Within",
        context: "Internal rhymes create unexpected sonic patterns within lines rather than at line ends. This technique enlivens rhythm and emphasizes certain words or images.",
        quote: "Once upon a midnight dreary, while I pondered, weak and weary,",
        attribution: "— Edgar Allan Poe, from 'The Raven'",
        task: "Compose a poem where rhymes occur within lines instead of solely at the line’s end.",
        instructions: [
            "Write a single line that contains an internal rhyme (e.g., ‘The silver river shivers bright’).",
            "Expand to a couplet, keeping internal rhymes consistent.",
            "Write a quatrain where each line features at least one internal rhyme.",
            "Revise for musicality—do the rhymes feel natural or overly forced?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["internal rhyme", "sound", "rhythm"]
    },
    {
        id: "contrast-rhymes-01",
        title: "Shifting Tones: Perfect vs. Near Rhyme",
        context: "Perfect rhymes create stability, while slant rhymes introduce ambiguity. Alternating between them sharpens awareness of how sound affects mood.",
        quote: "If they be two, they are two so\nAs stiff twin compasses are two;\nThy soul, the fixed foot, makes no show\nTo move, but doth, if th' other do.",
        attribution: "— John Donne, from 'A Valediction: Forbidding Mourning'",
        task: "Write one stanza with perfect rhymes and the next using near rhymes.",
        instructions: [
            "Write a four-line stanza using only perfect rhymes (e.g., ‘bright / night’).",
            "Follow with a four-line stanza using only slant rhymes (e.g., ‘bright / white’).",
            "Compare the two—does the near rhyme shift tone, texture, or expectation?",
            "Revise to exaggerate or smooth out contrasts as needed."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "15-20 minutes",
        tags: ["rhyme contrast", "prosody", "sound"]
    },
    {
        id: "masculine-feminine-01",
        title: "Hard & Soft Rhymes",
        context: "Masculine rhymes (one-syllable, stressed) feel strong and decisive. Feminine rhymes (two or more syllables, unstressed endings) create a softer, more flowing sound.",
        quote: "Tell all the truth but tell it slant—\nSuccess in Circuit lies,",
        attribution: "— Emily Dickinson, from 'Tell all the truth but tell it slant'",
        task: "Create a poem that deliberately juxtaposes masculine and feminine end-rhymes.",
        instructions: [
            "Write two rhyming couplets with masculine rhymes (e.g., ‘stand / hand’).",
            "Write two couplets with feminine rhymes (e.g., ‘given / driven’).",
            "Alternate these patterns in a full stanza—does the shift feel jarring or fluid?",
            "Revise for effect—does alternating rhyme types enhance musicality?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["rhyme", "sound", "prosody"]
    },
    {
        id: "invented-rhyme-01",
        title: "Making Words Sing",
        context: "Invented words can stretch poetic language, creating playful soundscapes and fresh sonic textures. From Lewis Carroll’s ‘Jabberwocky’ to Joyce’s portmanteaus, poets have long experimented with neologisms.",
        quote: "’Twas brillig, and the slithy toves\nDid gyre and gimble in the wabe;",
        attribution: "— Lewis Carroll, from 'Jabberwocky'",
        task: "Create playful, invented words that rhyme, then use them in a poem.",
        instructions: [
            "Invent three pairs of rhyming words (e.g., ‘blim / stim’, ‘gorfing / torfing’).",
            "Write a four-line stanza incorporating at least two of your invented rhymes.",
            "Expand the stanza, building a rhythmic pattern.",
            "Revise—do the sounds suggest certain images or emotions?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["sound play", "invented words", "rhyme"]
    },
    {
        id: "couplet-focus-01",
        title: "The Power of Two",
        context: "Couplets create a sense of closure and precision, whether playful or profound. Writing in couplets sharpens concision, forcing each rhyme pair to feel inevitable yet fresh.",
        quote: "True wit is nature to advantage dressed,\nWhat oft was thought, but ne’er so well expressed.",
        attribution: "— Alexander Pope, from 'An Essay on Criticism'",
        task: "Write a series of couplets where each pair of lines features a unique rhyme pair.",
        instructions: [
            "Write one rhymed couplet (two lines) with a strong, natural rhythm.",
            "Add another couplet with a different rhyme pair.",
            "Continue this process for at least six lines, ensuring each rhyme feels intentional.",
            "Read aloud—do the couplets build momentum or feel too rigid? Adjust as needed."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 2,
        estimatedTime: "10-15 minutes",
        tags: ["rhyme", "couplet", "form"]
    },
    {
        id: "rhyme-variation-01",
        title: "Shifting Schemes",
        context: "Changing rhyme schemes within a poem alters mood, energy, and expectation. This exercise develops flexibility, encouraging dynamic shifts in rhyme structure while maintaining coherence.",
        quote: "And so, all the night-tide, I lie down by the side\nOf my darling—my darling—my life and my bride",
        attribution: "— Edgar Allan Poe, from 'Annabel Lee'",
        task: "Compose a poem where the rhyme scheme changes stanza by stanza.",
        instructions: [
            "Write a four-line stanza with a simple rhyme scheme (e.g., ABAB).",
            "In the second stanza, shift to a different scheme (e.g., AABB or ABCB).",
            "Write a third stanza that either continues the change or returns to the first pattern.",
            "Read aloud—does the variation create contrast or dissonance? Adjust accordingly."
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "15-20 minutes",
        tags: ["rhyme variation", "structure", "form"]
    },
    {
        id: "experimental-rhyming-01",
        title: "Layering Sound",
        context: "Combining internal and end-line rhymes adds complexity and richness to a poem’s soundscape. This technique increases rhythmic density and encourages multi-layered wordplay.",
        quote: "Once I am sure there's nothing going on\nI step inside, letting the door thud shut.",
        attribution: "— Philip Larkin, from 'Church Going'",
        task: "Write a poem that uses internal as well as end-line rhymes for layered sound.",
        instructions: [
            "Write a single line that contains both an internal rhyme and an end-line rhyme.",
            "Expand to a couplet, keeping this dual-rhyme structure intact.",
            "Write a four-line stanza where internal rhymes support the external ones.",
            "Revise to ensure fluidity—does the layering of sound feel natural or overdone?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 4,
        estimatedTime: "15-20 minutes",
        tags: ["internal rhyme", "end rhyme", "layered sound"]
    },
    {
        id: "no-rhyme-but-rhythm-01",
        title: "Finding Music Without Rhyme",
        context: "Poetry does not need rhyme to feel musical. This exercise encourages focus on rhythm, then explores how slant rhymes can subtly enhance sound without overt patterning.",
        quote: "The art of losing isn’t hard to master;\nSo many things seem filled with the intent\nTo be lost that their loss is no disaster.",
        attribution: "— Elizabeth Bishop, from 'One Art'",
        task: "Write a poem that intentionally avoids rhyme, then revise it by adding subtle slant rhymes.",
        instructions: [
            "Write a four-line stanza focusing only on rhythm and flow, avoiding rhyme.",
            "Read it aloud—does it feel musical despite the lack of rhyme?",
            "Revise by adding a few slant rhymes without making them dominant.",
            "Compare the versions—does the addition of near-rhyme subtly enhance the sound?"
        ],
        created: "2024-02-26",
        lastModified: "2024-02-26",
        author: "Poetry Gym Team",
        difficulty: 3,
        estimatedTime: "15-20 minutes",
        tags: ["no rhyme", "slant rhyme", "rhythm"]
    }
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
