'use strict';

function Flashcard(concept, definition, category, _examples) {
    this.concept = concept;
    this.definition = definition;
    this.category = category;
    this._examples = _examples;
}

Flashcard.prototype.showAllExamples = function () {
    const examplesIntro = `Here are the examples for ${this.concept}!`;
    const examples = this._examples.reduce((accumulator, example, index) => {
        if (index === 0) return `Example ${index + 1}:\n${example}`;
        return `${accumulator}\n\nExample ${index + 1}:\n${example}`;
    }, '');
    return `${examplesIntro}\n\n${examples}`;
}

module.exports = Flashcard;
