'use strict';

const Flashcard = require('../src/flashcard.js');

describe('Flashcard', () => {
    test('Returns an instance of Flashcard', () => {
        const flashcard = new Flashcard();
        expect(flashcard).toBeInstanceOf(Flashcard);
    });
    test('Returns the concept property', () => {
        const flashcard = new Flashcard('Concept 1');
        expect(flashcard.concept).toBe('Concept 1');
    });
    test('Returns the definition property', () => {
        const flashcard = new Flashcard('Concept 1', 'Definition 1');
        expect(flashcard.definition).toBe('Definition 1');
    });
    test('Returns the category property', () => {
        const flashcard = new Flashcard('Concept 1', 'Definition 1', 'JavaScript');
        expect(flashcard.category).toBe('JavaScript');
    });
});
