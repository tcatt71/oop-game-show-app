/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App

const newGame = new Game();

const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => newGame.startGame());

