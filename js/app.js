let game;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click',() => {
    game = new Game();
    game.startGame();
});
