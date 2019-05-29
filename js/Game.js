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
            new Phrase('cupcake'),
            new Phrase('kagan'),
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

    startGame(){

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