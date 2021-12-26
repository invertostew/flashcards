'use strict';

function Deck(flashcards) {
    this.flashcards = flashcards;
    this._currentFlashcard = null;
    this._removedFlashcards = [];
}

Deck.prototype.drawFlashcard = function () {
    const index = Math.floor(Math.random() * this.flashcards.length);
    const flashcard = this.flashcards[index];

    this._currentFlashcard = flashcard;
    this._removeFlashcard();
}

Deck.prototype._removeFlashcard = function () {
    const currentFlashcardIndex = this.flashcards.findIndex((flashcard) => {
        return flashcard === this._currentFlashcard;
    });
    const removedFlashcard = this.flashcards.splice(currentFlashcardIndex, 1);

    this._removedFlashcards.push(removedFlashcard[0]);
}

Deck.prototype.skipFlashcard = function () {
    this._currentFlashcard = null;
}

module.exports = Deck;
