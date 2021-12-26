'use strict';

function Deck(flashcards) {
    this.flashcards = flashcards;
    this._currentCard = null;
}

module.exports = Deck;
