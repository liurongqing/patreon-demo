import * as scenes from '@/scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config: any = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.NONE,
    parent: 'app',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 768,
    height: 1024
    // min: {
    //   width: 800,
    //   height: 600
    // },
    // max: {
    //   width: 800,
    //   height: 600
    // }
  },
  scene,
  physics: {
    default: 'arcade',
    debug: true
  }
}

window.game = new Phaser.Game(config)
