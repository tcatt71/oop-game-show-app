/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('This is a new year'),
      new Phrase('a bird in the hand is worth two in the bush'),
      new Phrase('hot on the heels'),
      new Phrase('the darkest hour is just before the dawn'),
      new Phrase('the best defence is a good offence')
    ];
    this.activePhrase = null;
  }

  /** Removes initial overlay revealing the gameboard and displays a random phrase. */
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Returns a random phrase from the phrase array.
   * @returns {object}
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * Handles both onscreen and user keyboard interaction.
   * @param {Event} event - The click or keyup event.
   */
  handleInteraction(event) {
    if (event.type === 'click') {
      if (event.target.tagName === 'BUTTON') {
        const key = event.target;
        const letter = key.textContent;

        key.disabled = true;

        if (this.activePhrase.phrase.includes(letter)) {
          key.classList.add('chosen');
          this.activePhrase.showMatchedLetter(event);
          if (this.checkForWin()) {
            this.gameOver(true);
          }
        } else {
          key.classList.add('wrong');
          this.removeLife();
        }
      }
    } else if (event.type === 'keyup') {
      const onscreenKeys = document.querySelectorAll('#qwerty button');
      const letter = event.key;

      onscreenKeys.forEach(key => {
        if (key.textContent === letter) {
          key.disabled = true;

          if (this.activePhrase.phrase.includes(letter)) {
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(event);
            if (this.checkForWin()) {
              this.gameOver(true);
            }
          } else {
            key.classList.add('wrong');
            this.removeLife();
          }
        }
      })
    }
  }

  /** Removes a life from the scroeboard and invokes the gameOver method if all lives have been lost. */
  removeLife() {
    const scoreboardHearts = document.querySelectorAll('#scoreboard img');

    for (const heart of scoreboardHearts) {
      if (heart.getAttributeNode('src').value === 'images/liveHeart.png') {
        heart.getAttributeNode('src').value = 'images/lostHeart.png'
        this.missed++;
        if (this.missed === 5) {
          this.gameOver(false);
        }
        break;
      }
    }
  }

  /**
   * Checks if all letters of the phrase have been revealed.
   * @returns {boolean} - True or False.
   */
  checkForWin() {
    const phrasePlaceholders = document.querySelectorAll('#phrase li[class~="letter"]');
    let isRevealed = true;

    for (const placeholder of phrasePlaceholders) {
      if (placeholder.className.includes('hide')) {
        isRevealed = false;
        break;
      }
    }
    return isRevealed;
  }

  /**
   * Disables the onscreen keyboard keys and displays a delayed win or lose overlay.
   * @param {boolean} isWinner - True or False if the player won the game.
   */
  gameOver(isWinner) {
    this.#disableKeys();
    controller.abort();

    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'flex';
    overlay.style.opacity = '0';

    setTimeout(() => {
      const gameOverMessage = overlay.querySelector('#game-over-message');

      overlay.classList.remove('start');

      if (isWinner) {
        overlay.classList.remove('lose');
        overlay.classList.add('win');
        gameOverMessage.textContent = 'You Win!';
      } else {
        overlay.classList.remove('win');
        overlay.classList.add('lose');
        gameOverMessage.textContent = 'You Lose';
      }

      overlay.style.opacity = '1';
    }, 750);
  }

  /** Disables all onscreen keyboard keys. */
  #disableKeys() {
    const keyboardButtons = document.querySelectorAll('#qwerty button');

    keyboardButtons.forEach(button => button.disabled = true);
  }
}