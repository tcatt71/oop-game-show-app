/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
let newGame;

  const phraseUL = document.querySelector('#phrase ul');
  const phrase = phraseUL.querySelectorAll('li');
keyboard.addEventListener('click', (event) => newGame.handleInteraction(event));

  phrase.forEach(letter => phraseUL.removeChild(letter));
startButton.addEventListener('click', () => {
  resetGame();
  newGame = new Game();
  newGame.startGame();

  function resetGame() {

  const keyboardButtons = document.querySelectorAll('#qwerty button');

  keyboardButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove('chosen', 'wrong');
  });

  const scoreboard = document.querySelectorAll('#scoreboard img[src="images/lostHeart.png"]');

  scoreboard.forEach(heart => heart.getAttributeNode('src').value = 'images/liveHeart.png');

  newGame.missed = 0;
});

  }
});