'use strict';

const Deck = require('../src/deck.js');

let deck, flashcards;
beforeEach(() => {
    flashcards = [
        {
            concept: 'Concept 1',
            definition: 'Definition 1',
            category: 'Category 1'
        },
        {
            concept: 'Concept 2',
            definition: 'Definition 2',
            category: 'Category 2'
        }
    ];
    deck = new Deck(flashcards);
});

describe('Deck', () => {
    test('Returns an instance of Deck', () => {
        expect(deck).toBeInstanceOf(Deck);
    });
    test('Returns the flashcards property', () => {
        expect(deck.flashcards).toEqual(flashcards);
    });
    test('Returns the _currentFlashcard property', () => {
        expect(deck._currentFlashcard).toBe(null);
    });
    test('Returns the _removedFlashcards property', () => {
        expect(deck._removedFlashcards).toEqual([]);
    });
});

describe('drawFlashcard', () => {
    test('Updates the _currentFlashcard property', () => {
        expect(deck._currentFlashcard).toBe(null);
        deck.drawFlashcard();
        expect(deck._currentFlashcard).not.toBe(null);
    });
    test('Removes the drawn card from the flashcards array', () => {
        deck.drawFlashcard();
        expect(deck._removedFlashcards).toEqual([deck._currentFlashcard]);
    });
});
