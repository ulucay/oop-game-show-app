class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const letters = [...this.phrase];
        const phraseList = document.querySelector('#phrase ul');
        
        letters.forEach(letter => {

            if(letter == ' '){
                phraseList.innerHTML += `<li class="space"> </li>`;
            }
            else{
                phraseList.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        });
        
    }

    checkLetter(){

    }

    showMatchedLetter(){

    }
    
}