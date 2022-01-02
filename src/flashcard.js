'use strict';

function Flashcard(concept, definition, category, _examples) {
    this.concept = concept;
    this.definition = definition;
    this.category = category;
    this._examples = _examples;
}

Flashcard.prototype.showAllExamples = function () {
    if (!Array.isArray(this._examples)) {
        throw new Error('The _examples property must be an array.');
    }

    if (!this._examples || !this._examples.length) {
        return `Oops! It looks like there's no examples for "${this.concept}" at the moment.`;
    }

    const examplesIntro = `Examples for ${this.concept}!`;
    const examples = this._examples.reduce((accumulator, example, index) => {
        if (index === 0) {
            return `
Example ${index + 1}:
${example}
`.trim();
        }

        return `
${accumulator}

Example ${index + 1}:
${example}
`.trim();
    }, '');
    
    return `${examplesIntro}\n\n${examples}`;
}

module.exports = Flashcard;
