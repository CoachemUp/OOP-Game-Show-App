/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /******************************
    * Display phrase on game board
    ******************************/
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            const li = this.phrase[i];
            const liPhrase = document.createElement("li");
            liPhrase.textContent = li;
            const ul = document.querySelector("#phrase ul");

            ul.appendChild(liPhrase);

            if (li !== " ") {
                liPhrase.classList.add("letter", [li]);

            } else if (li === " ") {
                liPhrase.classList.add("space");
            }
        }
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    *************************************************/
    checkLetter(letter) {
        const correct = this.phrase.includes(letter);
        return correct;
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    *************************************************************/
    showMatchedLetter(letter) {
        const matchLetter = document.getElementsByClassName(`${letter}`);
        for (let i = 0; i < matchLetter.length; i++) {
            matchLetter[i].classList.remove('hide');
            matchLetter[i].classList.add('show');
           
        }
    }
}