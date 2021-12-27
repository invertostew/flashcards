'use strict';

const Deck = require('../src/deck.js');
const Flashcard = require('../src/flashcard.js');

let deck, flashcards;
beforeEach(() => {
    flashcards = [
        new Flashcard('Concept 1', 'Definition 1', 'Category 1', [
            'Example 1'
        ]),
        new Flashcard('Concept 2', 'Definition 2', 'Category 2', [
            'Example 1',
            'Example 2'
        ])
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
                category: 'Category 1',
                _examples: ['Example 1']
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
    test('Throws an error if the flashcards array is empty', () => {
        const error = 'Oh no! There are no flashcards.';
        deck.flashcards = [];
        expect(() => {
            deck.drawFlashcard();
        }).toThrow(new Error(error));
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
    test('Returns the concept of the _currentFlashcard', () => {
        deck.flashcards = [
            new Flashcard('Concept 1', 'Definition 1', 'Category 1', [
                'Example 1'
            ])
        ];
        expect(deck.drawFlashcard()).toEqual('Concept 1');
    });
});

describe('_removeFlashcard', () => {
    test('Throws an error if the flashcards array is empty', () => {
        const error = 'Oh no! There are no flashcards.';
        deck.flashcards = [];
        expect(() => {
            deck._removeFlashcard();
        }).toThrow(new Error(error));
    });
});

describe('skipFlashcard', () => {
    test('Throws an error if the _currentFlashcard property is falsy', () => {
        const error = 'Please draw a flashcard first!';
        expect(() => {
            deck.skipFlashcard();
        }).toThrow(new Error(error));
    });
    test('Resets the _currentFlashcard property to null', () => {
        deck._currentFlashcard = 'Anything but null';
        deck.skipFlashcard();
        expect(deck._currentFlashcard).toBe(null);
    });
    test('Returns a success message', () => {
        deck._currentFlashcard = 'Anything but null';
        expect(deck.skipFlashcard()).toEqual('You have skipped the current flashcard.');
    });
});

describe('resetDeck', () => {
    test('Combines the _removedFlashcards elements back into the flashcards array', () => {
        deck._removedFlashcards = [
            {
                concept: 'Concept 3',
                definition: 'Definition 3',
                category: 'Category 3',
                _examples: ['Example 3']
            }
        ];
        deck.resetDeck();
        expect(deck.flashcards).toEqual([
            {
                concept: 'Concept 1',
                definition: 'Definition 1',
                category: 'Category 1',
                _examples: ['Example 1']
            },
            {
                concept: 'Concept 2',
                definition: 'Definition 2',
                category: 'Category 2',
                _examples: ['Example 1', 'Example 2']
            },
            {
                concept: 'Concept 3',
                definition: 'Definition 3',
                category: 'Category 3',
                _examples: ['Example 3']
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
    test('Returns a success message', () => {
        expect(deck.resetDeck()).toEqual('The deck has been reset!');
    });
});
