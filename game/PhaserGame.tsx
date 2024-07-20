'use client';

import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';

import { EventBus } from './EventBus';
import { gameConfig } from './config';

export type PhaserGameRef = { game: Phaser.Game | null; scene: Phaser.Scene | null };

type PhaserGameProps = React.PropsWithChildren<{ currentActiveScene?: (scene: Phaser.Scene) => void }>;

const startGame = (parent: string) => new Phaser.Game({ ...gameConfig, parent });

export const PhaserGame = forwardRef<PhaserGameRef, PhaserGameProps>(function PhaserGame({ currentActiveScene }, ref) {
  const game = useRef<Phaser.Game | null>(null);

  useLayoutEffect(() => {
    if (game.current === null) {
      game.current = startGame('game-container');

      if (typeof ref === 'function') {
        ref({ game: game.current, scene: null });
      } else if (ref) {
        ref.current = { game: game.current, scene: null };
      }
    }
  }, [ref]);

  useEffect(() => {
    EventBus.on('current-scene-ready', (scene: Phaser.Scene) => {
      if (currentActiveScene && typeof currentActiveScene === 'function') {
        currentActiveScene(scene);
      }

      if (typeof ref === 'function') {
        ref({ game: game.current, scene });
      } else if (ref) {
        ref.current = { game: game.current, scene };
      }
    });
    return () => {
      EventBus.removeListener('current-scene-ready');
    };
  }, [currentActiveScene, ref]);

  return <div id="game-container"></div>;
});
