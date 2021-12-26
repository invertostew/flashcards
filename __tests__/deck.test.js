'use strict';

const Deck = require('../src/deck.js');

describe('Deck', () => {
    test('Returns an instance of Deck', () => {
        const deck = new Deck();
        expect(deck).toBeInstanceOf(Deck);
    });
    test('Returns the flashcards property', () => {
        const deck = new Deck('flashcards');
        expect(deck.flashcards).toBe('flashcards');
    });
    test('Returns the _currentCard property', () => {
        const deck = new Deck();
        expect(deck._currentCard).toBe(null);
    });
});
