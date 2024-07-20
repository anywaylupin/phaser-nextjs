'use client';

import { PhaserGame, type PhaserGameRef } from '@/game';
import { MainMenu, SceneKey } from '@/game/scenes';
import { useRef, useState } from 'react';

const Home = () => {
  const [canMoveSprite, setCanMoveSprite] = useState(true);

  const phaserRef = useRef<PhaserGameRef | null>(null);
  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });

  const getScene = () => phaserRef.current?.scene;

  const changeScene = () => {
    const scene = getScene() as MainMenu;
    console.log(scene);
    scene?.changeScene();
  };

  const moveSprite = () => {
    const scene = getScene() as MainMenu;

    if (scene.scene.key === SceneKey.MainMenu) {
      scene.moveLogo(({ x, y }) => setSpritePosition({ x, y }));
    }
  };

  const addSprite = () => {
    const scene = getScene();

    if (scene) {
      const x = Phaser.Math.Between(64, scene.scale.width - 64);
      const y = Phaser.Math.Between(64, scene.scale.height - 64);

      const star = scene.add.sprite(x, y, 'star');

      scene.add.tween({
        targets: star,
        duration: 500 + Math.random() * 1000,
        alpha: 0,
        yoyo: true,
        repeat: -1
      });
    }
  };

  const currentScene = (scene: Phaser.Scene) => setCanMoveSprite(scene.scene.key !== 'MainMenu');

  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-hidden">
      <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
      <div className="p-2.5">
        <div>
          <button className="button" onClick={changeScene}>
            Change Scene
          </button>
        </div>
        <div>
          <button disabled={canMoveSprite} className="button" onClick={moveSprite}>
            Toggle Movement
          </button>
        </div>
        <div className="m-2.5">
          Sprite Position:
          <pre>{`{\n  x: ${spritePosition.x}\n  y: ${spritePosition.y}\n}`}</pre>
        </div>
        <div>
          <button className="button" onClick={addSprite}>
            Add New Sprite
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
