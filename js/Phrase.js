/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /** Takes the Phrase instances phrase property and displays it to the screen. */
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

  /**
   * Checks the players selected letter against the current placeholder.
   * @param {Element} placeholder - Current placeholder of the iterated list of placeholders.
   * @param {Event} event - The event object passed in from the letter key's click event.
   * @returns {boolean} - True or False if the letter matches the placeholder.
   */
  checkLetter(placeholder, event) {
    const selectedLetter = ` ${event.currentTarget.textContent}`;

    if (placeholder.className.includes(selectedLetter)) {
      return true;
    } else {
      return false;
    }
  }
}
const newPhrase = new Phrase(myPhrase);
