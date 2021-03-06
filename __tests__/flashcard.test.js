'use strict';

const Flashcard = require('../src/flashcard.js');

let flashcards;
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
    test('Returns the examples property', () => {
        expect(flashcards[0]._examples).toEqual(['Example 1']);
        expect(flashcards[1]._examples).toEqual(['Example 1', 'Example 2']);
    });
});

describe('showAllExamples', () => {
    test('Throws an error if the _examples property is not an array', () => {
        const error = 'The _examples property must be an array.';
        flashcards[0]._examples = 'not an array';
        expect(() => {
            flashcards[0].showAllExamples()
        }).toThrow(new Error(error));
    });
    test('Returns a formatted string if no _examples', () => {
        const error = `Oops! It looks like there's no examples for "${flashcards[0].concept}" at the moment.`;
        flashcards[0]._examples = [];
        expect(flashcards[0].showAllExamples()).toEqual(error);
    });
    test('Returns a formatted string of examples', () => {
        const examples = flashcards[0].showAllExamples();
        expect(examples).toEqual(`Examples for Concept 1!\n\nExample 1:\nExample 1`);
        const twoExamples = flashcards[1].showAllExamples();
        expect(twoExamples).toEqual(`Examples for Concept 2!\n\nExample 1:\nExample 1\n\nExample 2:\nExample 2`);
    });
});
