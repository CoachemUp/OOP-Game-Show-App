/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("may the force be with you"),
            new Phrase("houston we have a problem"),
            new Phrase("i am your father"),
            new Phrase("just keep swimming"),
            new Phrase("bond james bond"),
        ];
        this.activePhrase = null;
    }
    /********************************************************
     * Begins game by selecting a random phrase and displaying it to user
     *********************************************************************/
    startGame() {
        document.getElementById("overlay").style.display = "none";
        const startPhrase = this.getRandomPhrase();
        this.activePhrase = startPhrase;
        startPhrase.addPhraseToDisplay();
    }
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     ***************************************************/
    getRandomPhrase() {
        const phraseIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[phraseIndex];
        return randomPhrase;
    }
    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     *********************************************************************/
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.textContent);
        } else {
            button.classList.add("wrong");
            this.removeLife();
        } if (this.checkForWin() === true) {
            this.gameOver(true);
        }
    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     **************************************************************************/
    removeLife() {
        const matchLetter = this.activePhrase.checkLetter();
        if (matchLetter != true) {
            const attempts = document.querySelectorAll("img");
            attempts[this.missed].src = "../images/lostHeart.png";
            this.missed++;
        }
        if (this.missed > 4) {
            this.gameOver();
        }
    }
    /**
     *Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     ************************************************************************/
    checkForWin() {
        const letters = document.querySelectorAll(".letter");
        const userLetters = document.querySelectorAll(".show");
        if (letters.length === userLetters.length) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     *******************************************************************/
    gameOver(gameWon) {
        document.getElementById("overlay").style.display = "block";
        const endMessage = document.getElementById("game-over-message");
        const win = document.getElementById("overlay");
        if (gameWon) {
            win.className = "win";
            endMessage.innerHTML = `You WON! Good Job!`;
        } else {
            win.className = "lose";
            endMessage.innerHTML = `You LOST! Try Again?`;
        }
        //eventlistener to call the resetGame method and starts a new game
        document.getElementById('btn__reset').addEventListener("click", () => {
            this.resetGame();
            this.startGame();
        });
    }

    /**
     * resets the game board to play another game
     * removes all li elements
     * updates the class of the onscreen keyboard
     * resets all the heart images to liveheart.png
     *****************************************************************************/

    resetGame() {
        const phraseList = document.getElementById('phrase').children[0];
        phraseList.innerHTML = '';
        const key = document.getElementsByClassName('key');
        for (let i = 0; i < key.length; i++) {
            key[i].disabled = false;
            key[i].className = 'key';
        }
        const heart = document.querySelectorAll('img');

        for (let i = 0; i < heart.length; i++) {
            heart[i].src = '../images/liveHeart.png';
        }
    }
}
