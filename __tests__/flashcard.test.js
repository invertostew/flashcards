'use strict';

const Flashcard = require('../src/flashcard.js');

describe('Flashcard', () => {
    test('Returns an instance of Flashcard', () => {
        const flashcard = new Flashcard();
        expect(flashcard).toBeInstanceOf(Flashcard);
    });
});
