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

elements.controls.drawFlashcard.addEventListener('click', () => {
    deck.drawFlashcard();
    setFlashcardContent();
});

elements.controls.skipFlashcard.addEventListener('click', () => {
    deck.skipFlashcard();
    setFlashcardContent();
});

elements.controls.resetDeck.addEventListener('click', () => {
    deck.resetDeck();
    setFlashcardContent();
});
