let game;
const startButton = document.querySelector('#btn__reset');
const screenKeyboard = document.querySelectorAll('.key');

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

screenKeyboard.forEach( keyboardButton => {
    keyboardButton.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });
});




