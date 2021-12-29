// Set up
const flashcards = [
    new Flashcard('Concept 1', 'Definition 1', 'Category 1', [
        'Example 1'
    ]),
    new Flashcard('Concept 2', 'Definition 2', 'Category 2', [
        'Example 2'
    ]),
    new Flashcard('Concept 3', 'Definition 3', 'Category 1', [
        'Example 1',
        'Example 2'
    ])
];
const deck = new Deck(flashcards);

// App
const elements = {
    flashcard: {
        concept: document.querySelector('#concept'),
        definition: document.querySelector('#definition')
    },
    controls: {
        showExamples: document.querySelector('#show-examples'),
        drawFlashcard: document.querySelector('#draw-flashcard'),
        skipFlashcard: document.querySelector('#skip-flashcard'),
        resetDeck: document.querySelector('#reset-deck')
    }
}

const setFlashcardContent = () => {
    if (deck._currentFlashcard) {
        elements.flashcard.concept.textContent = deck._currentFlashcard.concept;
        elements.flashcard.definition.textContent = deck._currentFlashcard.definition;
    } else {
        elements.flashcard.concept.textContent = 'Draw a Flashcard';
        elements.flashcard.definition.textContent = 'Please press the "Draw Flashcard" button.';
    }
}

const toggleControls = () => {
    if (!deck.flashcards.length) {
        elements.controls.drawFlashcard.disabled = true;
    } else {
        elements.controls.drawFlashcard.disabled = false;
    }

    if (deck._currentFlashcard) {
        elements.controls.skipFlashcard.disabled = false;
    } else {
        elements.controls.skipFlashcard.disabled = true;
    }

    if (deck._removedFlashcards.length) {
        elements.controls.resetDeck.disabled = false;
    } else {
        elements.controls.resetDeck.disabled = true;
    }
}

elements.controls.drawFlashcard.addEventListener('click', () => {
    deck.drawFlashcard();
    setFlashcardContent();
    toggleControls();
});

elements.controls.skipFlashcard.addEventListener('click', () => {
    deck.skipFlashcard();
    setFlashcardContent();
    toggleControls();
});

elements.controls.resetDeck.addEventListener('click', () => {
    deck.resetDeck();
    setFlashcardContent();
    toggleControls();
});
