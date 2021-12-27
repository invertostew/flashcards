const flashcards = [
    new Flashcard('Concept 1', 'Definition 1', 'Category', [
        'Example 1'
    ]),
    new Flashcard('Concept 2', 'Definition 2', 'Category', [
        'Example 2'
    ])
];

const deck = new Deck(flashcards);

console.log(deck);
