/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Event listener to Start Game
 * Starts new Game by calling startGame method in Game Class
 *************************************************************/
let game = new Game();
document.getElementById('btn__reset').addEventListener("click", () => resetGame());
/**
* resets the game board to play another game
* removes all li elements
* updates the class of the onscreen keyboard
* resets all the heart images to liveheart.png
 *****************************************************************************/
function resetGame() {
    const phraseList = document.getElementById('phrase').children[0];
    phraseList.innerHTML = '';

    const key = document.getElementsByClassName('key');
    for (let i = 0; i < key.length; i++) {
        key[i].disabled = false;
        key[i].className = 'key';
    }
    const heart = document.getElementsByClassName('tries');
    for (let i = 0; i < heart.length; i++) {
        heart[i].firstElementChild.src = 'images/liveHeart.png';
    }
    game = new Game();
    game.startGame();
}
/**
 * Event listener to check for user input on UI ONLY
 * calls handleInteraction method in Game class 
 *************************************************************/
const button = document.getElementById('qwerty');
button.addEventListener('click', (e) => {
    if (e.target.classList == 'key') {
        game.handleInteraction(e.target);
    }
});