class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phrases = [
            new Phrase('how Are you'),
            new Phrase('cupcake ulucay'),
            new Phrase('kagan ulucay'),
            new Phrase('allyson'),
            new Phrase('keke')
        ];

        return phrases;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * 5)]; 
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        const overlay = document.querySelector('#overlay');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        overlay.style.display = 'none';
    }

    handleInteraction(){

    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(){

    }
}