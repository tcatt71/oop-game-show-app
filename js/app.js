/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', () => {
  const phraseUL = document.querySelector('#phrase ul');
  const phrase = phraseUL.querySelectorAll('li');

  phrase.forEach(letter => phraseUL.removeChild(letter));


const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (event) => newGame.handleInteraction(event));