'use strict';

const settings = {
    defaultCurrentFlashcard: null,
    emptyFlashcardsArrayError: 'Oh no! There are no flashcards.',
    noCurrentFlashcardError: 'Please draw a flashcard first!'
};

function Deck(flashcards) {
    this.flashcards = flashcards;
    this._currentFlashcard = settings.defaultCurrentFlashcard;
    this._removedFlashcards = [];
}

Deck.prototype.drawFlashcard = function () {
    if (!this.flashcards.length) {
        throw new Error(settings.emptyFlashcardsArrayError);
    }

    const index = Math.floor(Math.random() * this.flashcards.length);
    
    this._currentFlashcard = this.flashcards[index];
    this._removeFlashcard();
}

Deck.prototype._removeFlashcard = function () {
    if (!this.flashcards.length) {
        throw new Error(settings.emptyFlashcardsArrayError);
    }

    const currentFlashcardIndex = this.flashcards.findIndex((flashcard) => {
        return flashcard === this._currentFlashcard;
    });
    const removedFlashcard = this.flashcards.splice(currentFlashcardIndex, 1);

    this._removedFlashcards.push(removedFlashcard[0]);
}

Deck.prototype.skipFlashcard = function () {
    if (!this._currentFlashcard) {
        throw new Error(settings.noCurrentFlashcardError);
    }

    this._currentFlashcard = settings.defaultCurrentFlashcard;
}

Deck.prototype.resetDeck = function () {
    const resetFlashcards = this.flashcards.concat(this._removedFlashcards);

    this.flashcards = resetFlashcards;
    this._currentFlashcard = settings.defaultCurrentFlashcard;
    this._removedFlashcards = [];
}

module.exports = Deck;
