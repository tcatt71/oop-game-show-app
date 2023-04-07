/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const phraseUl = document.querySelector('#phrase ul');

    for (const char of this.phrase) {
      const letterPlaceholderLi = document.createElement('LI');
      if (char === ' ') {
        letterPlaceholderLi.classList.add('space');
      } else {
        letterPlaceholderLi.textContent = char;
        letterPlaceholderLi.classList.add('hide', 'letter', `${char}`);
      }
      phraseUl.insertAdjacentElement('beforeend', letterPlaceholderLi);
    }
  }
}
const newPhrase = new Phrase(myPhrase);
