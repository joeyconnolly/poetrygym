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
    },
  {
    id: "rhyme-01",
    title: "Couplet Focus",
    context: "Rhyming couplets create a tight, closed form, often used to provide neat closure or a punchy effect. This exercise helps you practice perfect rhymes and the finality they can bring.",
    quote: "True wit is Nature to advantage dress'd,\nWhat oft was thought, but ne'er so well express'd.",
    attribution: "— Alexander Pope (from 'Essay on Criticism')",
    task: "Compose short poems in neat, end-rhyming couplets to train your ear for perfect rhymes.",
    instructions: [
      "Step 1: Write two lines (one couplet) that end in perfect rhymes (e.g., day/play). Keep the lines relatively short (6–8 syllables) so the rhyme stands out.",
      "Step 2: Write another couplet on a different topic, again ensuring you have a perfect rhyme at each line-end.",
      "Step 3: Combine both couplets into a four-line poem. Read aloud—does the rhyme feel forced or smooth?",
      "Step 4: Revise any awkward phrases, focusing on the naturalness of your diction while maintaining rhyme."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 2,
    estimatedTime: "10-15 minutes",
    tags: ["rhyme", "repetition", "sound"]
  },
  {
    id: "rhyme-02",
    title: "Hidden Internal Rhymes",
    context: "Internal rhymes can unify lines without the sing-song effect of end-rhyme. They reward close reading and can add subtle sonic cohesion.",
    quote: "The whiskey on your breath\nCould make a small boy dizzy;",
    attribution: "— Theodore Roethke (from 'My Papa's Waltz')",
    task: "Place internal rhymes at least once in each line to create an echo effect.",
    instructions: [
      "Step 1: Write a four-line poem about any memory, ensuring each line hides a rhyme in the middle with the end word (e.g., 'ding' in the middle and 'ring' at the end).",
      "Step 2: Read it aloud—can you catch the 'hidden' rhyme? If not, adjust word choices to highlight it more strongly.",
      "Step 3: Write a second four-line poem where you embed two internal rhymes in each line for an even richer effect.",
      "Step 4: Compare the two poems. Which style of internal rhyming feels more natural to you?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "sound", "repetition"]
  },
  {
    id: "rhyme-03",
    title: "Slant Rhyme Explorations",
    context: "Slant (or near) rhymes offer subtle musicality. Contemporary poets often prefer them for their richness and unpredictability.",
    quote: "\"Tell all the Truth but tell it slant—\",\nSuccess in Circuit lies",
    attribution: "— Emily Dickinson",
    task: "Experiment with slant rhymes to create nuanced echoes rather than perfect matches.",
    instructions: [
      "Step 1: Write four lines where the end words almost rhyme (e.g., stone/swan, room/storm). Focus on consistent vowel sounds but differing consonants.",
      "Step 2: In a second stanza, deliberately push the slant even further—pick words that share only partial similarity (time/shine).",
      "Step 3: Compare these stanzas. Notice how each near rhyme changes the poem’s musicality versus perfect rhyme.",
      "Step 4: Revise for clarity. Keep the slant rhymes crisp so they’re noticeable but not jarring."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "sound", "assonance"]
  },
  {
    id: "rhyme-04",
    title: "Eye Rhymes vs. Ear Rhymes",
    context: "Eye rhymes (like 'love' and 'move') look like they should rhyme on the page but differ in sound. This contrast foregrounds the tension between sight and sound in poetry.",
    quote: "When the spade sinks into gravelly ground:\nMy father, digging.",
    attribution: "— Seamus Heaney (from 'Digging')",
    task: "Use at least two eye rhymes in a short poem, contrasting them with genuine (ear) rhymes.",
    instructions: [
      "Step 1: Brainstorm a list of words that visually suggest rhyme but diverge in pronunciation (e.g., 'bough'/'rough', 'laughter'/'slaughter').",
      "Step 2: Write a 6-line poem that uses two pairs of eye-rhyming words at line ends.",
      "Step 3: Also include one pair of perfect rhymes. Observe the shift in effect when the rhyme sounds real vs. just looks real.",
      "Step 4: Read aloud—do you notice how the eye rhyme 'breaks' the expectation? Reflect on how this can be used to surprise the reader."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "sound"]
  },
  {
    id: "rhyme-05",
    title: "Enclosed Rhyme (ABBA)",
    context: "Envelope rhyme (ABBA) frames lines within a 'rhyme circle.' This can create a sense of containment or reflection.",
    quote: "Breaking through the moonlit waves,\nThose illusions we once believed;\nYet quietly, the heart still craves,\nFor wonders never truly perceived.",
    attribution: "— Anonymous",
    task: "Write a quatrain using an ABBA scheme, noticing how the enclosed lines (B B) are nested within the outer lines (A A).",
    instructions: [
      "Step 1: Draft four lines that revolve around a single topic or image. Label each line-end with a letter (A or B) to guide the rhyme.",
      "Step 2: Make lines 1 and 4 rhyme (A . . A), and lines 2 and 3 rhyme (B B).",
      "Step 3: Write a second quatrain continuing the same ABBA scheme but shifting the theme or perspective slightly.",
      "Step 4: See if the enclosure of ABBA helps unify or circle back to the initial idea."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "10-15 minutes",
    tags: ["rhyme", "stanza", "form"]
  },
  {
    id: "rhyme-06",
    title: "Surprise Last Couplet",
    context: "A poem that doesn't rhyme until the final two lines creates a sudden sense of closure or emphasis, used effectively by many modern poets.",
    quote: "Then all collapsed, and the great shroud of the sea rolled on as it rolled five thousand years ago.",
    attribution: "— Herman Melville (from 'Moby-Dick')",
    task: "Craft a poem that is unrhymed except for a final rhyming couplet.",
    instructions: [
      "Step 1: Write 6–8 lines of free verse about a topic that builds tension or anticipation.",
      "Step 2: End the poem with two lines that rhyme perfectly, giving the sense of final punctuation.",
      "Step 3: Evaluate how that sudden rhyme shift feels. Does it offer closure or highlight a concluding point?",
      "Step 4: Optional: Try rewriting the final couplet with a slant rhyme for a subtler effect. Which version is more impactful?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "form", "line-breaks"]
  },
  {
    id: "rhyme-07",
    title: "Rhyming Disparate Concepts",
    context: "Unexpected rhymes across distinct semantic fields can spark creative leaps and humor. Linking two unrelated topics with rhyme forces fresh associations.",
    quote: "I rhyme / To see myself, to set the darkness echoing.",
    attribution: "— Seamus Heaney (slightly adapted from 'Personal Helicon')",
    task: "Rhythmically fuse two different ideas using a rhyming pair drawn from each domain.",
    instructions: [
      "Step 1: Pick two contrasting fields (e.g., astronomy and cuisine). Find or invent a rhyming pair (like 'nebula'/'arugula' if you can stretch a near rhyme).",
      "Step 2: Write at least 6 lines that weave these two words into a single poem, each concept hinting at the other.",
      "Step 3: Include one more set of rhymes that similarly bridges unexpected worlds. Maybe 'quantum'/'blossom' (slant rhyme).",
      "Step 4: Reflect on the comedic or enlightening effect of forcing these disparate ideas to coexist in rhyme."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20 minutes",
    tags: ["rhyme", "metaphor", "image-making"]
  },
  {
    id: "rhyme-08",
    title: "Monorhyme Experiment",
    context: "A stanza (or entire poem) where every line rhymes with the same sound (monorhyme) can feel incantatory, obsessive, or even comedic.",
    quote: "Unwearied still, lover by lover,\nThey paddle in the cold,\nCompanionable as the one repeated rhyme.",
    attribution: "— Adapted from W.B. Yeats, 'The Wild Swans at Coole'",
    task: "Write 4–6 lines that all end with the same rhyme, examining the hypnotic effect of monorhyme.",
    instructions: [
      "Step 1: Select a strong, versatile rhyme ending (e.g., -ight).",
      "Step 2: Draft 4–6 lines, each concluding with a word that features that ending (light, fight, night, sight, might, etc.).",
      "Step 3: Read the stanza aloud—notice the chant-like repetition. Revise if needed to avoid forced language.",
      "Step 4: If you wish, try a second stanza that uses a new monorhyme or breaks the pattern entirely for contrast."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 2,
    estimatedTime: "10 minutes",
    tags: ["rhyme", "repetition", "sound"]
  },
  {
    id: "rhyme-09",
    title: "Multi-Syllabic Rhyme Challenge",
    context: "Complex rhymes spanning multiple syllables appear frequently in rap and hip-hop, showcasing intricate sonic textures beyond simple single-syllable end rhymes.",
    quote: "\"It's poetry in motion, but devotion isn't portioned,\nI'm contorting my distortions, exploring these oceans.\"",
    attribution: "— Imagined lines, hip-hop-inspired style",
    task: "Write a poem that features at least one multi-syllabic rhyme pair, highlighting the rhythmic flair this can add.",
    instructions: [
      "Step 1: Brainstorm pairs of phrases that share 2–3 syllables at the end (e.g., 'elevated story' / 'celebrated glory').",
      "Step 2: Incorporate at least one multi-syllabic rhyme pair into a short, 4-line stanza, ensuring the entire phrase rhymes.",
      "Step 3: Write a second stanza that uses a different multi-syllabic pair.",
      "Step 4: Read everything aloud. How does the extended rhyme compare to single-syllable rhymes in terms of musicality?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20 minutes",
    tags: ["rhyme", "sound", "rhythm"]
  },
  {
    id: "rhyme-10",
    title: "Chain Rhyme Links",
    context: "Chain rhymes connect lines by rhyming a word from one line with a mid-line word in the next, creating a woven effect that pulls the reader forward.",
    quote: "And miles to go before I sleep,\nWeep for the watchers in the gloom.",
    attribution: "— Inspired by Robert Frost, creatively adapted",
    task: "Construct a poem where the last word of one line rhymes with a word placed in the middle of the next line.",
    instructions: [
      "Step 1: Start with a line ending on a strong word (e.g., 'rain').",
      "Step 2: In the next line, place a rhyming word ('brain') mid-line, then end that line with a new word (e.g., 'glow').",
      "Step 3: For line 3, embed 'glow' in the middle, end with another new word (maybe 'flight'), and continue the pattern for at least 6 lines.",
      "Step 4: Reflect on how this chain shapes continuity and momentum. Does it unify the poem’s progression?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "line-breaks", "sound"]
  },
  {
    id: "rhyme-11",
    title: "Odd Rhyme Discovery",
    context: "Using a rhyming dictionary or website can lead you to unexpected rhymes, pushing you beyond familiar word choices. This fosters creativity in content as well as sound.",
    quote: "No surprise in the writer, no surprise in the reader.",
    attribution: "— Robert Frost",
    task: "Find an unusual rhyme for a tricky word and build a playful poem around it.",
    instructions: [
      "Step 1: Pick a word that’s traditionally 'hard to rhyme' (e.g., 'orange' or 'silver').",
      "Step 2: Use a rhyming dictionary/online resource to find an exact or near rhyme (e.g., 'door-hinge' for 'orange').",
      "Step 3: Write a short, humorous poem that ends each line with variations of that rhyme. Enjoy the novelty!",
      "Step 4: Challenge yourself to maintain coherence in the poem while using these odd rhymes."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15 minutes",
    tags: ["rhyme", "sound"]
  },
  {
    id: "rhyme-12",
    title: "Mid-Line Rhyme Pop",
    context: "Rhymes aren’t restricted to line ends: two consecutive words in the middle of a line can create a sudden, attention-grabbing sound effect.",
    quote: "In the room the women come and go\nTalking of Michelangelo.",
    attribution: "— T.S. Eliot (from 'The Love Song of J. Alfred Prufrock')",
    task: "Place at least two consecutive words that rhyme within a single line, testing how in-line rhyme alters sonic emphasis.",
    instructions: [
      "Step 1: Draft a 4-line stanza on any topic. Identify one line to contain a pair of back-to-back rhyming words (e.g., 'quiet riot').",
      "Step 2: Add a second mid-line rhyme pair in another line for consistency.",
      "Step 3: Read your stanza out loud. Does the internal rhyme leap out, or does it flow naturally?",
      "Step 4: Adjust spacing or punctuation to highlight the rhyming pair if needed. Keep the rest of the poem free from end rhymes for contrast."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 2,
    estimatedTime: "10-15 minutes",
    tags: ["rhyme", "sound", "line-breaks"]
  },
  {
    id: "rhyme-13",
    title: "Heroic Couplets in Iambic Pentameter",
    context: "Heroic couplets combine strict meter (iambic pentameter) with end-rhymes. They were beloved by Alexander Pope for satirical and philosophical verse.",
    quote: "A little learning is a dangerous thing;\nDrink deep, or taste not the Pierian spring.",
    attribution: "— Alexander Pope, 'Essay on Criticism'",
    task: "Write a short passage in heroic couplets, paying attention to both meter and rhyme.",
    instructions: [
      "Step 1: Draft 4 lines in iambic pentameter (da-DUM da-DUM da-DUM da-DUM da-DUM), ensuring lines 1 & 2 rhyme, and lines 3 & 4 rhyme.",
      "Step 2: Read it aloud while tapping your foot to maintain the iambic beat. Adjust words if a stress pattern feels off.",
      "Step 3: Add two more lines, continuing the couplet pattern. Now you have 6 lines total.",
      "Step 4: Reflect on how imposing meter + rhyme shapes your word choice and tone."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20 minutes",
    tags: ["rhyme", "form", "rhythm", "prosody"]
  },
  {
    id: "rhyme-14",
    title: "Dialogue-Only Rhyme",
    context: "Allowing only the speaker’s dialogue to rhyme while the rest of the poem remains free can highlight those spoken lines as special or lyrical.",
    quote: "If you can dream—and not make dreams your master;",
    attribution: "— Rudyard Kipling (from 'If—')",
    task: "Write a poem in which the speaker’s quotes are the only rhyming portion.",
    instructions: [
      "Step 1: Draft a short scene or narrative. Use 6–8 lines of free verse to set the context.",
      "Step 2: Insert dialogue in at least two places. Those lines of dialogue should rhyme (end rhyme or slant rhyme).",
      "Step 3: The rest of the text remains unrhymed. Observe how the dialogue stands out.",
      "Step 4: Revise if needed to ensure the rhymes in dialogue sound natural for the speaker’s voice."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "voice"]
  },
  {
    id: "rhyme-15",
    title: "Consistent Slant Rhyme Pattern",
    context: "Committing to the same slant rhyme for every line-end fosters subtle unity. Contemporary poets often prefer the gentle echo of consistent vowel or consonant patterns.",
    quote: "Not quite out of tune,\nBut near enough to ring the mind anew.",
    attribution: "— Imagined snippet",
    task: "End each line in your poem with words that share the same vowel sound but differ by consonants.",
    instructions: [
      "Step 1: Choose a base vowel (e.g., a long 'i' sound: time, mind, side, kind).",
      "Step 2: Write a 6-line poem, ensuring each end-word contains that sound (they can be slant: 'knife' might also fit if you stretch it).",
      "Step 3: Read it aloud to confirm the subtle echo. Does it unify the stanza?",
      "Step 4: Optionally, break the pattern on the final line for dramatic effect—and see how that stands out."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15 minutes",
    tags: ["rhyme", "sound", "assonance"]
  },
  {
    id: "rhyme-16",
    title: "Identical Rhyme Once",
    context: "Rhyming a word with itself is typically avoided, but doing it strategically can draw intense focus to that repeated word.",
    quote: "The woods are lovely, dark and deep,\nBut I have promises to keep,",
    attribution: "— Robert Frost (from 'Stopping by Woods on a Snowy Evening')",
    task: "Use one instance of identical rhyme (the same word at line ends) in an otherwise normal rhyming poem.",
    instructions: [
      "Step 1: Write an 8-line poem with a simple ABAB CDCD rhyme scheme, ensuring variety in your end-words.",
      "Step 2: In one pair, use the exact same word for both lines (identical rhyme). E.g., 'light' / 'light.'",
      "Step 3: Reflect on that moment—does it underscore an idea, or feel repetitive? Tweak the line to maximize impact.",
      "Step 4: Decide if you want to keep it identical or shift it to a near-duplicate (e.g., 'lights') for a subtler effect."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15 minutes",
    tags: ["rhyme", "repetition"]
  },
  {
    id: "rhyme-17",
    title: "Front-Rhyme Lines",
    context: "Also called 'head rhyme,' front-rhyme places matching sounds at line beginnings, akin to strong alliteration across lines.",
    quote: "With swift, slow; sweet, sour; adazzle, dim...",
    attribution: "— Gerard Manley Hopkins (from 'Pied Beauty')",
    task: "Start several lines with words that rhyme, reversing the usual end-rhyme pattern.",
    instructions: [
      "Step 1: Pick a set of words that rhyme or nearly rhyme (e.g., 'hear,' 'near,' 'fear').",
      "Step 2: Write a 4–5 line poem, beginning each line with one of these words. Keep the rest of the line free from rhyme constraints.",
      "Step 3: Read aloud to sense how the repeated opening sound shapes the poem’s cadence.",
      "Step 4: Vary word order or add punctuation if you want to emphasize or mask the front-rhyme effect."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "15-20 minutes",
    tags: ["rhyme", "alliteration", "sound"]
  },
  {
    id: "rhyme-18",
    title: "Foreign Flavor Rhyme",
    context: "Blending languages can yield innovative rhyme pairs and broaden your ear for phonetic possibilities. It also invites cross-cultural wordplay.",
    quote: "Hay que inventar un lenguaje que todos comprendan,\nUn verso que salte las fronteras.",
    attribution: "— Inspired by Pablo Neruda (paraphrased)",
    task: "Incorporate a second language (or borrowed words) to form an unusual rhyme pair with English (or your main language).",
    instructions: [
      "Step 1: Select a second language you know (or pick a few foreign words). Find an English word that rhymes or nearly rhymes with it.",
      "Step 2: Write a short poem (6–8 lines) weaving those bilingual rhymes at line ends or mid-lines.",
      "Step 3: Notice how the foreign words might bring new connotations and sonic textures.",
      "Step 4: If you’re comfortable, expand to a second stanza mixing more borrowed words. Keep the poem coherent for readers."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 5,
    estimatedTime: "20-30 minutes",
    tags: ["rhyme", "sound", "global", "voice"]
  },
  {
    id: "rhyme-19",
    title: "Two-Take Couplet",
    context: "Predictable rhymes can sometimes feel dull. Swapping out one line’s end-word for something unexpected can inject fresh energy.",
    quote: "At dawn the crow calls,\nIt startles even the silent walls.",
    attribution: "— Anonymous",
    task: "Write two versions of the same two-line couplet: the first with an obvious rhyme, the second with a surprising or off-kilter rhyme.",
    instructions: [
      "Step 1: Draft a quick couplet with an easy, expected rhyme (moon/spoon, night/light).",
      "Step 2: Rewrite the second line, replacing the rhyme with a more unusual one (night/kite or something slightly off).",
      "Step 3: Compare how each version changes the tone or surprise factor.",
      "Step 4: (Optional) Expand to four lines (two couplets) using the same approach—first couplet safe, second couplet subverted."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 2,
    estimatedTime: "10 minutes",
    tags: ["rhyme", "revision", "sound"]
  },
  {
    id: "rhyme-20",
    title: "Cross-Stanza Rhyme",
    context: "Rhyming across stanzas can unify separated sections, drawing subtle connections between ideas in each stanza.",
    quote: "Some truths are too deep for shallow rhymes,\nThey echo beyond the lines that bind them.",
    attribution: "— Imagined snippet",
    task: "Link stanzas by carrying a rhyme from the final line of one stanza to the first line of the next.",
    instructions: [
      "Step 1: Write two separate stanzas, each 3–4 lines, on loosely related images or moments.",
      "Step 2: End stanza 1 on a word (e.g., 'door'). Begin stanza 2 with a line-end that rhymes ('floor').",
      "Step 3: If you add a third stanza, repeat the technique: end stanza 2 with a new rhyme anchor for stanza 3.",
      "Step 4: Read all stanzas aloud. Does the cross-stanza rhyme help them feel more cohesive?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "15 minutes",
    tags: ["rhyme", "stanza", "structure"]
  },
  {
    id: "linebreaks-01",
    title: "End-Stopped vs. Enjambed",
    context: "Line breaks influence pacing and meaning. End-stopped lines feel contained and final, while enjambment propels the reader forward.",
    quote: "The world is charged with the grandeur of God.\nIt will flame out, like shining from shook foil;",
    attribution: "— Gerard Manley Hopkins (from 'God’s Grandeur')",
    task: "Write two versions of the same poem—one with all end-stopped lines, the other heavily enjambed.",
    instructions: [
      "Step 1: Write a short, 6–8 line poem. Keep each line end-stopped (sentences finish neatly at each line break).",
      "Step 2: Rewrite the same poem, this time extending phrases across multiple lines using enjambment.",
      "Step 3: Compare the two versions. How does the rhythm change? Does enjambment alter the meaning?",
      "Step 4: Revise the second version to maximize tension and flow."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "20 minutes",
    tags: ["line-breaks", "enjambment", "structure"]
  },
  {
    id: "linebreaks-02",
    title: "Purposeful Enjambment",
    context: "Strategic enjambment can shift meaning mid-line, delaying clarity or forcing reinterpretation.",
    quote: "I first surmised the Horses' Heads\nWere toward Eternity—",
    attribution: "— Emily Dickinson (from 'Because I could not stop for Death')",
    task: "Compose a poem that uses enjambment to create double meanings.",
    instructions: [
      "Step 1: Write a short poem where at least three lines end on a word that suggests one meaning, only to shift upon reading the next line.",
      "Step 2: Ensure the break delays full understanding, creating surprise or ambiguity.",
      "Step 3: Read aloud and note where the tension builds. Adjust line breaks for maximum effect.",
      "Step 4: Optional: Rewrite one stanza with different enjambments to see how meaning changes."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20-25 minutes",
    tags: ["line-breaks", "enjambment", "meaning"]
  },
  {
    id: "linebreaks-03",
    title: "Caesura Placement",
    context: "A caesura is a strong mid-line pause, often marked by punctuation, that controls pacing and emphasis.",
    quote: "To be, or not to be, — that is the question:",
    attribution: "— William Shakespeare (from 'Hamlet')",
    task: "Write a poem with strong mid-line pauses to control rhythm and emphasis.",
    instructions: [
      "Step 1: Draft a 6–10 line poem, inserting at least one caesura (mid-line pause) per line.",
      "Step 2: Use punctuation (commas, dashes, semicolons) to create these pauses.",
      "Step 3: Read aloud, emphasizing the caesuras. Do they enhance drama, hesitation, or rhythm?",
      "Step 4: Experiment by shifting or removing caesuras—what effect does this have?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["line-breaks", "caesura", "sound"]
  },
  {
    id: "linebreaks-04",
    title: "Breath and Breaks",
    context: "Line breaks can mirror natural breath patterns, shaping the poem’s rhythm intuitively.",
    quote: "A line is a unit of breath.",
    attribution: "— Charles Olson (paraphrased)",
    task: "Write a poem where each line ends where you naturally pause for breath.",
    instructions: [
      "Step 1: Speak a spontaneous sentence aloud, noting where you naturally pause.",
      "Step 2: Draft a short poem, using line breaks to match those breathing pauses.",
      "Step 3: Read it aloud—does it feel organic? If not, adjust the breaks to better reflect your breath.",
      "Step 4: Compare to a version with more structured, even line lengths. Which feels more natural?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["line-breaks", "rhythm", "voice"]
  },
  {
    id: "linebreaks-05",
    title: "Visual Impact",
    context: "Line lengths shape how a poem looks on the page, influencing readability and emphasis.",
    quote: "I saw the best minds of my generation destroyed by madness, starving hysterical naked,",
    attribution: "— Allen Ginsberg (from 'Howl')",
    task: "Create a poem where line lengths vary dramatically for visual effect.",
    instructions: [
      "Step 1: Draft a short poem with consistent, evenly spaced lines.",
      "Step 2: Rewrite it, experimenting with line length variation—some lines long, some abrupt.",
      "Step 3: Observe how different visual structures change the poem’s impact on the page.",
      "Step 4: Decide on a final version that balances meaning with visual form."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20 minutes",
    tags: ["line-breaks", "visual-form", "structure"]
  },
    {
    id: "linebreaks-06",
    title: "Multiple Readings",
    context: "Enjambment can control pacing, making a poem feel different when read quickly versus slowly.",
    quote: "The apparition of these faces in the crowd;\nPetals on a wet, black bough.",
    attribution: "— Ezra Pound (from 'In a Station of the Metro')",
    task: "Draft a poem that reads differently depending on whether it is read quickly or slowly.",
    instructions: [
      "Step 1: Write a short poem with a mix of short, abrupt lines and long, flowing lines.",
      "Step 2: Use enjambment to push the reader forward in some places while creating natural pauses in others.",
      "Step 3: Read it aloud twice—once quickly, once slowly. Does the meaning shift?",
      "Step 4: Revise any lines where the pacing doesn’t create a distinct effect."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20-25 minutes",
    tags: ["line-breaks", "enjambment", "pacing"]
  },
  {
    id: "linebreaks-07",
    title: "Emotional Shifts",
    context: "Line breaks and caesuras can mirror changes in tone, helping to guide the reader’s emotional journey.",
    quote: "A sudden blow: the great wings beating still\nAbove the staggering girl, her thighs caressed\nBy the dark webs, her nape caught in his bill,",
    attribution: "— W.B. Yeats (from 'Leda and the Swan')",
    task: "Write a poem where a shift in emotion is mirrored by line breaks and caesuras.",
    instructions: [
      "Step 1: Choose an emotion that undergoes a shift (e.g., joy to sorrow, anger to calm).",
      "Step 2: Write a stanza where the first half has fluid, connected lines, and the second half has abrupt breaks or pauses.",
      "Step 3: Use caesuras (mid-line punctuation) in places where the shift is most dramatic.",
      "Step 4: Read it aloud. Does the rhythm reinforce the emotional change?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20 minutes",
    tags: ["line-breaks", "caesura", "tone"]
  },
  {
    id: "linebreaks-08",
    title: "Punctuation Alternatives",
    context: "Line breaks and caesuras can function as punctuation, shaping rhythm and emphasis without traditional marks.",
    quote: "so much depends\nupon\na red wheel\nbarrow",
    attribution: "— William Carlos Williams (from 'The Red Wheelbarrow')",
    task: "Write a poem that replaces punctuation with strategic line breaks and caesuras.",
    instructions: [
      "Step 1: Write a short poem using commas, periods, and dashes normally.",
      "Step 2: Rewrite it, replacing most punctuation with line breaks and pauses.",
      "Step 3: Ensure the meaning is still clear through spacing and structure.",
      "Step 4: Read both versions aloud. Which one feels more natural?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["line-breaks", "caesura", "punctuation"]
  },
  {
    id: "linebreaks-09",
    title: "Fragmented Narrative",
    context: "Enjambment can create a disjointed, suggestive story by breaking a narrative into non-linear pieces.",
    quote: "One day you finally knew\nwhat you had to do, and began,",
    attribution: "— Mary Oliver (from 'The Journey')",
    task: "Compose a narrative poem that uses enjambment to fragment a story into suggestive pieces.",
    instructions: [
      "Step 1: Choose a brief story or moment (e.g., a breakup, a childhood memory, an escape).",
      "Step 2: Write it in complete sentences first, then break it into lines that feel disjointed and open-ended.",
      "Step 3: Use gaps in information—let the reader infer what’s missing.",
      "Step 4: Adjust enjambment to create a balance between clarity and mystery."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 5,
    estimatedTime: "25-30 minutes",
    tags: ["line-breaks", "enjambment", "narrative"]
  },
  {
    id: "linebreaks-10",
    title: "Call and Response",
    context: "A caesura at the end of one line can create tension that is resolved (or echoed) in the next.",
    quote: "I have eaten\nthe plums\nthat were in\nthe icebox",
    attribution: "— William Carlos Williams (from 'This Is Just to Say')",
    task: "Experiment with a poem where one line’s end (with a caesura) prompts a contrasting or echoing start on the next line.",
    instructions: [
      "Step 1: Write a poem where each line contains two contrasting or echoing halves, divided by a caesura.",
      "Step 2: Example: 'She left // without a word' followed by 'A note // crumpled in the sink'.",
      "Step 3: Adjust the spacing and punctuation—should the pauses feel abrupt or lingering?",
      "Step 4: Experiment with alternative pairings to see which create the strongest tension or rhythm."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20-25 minutes",
    tags: ["line-breaks", "caesura", "persona"]
  },
{
    id: "voice-06",
    title: "Authentic Self",
    context: "Writing in your natural voice can create an immediate connection with the reader and enhance emotional honesty.",
    quote: "The world is too much with us; late and soon,\nGetting and spending, we lay waste our powers;",
    attribution: "— William Wordsworth (from 'The World is Too Much With Us')",
    task: "Write a poem using your natural voice to capture a personal moment or feeling.",
    instructions: [
      "Step 1: Choose a specific memory, feeling, or moment that is personally meaningful.",
      "Step 2: Write in the way you naturally speak—avoid forced formality or poetic embellishment.",
      "Step 3: Focus on clarity, honesty, and the rhythm of your everyday language.",
      "Step 4: Read it aloud. Does it sound like you? Adjust any lines that feel artificial."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 3,
    estimatedTime: "15-20 minutes",
    tags: ["voice", "personal", "authenticity"]
  },
  {
    id: "voice-07",
    title: "Adopt a Persona",
    context: "A persona poem allows the poet to step into another character’s voice and worldview.",
    quote: "I am the darker brother.\nThey send me to eat in the kitchen\nWhen company comes,",
    attribution: "— Langston Hughes (from 'I, Too')",
    task: "Rewrite the same poem as if spoken by a different character (a historical figure, a fictional being, etc.).",
    instructions: [
      "Step 1: Take a poem you've written in your own voice and select a new persona.",
      "Step 2: Adjust the vocabulary, tone, and perspective to fit the chosen character.",
      "Step 3: Consider how their experiences, beliefs, and emotions shape the poem.",
      "Step 4: Compare both versions—how does shifting persona change the poem’s meaning?"
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20-25 minutes",
    tags: ["persona", "perspective", "voice"]
  },
  {
    id: "voice-08",
    title: "Dual Voices",
    context: "Writing in two distinct voices can add tension, contrast, or interplay within a poem.",
    quote: "I grow old … I grow old …\nI shall wear the bottoms of my trousers rolled.",
    attribution: "— T.S. Eliot (from 'The Love Song of J. Alfred Prufrock')",
    task: "Compose a dialogue poem where two distinct voices interact, each with their own diction and tone.",
    instructions: [
      "Step 1: Choose two contrasting characters or perspectives (e.g., past vs. future self, a parent and child, two strangers).",
      "Step 2: Write alternating lines or stanzas where each voice has a distinct tone and vocabulary.",
      "Step 3: Ensure each character's speech style is recognizable—one formal, one casual; one poetic, one blunt, etc.",
      "Step 4: Revise to enhance tension or complementarity between the voices."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20-30 minutes",
    tags: ["dialogue", "voice", "contrast"]
  },
  {
    id: "voice-09",
    title: "Narrative Shift",
    context: "Switching from first to second person can engage the reader differently and shift the poem’s intimacy.",
    quote: "You do not do, you do not do\nAny more, black shoe\nIn which I have lived like a foot",
    attribution: "— Sylvia Plath (from 'Daddy')",
    task: "Experiment with a poem written in the first person and then revise it in the second person to engage the reader directly.",
    instructions: [
      "Step 1: Write a poem in the first person ('I') about a personal experience.",
      "Step 2: Rewrite the poem in the second person ('you'), making the reader inhabit the experience.",
      "Step 3: Observe how the emotional effect shifts—does it feel more direct, accusatory, or immersive?",
      "Step 4: Decide which version is stronger, or blend the two perspectives for added depth."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 4,
    estimatedTime: "20 minutes",
    tags: ["perspective", "voice", "reader-engagement"]
  },
  {
    id: "voice-10",
    title: "Multiple Perspectives",
    context: "A poem with shifting perspectives can offer a layered understanding of an event or emotion.",
    quote: "And you O my soul where you stand,\nSurrounded, detached, in measureless oceans of space,",
    attribution: "— Walt Whitman (from 'A Noiseless Patient Spider')",
    task: "Write a poem that shifts perspectives between two or more characters or internal viewpoints.",
    instructions: [
      "Step 1: Choose a subject where different viewpoints exist (e.g., a breakup, a historic event, a personal conflict).",
      "Step 2: Write a stanza from one perspective, then shift to another in the next stanza.",
      "Step 3: Ensure each perspective has a distinct tone, vocabulary, or bias.",
      "Step 4: Revise to make the shifts clear and meaningful, either through formatting or tonal changes."
    ],
    created: "2025-02-27",
    lastModified: "2025-02-27",
    author: "Poetry Gym Team",
    difficulty: 5,
    estimatedTime: "25-30 minutes",
    tags: ["perspective", "voice", "contrast"]
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
