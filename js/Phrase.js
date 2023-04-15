/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  /**
   * The constructor for the Phrase class. Converts the given phrase to all lowercase.
   * @param {object} phrase - A phrase object.
   */
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
    if (event.type === 'click') {
      const selectedLetter = event.target.textContent;

      return placeholder.classList.contains(selectedLetter) ? true : false;
    } else if (event.type === 'keyup') {
      const selectedLetter = event.key;

      return placeholder.classList.contains(selectedLetter) ? true : false;
    }
  }

  /**
   * Displays the letter(s) of the phrase on screen when the player correctly guesses the letter.
   * @param {Event} event - The event object passed in from the letter key's click event.
   */
  showMatchedLetter(event) {
    const placeholders = document.querySelectorAll('#phrase li');

    placeholders.forEach(placeholder => {
      if (this.checkLetter(placeholder, event)) {
        placeholder.classList.remove('hide');
        placeholder.classList.add('show');
      }
    });
  }
}