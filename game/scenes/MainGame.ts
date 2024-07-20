import { EventBus } from '../EventBus';
import { SceneKey } from './scene-key';

export default class MainGame extends Phaser.Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: SceneKey.MainGame });
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, 'background');
    this.background.setAlpha(0.5);

    this.gameText = this.add
      .text(512, 384, 'Main Game', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      })
      .setOrigin(0.5)
      .setDepth(100);

    EventBus.emit('current-scene-ready', this);
  }

  changeScene() {
    this.scene.start(SceneKey.GameOver);
  }
}
