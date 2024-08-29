import { createGameMenu } from "./gameMenu.js";

const cardsApp = () => {
    document.querySelector('.game-content').addEventListener('click', (e) => e.stopPropagation());
    createGameMenu();
}

cardsApp();