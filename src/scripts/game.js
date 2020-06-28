import 'phaser'
import '@babel/polyfill'

import MainScene1 from './scenes/mainScene1'
import PreloadScene from './scenes/preloadScene'
import BgScene from './scenes/BgScene'
import FgScene from './scenes/FgScene'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  render:{
    pixelArt: true
  },
  scale: {
    parent: 'phaser-game',
    // mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  scene: [PreloadScene, MainScene1, BgScene, FgScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 400, debug: false}
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
