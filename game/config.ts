import * as Phaser from 'phaser';

import { Boot, GameOver, MainGame, MainMenu, Preloader } from './scenes';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: 'game-container',
  backgroundColor: '#028af8',
  audio: { noAudio: true },
  scene: [Boot, Preloader, MainGame, MainMenu, GameOver]
};
