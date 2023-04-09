/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();

const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => newGame.startGame());

const keyBoard = document.querySelector('#qwerty');
keyBoard.addEventListener('click', (event) => newGame.handleInteraction(event));