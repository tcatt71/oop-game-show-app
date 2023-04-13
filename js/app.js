/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
let newGame;

keyboard.addEventListener('click', (event) => newGame.handleInteraction(event));
document.addEventListener('keyup', (event) => newGame.handleInteraction(event));

startButton.addEventListener('click', () => {
  resetGame();
  newGame = new Game();
  newGame.startGame();


  function resetGame() {
    removePhraseFromGameboard();
    resetOnscreenKeyboardButtons();
    resetHearts();

    function removePhraseFromGameboard() {
      const phraseUL = document.querySelector('#phrase ul');
      const phrase = phraseUL.querySelectorAll('li');

      phrase.forEach(letter => phraseUL.removeChild(letter));
    }

    function resetOnscreenKeyboardButtons() {
      const keyboardButtons = document.querySelectorAll('#qwerty button');

      keyboardButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('chosen', 'wrong');
      });
    }

    function resetHearts() {
      const scoreboard = document.querySelectorAll('#scoreboard img[src="images/lostHeart.png"]');

      scoreboard.forEach(heart => heart.getAttributeNode('src').value = 'images/liveHeart.png');
    }
  }
});