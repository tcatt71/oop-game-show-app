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
}