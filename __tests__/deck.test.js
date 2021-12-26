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
    test('Returns the _currentFlashcard property', () => {
        const deck = new Deck();
        expect(deck._currentFlashcard).toBe(null);
    });
    test('Returns the _removedFlashcards property', () => {
        const deck = new Deck();
        expect(deck._removedFlashcards).toEqual([]);
    });
});

describe('drawFlashcard', () => {
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
