import { SceneKey } from './scene-key';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: SceneKey.Preloader });
  }

  init() {
    this.add.image(512, 384, 'background');

    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    this.load.on('progress', (progress: number) => {
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    this.load.pack('preload', 'assets/preload-asset-pack.json');
  }

  create() {
    this.scene.start(SceneKey.MainMenu);
  }
}
