'use strict';

const Flashcard = require('../src/flashcard.js');

let flashcards;
beforeEach(() => {
    flashcards = [
        new Flashcard('Concept 1', 'Definition 1', 'Category 1'),
        new Flashcard('Concept 2', 'Definition 2', 'Category 2')
    ];
});

describe('Flashcard', () => {
    test('Returns an instance of Flashcard', () => {
        expect(flashcards[0]).toBeInstanceOf(Flashcard);
        expect(flashcards[1]).toBeInstanceOf(Flashcard);
    });
    test('Returns the concept property', () => {
        expect(flashcards[0].concept).toBe('Concept 1');
        expect(flashcards[1].concept).toBe('Concept 2');
    });
    test('Returns the definition property', () => {
        expect(flashcards[0].definition).toBe('Definition 1');
        expect(flashcards[1].definition).toBe('Definition 2');
    });
    test('Returns the category property', () => {
        expect(flashcards[0].category).toBe('Category 1');
        expect(flashcards[1].category).toBe('Category 2');
    });
});
