// Set up
const complexExample = `Some really complex
multi line
example`;
const flashcards = [
    new Flashcard('Concept 1', 'Definition 1', 'Category 1', [
        complexExample
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
        definition: document.querySelector('#definition'),
        examples: document.querySelector('#examples')
    },
    controls: {
        drawFlashcard: document.querySelector('#draw-flashcard'),
        skipFlashcard: document.querySelector('#skip-flashcard'),
        resetDeck: document.querySelector('#reset-deck')
    }
};

const setFlashcardContent = () => {
    if (deck._currentFlashcard) {
        elements.flashcard.concept.textContent = deck._currentFlashcard.concept;
        elements.flashcard.definition.textContent = deck._currentFlashcard.definition;
        elements.flashcard.examples.textContent = deck._currentFlashcard.showAllExamples();
        elements.flashcard.examples.classList.remove('hidden');
    } else {
        elements.flashcard.concept.textContent = 'Draw a Flashcard';
        elements.flashcard.definition.textContent = 'Please press the "Draw Flashcard" button.';
        elements.flashcard.examples.textContent = '';
        elements.flashcard.examples.classList.add('hidden');
    }
};

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
};

const toggleAnimations = () => {
    if (deck._currentFlashcard) {
        elements.controls.drawFlashcard.classList.remove('twitch');
    } else {
        elements.controls.drawFlashcard.classList.add('twitch');
    }

    if (!deck.flashcards.length) {
        elements.controls.resetDeck.classList.add('twitch');
    } else {
        elements.controls.resetDeck.classList.remove('twitch');
    }
};

const updateCardAndControls = () => {
    setFlashcardContent();
    toggleControls();
    toggleAnimations();
}

elements.controls.drawFlashcard.addEventListener('click', () => {
    deck.drawFlashcard();
    updateCardAndControls();
});

elements.controls.skipFlashcard.addEventListener('click', () => {
    deck.skipFlashcard();
    updateCardAndControls();
});

elements.controls.resetDeck.addEventListener('click', () => {
    deck.resetDeck();
    updateCardAndControls();
});
