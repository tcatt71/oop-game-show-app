/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
let newGame;

keyboard.addEventListener('click', (event) => newGame.handleInteraction(event));
document.addEventListener('keyup', (event) => newGame.handleInteraction(event));

startButton.addEventListener('click', startNewGame);

/** Resets the gameboard and starts a new game. */
function startNewGame() {
  resetGame();
  newGame = new Game();
  newGame.startGame();

  /** Resets the gameboard upon restarting a new game.  */
  function resetGame() {
    removePhraseFromGameboard();
    resetOnscreenKeyboardButtons();
    resetHearts();

    /** Removes the previous phrase from the gameboard upon restarting a game. */
    function removePhraseFromGameboard() {
      const phraseUL = document.querySelector('#phrase ul');
      const phrase = phraseUL.querySelectorAll('li');

      phrase.forEach(letter => phraseUL.removeChild(letter));
    }

    /** Re-enables onscreen keyboard keys upon restarting a new game. */
    function resetOnscreenKeyboardButtons() {
      const keyboardButtons = document.querySelectorAll('#qwerty button');

      keyboardButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('chosen', 'wrong');
      });
    }

    /** Replenishes hearts lost upon restarting a new game. */
    function resetHearts() {
      const scoreboard = document.querySelectorAll('#scoreboard img[src="images/lostHeart.png"]');

      scoreboard.forEach(heart => heart.getAttributeNode('src').value = 'images/liveHeart.png');
    }
  }
}