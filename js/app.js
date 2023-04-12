/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();
const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

startButton.addEventListener('click', () => {
  const phraseUL = document.querySelector('#phrase ul');
  const phrase = phraseUL.querySelectorAll('li');
keyboard.addEventListener('click', (event) => newGame.handleInteraction(event));

  phrase.forEach(letter => phraseUL.removeChild(letter));


  const keyboardButtons = document.querySelectorAll('#qwerty button');

  keyboardButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove('chosen', 'wrong');
  });

  const scoreboard = document.querySelectorAll('#scoreboard img[src="images/lostHeart.png"]');

  scoreboard.forEach(heart => heart.getAttributeNode('src').value = 'images/liveHeart.png');

  newGame.missed = 0;
  newGame.startGame();
});

