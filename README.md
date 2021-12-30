# Flashcards

## Description
Just a bit of a personal project built over the Christmas period whilst on break from Manchester Codes.

### Features
* Create an array of flashcards.
* Create a deck of flashcards.
* Draw a flashcard from the deck.
    * View the concept, definitioon and examples of the flashcard.
    * Removes the flashcard from the deck to avoid getting it multiple times.
* Skip the currently drawn flashcard.
* Reset the deck back, putting removed flashcards back into the flashcards array.

## Requirements
* [Node JS](https://nodejs.org/en/) - to run the program in the command line.

### Application Dependencies
Currently no application dependencies.

### Development Dependencies
* [Jest](https://jestjs.io/) - used for unit testing.

## Getting Started
### CLI
1. Clone the repository to your local machine with `git clone`.
2. Navigate into the directory that you cloned the repository in to.
3. Enter the Node REPL via the `node` command in the terminal.
4. Import the required modules:
    * `const Deck = require('./src/deck.js');`
    * `const Flashcard = require('./src/flashcard.js');`
5. Set up some flashcards, and a deck:
    * ```javascript
        const flashcards = [
            new Flashcard('Concept', 'Definition', 'Category', [
                'Optional Example'
            ]),
            ...
        ];

        const deck = new Deck(flashcards);
      ```
6. Now you have access to the following methods:
    * To draw a flashcard:
        * `drawFlashcard()` - will return a concept/topic - removes it from the deck so it can't be drawn again.
    * Once you have a card drawn, you can:
        * `skipFlashcard()` - skip the flashcard if you don't know it.
        * `deck._currentFlashcard.concept` - Show the concept of the currently drawn flashcard.
        * `deck._currentFlashcard.definition` - Show the definition of the currently drawn flashcard.
        * `deck._currentFlashcard.category` - Show the category of the currently drawn flashcard.
        * `deck._currentFlashcard.showAllExamples()` - Returns a formatted string of all the examples.
    * To reset the deck:
        * `deck.resetDeck();` - returns removed flashcards back to the flashcards array.

### GUI
Open up the `./index.html` file in your browser of choice. You will see a flashcard on the screen, from here you can utilise the three buttons to:

* Draw Flashcard
* Skip Flashcard
* Reset the Deck

If you hover over the flashcard, it will flip over, revealing the definition and any examples if they are present.

## Testing
This program was built using TDD. More specifically, using red/green refactoring with [Jest](https://jestjs.io/).

Each unit was first written as a failing test, which was then built out as per the test assertions and later refactored, and tested again.

All tests are located inside of the `__tests__` directory, and if you wish to run the tests, you can install Jest by running `npm install`. From there, you can run `npm test` to run all the tests.

## Future Plans
* Utilise the category of flashcards to allow only specific cards to be drawn.
* Convert to ES6 Class Syntax.
* Perhaps have it database backed in the future, and build the flashcards from the database.
