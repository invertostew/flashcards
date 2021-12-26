'use strict';

const Deck = require('../src/deck.js');

describe('Deck', () => {
    test('Returns an instance of Deck', () => {
        const deck = new Deck();
        expect(deck).toBeInstanceOf(Deck);
    });
});
