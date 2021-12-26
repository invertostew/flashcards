'use strict';

const Deck = require('../src/deck.js');
const Flashcard = require('../src/flashcard.js');

let deck, flashcards;
beforeEach(() => {
    flashcards = [
        new Flashcard('Concept 1', 'Definition 1', 'Category 1'),
        new Flashcard('Concept 2', 'Definition 2', 'Category 2')
    ];
    deck = new Deck(flashcards);
});

describe('Deck', () => {
    test('Returns an instance of Deck', () => {
        expect(deck).toBeInstanceOf(Deck);
    });
    test('Returns the flashcards property', () => {
        expect(deck.flashcards).toEqual(flashcards);
        expect(deck.flashcards[0]).toEqual(
            {
                concept: 'Concept 1',
                definition: 'Definition 1',
                category: 'Category 1'
            }
        );
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

describe('skipFlashcard', () => {
    test('Resets the _currentFlashcard property to null', () => {
        deck._currentFlashcard = 'Anything but null';
        deck.skipFlashcard();
        expect(deck._currentFlashcard).toBe(null);
    });
});

describe('resetDeck', () => {
    test('Combines the _removedFlashcards elements back into the flashcards array', () => {
        deck._removedFlashcards = [
            {
                concept: 'Concept 3',
                definition: 'Definition 3',
                category: 'Category 3'
            }
        ];
        deck.resetDeck();
        expect(deck.flashcards).toEqual([
            {
                concept: 'Concept 1',
                definition: 'Definition 1',
                category: 'Category 1'
            },
            {
                concept: 'Concept 2',
                definition: 'Definition 2',
                category: 'Category 2'
            },
            {
                concept: 'Concept 3',
                definition: 'Definition 3',
                category: 'Category 3'
            }
        ]);
    });
    test('Resets the _currentFlashcard property', () => {
        deck._currentFlashcard = 'Anything but null';
        deck.resetDeck();
        expect(deck._currentFlashcard).toBe(null);
    });
    test('Resets the _removedFlashcards property', () => {
        deck._removedFlashcards = ['Anything but an empty array'];
        deck.resetDeck();
        expect(deck._removedFlashcards).toEqual([]);
    });
});
