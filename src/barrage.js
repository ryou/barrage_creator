import * as PIXI from 'pixi.js';
import GameController from './class/GameController';

GLOBAL.app = new PIXI.Application();

document.body.appendChild(GLOBAL.app.view);

GLOBAL.gameController = new GameController();

GameController.loadImages(() => {
  GLOBAL.gameController.mainLoop();
});
