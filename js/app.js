/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Event listener to Start Game
 * Starts new Game by calling startGame method in Game Class
 *************************************************************/
const game = new Game();
document.getElementById('btn__reset').addEventListener("click", function () {
   
    
        game.startGame();
});



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