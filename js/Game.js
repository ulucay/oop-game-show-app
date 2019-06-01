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

    removeLife(){

    }

    checkForWin(){

    }

    gameOver(){

    }
}