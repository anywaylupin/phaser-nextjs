import { EventBus } from '../EventBus';
import { SceneKey } from './scene-key';

export default class MainMenu extends Phaser.Scene {
  background: Phaser.GameObjects.Image;
  logo: Phaser.GameObjects.Image;
  title: Phaser.GameObjects.Text;
  logoTween: Phaser.Tweens.Tween | null;

  constructor() {
    super({ key: SceneKey.MainMenu });
  }

  create() {
    this.background = this.add.image(512, 384, 'background');

    this.logo = this.add.image(512, 300, 'logo').setDepth(100);

    this.title = this.add
      .text(512, 460, 'Main Menu', {
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
    if (this.logoTween) {
      this.logoTween.stop();
      this.logoTween = null;
    }

    this.scene.start(SceneKey.MainGame);
  }

  moveLogo(callback?: ({ x, y }: { x: number; y: number }) => void) {
    if (this.logoTween) {
      if (this.logoTween.isPlaying()) {
        this.logoTween.pause();
      } else {
        this.logoTween.play();
      }
    } else {
      this.logoTween = this.tweens.add({
        targets: this.logo,
        x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
        y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          callback?.({ x: Math.floor(this.logo.x), y: Math.floor(this.logo.y) });
        }
      });
    }
  }
}
