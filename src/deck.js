'use strict';

const settings = {
    default: {
        currentFlashcard: null
    },
    errors: {
        emptyFlashcardsArray: 'Oh no! There are no flashcards.',
        noCurrentFlashcard: 'Please draw a flashcard first!'
    }
};

function Deck(flashcards) {
    this.flashcards = flashcards;
    this._currentFlashcard = settings.default.currentFlashcard;
    this._removedFlashcards = [];
}

Deck.prototype.drawFlashcard = function () {
    if (!this.flashcards.length) {
        throw new Error(settings.errors.emptyFlashcardsArray);
    }

    const index = Math.floor(Math.random() * this.flashcards.length);

    this._currentFlashcard = this.flashcards[index];
    this._removeFlashcard();

    return this._currentFlashcard.concept;
}

Deck.prototype._removeFlashcard = function () {
    if (!this.flashcards.length) {
        throw new Error(settings.errors.emptyFlashcardsArray);
    }

    const currentFlashcardIndex = this.flashcards.findIndex((flashcard) => {
        return flashcard === this._currentFlashcard;
    });
    const removedFlashcard = this.flashcards.splice(currentFlashcardIndex, 1);

    this._removedFlashcards.push(removedFlashcard[0]);
}

Deck.prototype.skipFlashcard = function () {
    if (!this._currentFlashcard) {
        throw new Error(settings.errors.noCurrentFlashcard);
    }

    this._currentFlashcard = settings.default.currentFlashcard;

    return 'You have skipped the current flashcard.';
}

Deck.prototype.resetDeck = function () {
    const resetFlashcards = [...this.flashcards, ...this._removedFlashcards];

    this.flashcards = resetFlashcards;
    this._currentFlashcard = settings.default.currentFlashcard;
    this._removedFlashcards = [];

    return 'The deck has been reset!';
}

module.exports = Deck;
