/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      { phrase: 'This is a new year' },
      { phrase: 'a bird in the hand is worth two in the bush' },
      { phrase: 'hot on the heels' },
      { phrase: 'the darkest hour is just before the dawn' },
      { phrase: 'the best defence is a good offence' }
    ];
    this.activePhrase = null;
  }

  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(this.activePhrase);
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

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

  gameOver(isWinner) {
    this.#disableKeys();
    setTimeout(() => {
      const overlay = document.querySelector('#overlay');
      const gameOverMessage = overlay.querySelector('#game-over-message');

      overlay.style.display = 'flex';
      overlay.classList.remove('start');

      if (isWinner) {
        overlay.classList.remove('lose');
        overlay.classList.add('win');
        gameOverMessage.textContent = 'You Win!';
      } else {
        overlay.classList.remove('win');;
        overlay.classList.add('lose');
        gameOverMessage.textContent = 'You Lose';
      }
    }, 750);
  }

  #disableKeys() {
    const keyboardButtons = document.querySelectorAll('#qwerty button');

    keyboardButtons.forEach(button => button.disabled = true);
  }
}