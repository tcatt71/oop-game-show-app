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
    if (event.target.tagName === 'BUTTON') {
      const key = event.target;
      const letter = key.textContent;

      key.disabled = true;

      if (this.activePhrase.phrase.includes(letter)) {
        key.classList.add('chosen');
        Phrase.showMatchedLetter(event);
        if (this.checkForWin()) {
          this.gameOver();
        }
      } else {
        key.classList.add('wrong');
        this.removeLife();
      }
    }
  }

  removeLife() {
    const scoreboardHearts = document.querySelectorAll('#scoreboard img');

    for (const heart of scoreboardHearts) {
      if (heart.getAttributeNode('src').value === 'images/liveHeart.png') {
        heart.getAttributeNode('src').value = 'images/lostHeart.png'
        this.missed++;
        if (this.missed === 5) {
          this.gameOver();
        }
        break;
      }
    }
  }
}