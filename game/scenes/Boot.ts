import { SceneKey } from './scene-key';

export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: SceneKey.Boot });
  }

  preload() {
    this.load.image('background', 'assets/bg.png');
  }

  create() {
    this.scene.start(SceneKey.Preloader);
  }
}
