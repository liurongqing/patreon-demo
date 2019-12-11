import { BASE_URL, PATH_URL, TITLES } from '@/const'

class PointerMonitor {
  scene: any
  pointer: any
  swipeThreshold: any
  constructor(
    scene: any,
    pointer: any,
    swipeThreshold = 100,
    swipeDuration = 500
  ) {
    // super()
    this.scene = scene
    this.pointer = pointer
    this.swipeThreshold = swipeThreshold
    // this.swipeAxisThreshold = swipeThreshold * 0.8;
  }
}
export default class extends Phaser.Scene {
  b = 1
  constructor() {
    super('FiveScene201812')
  }

  init() {
    console.log('this.b', this.b)
    document.querySelector('.title').innerHTML = TITLES['201812'][4].text
    this.scale.setGameSize(800, 600)
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/201812')
    this.load.image('clouds', 'images/clouds.png')
    this.load.image('arrow', 'images/arrow-up.png')
    this.load.atlas('jelly', 'images/jellies.png', 'json/jellies.json')
  }

  create() {
    this.add.image(400, 300, 'clouds')
    if (this.game.device.input.touch) {
      let intro = this.add
        .text(400, 300, 'Touch to Start', {
          font: '64px Courier',
          fill: '#fff'
        })
        .setShadow(1, 1)
        .setOrigin(0.5)
      this.input.once(
        'pointerdown',
        function(pointer: any) {
          intro.destroy()
          // this.createJelly(pointer)
        },
        this
      )
    } else {
      console.log('this.input.activePointer', this.input.activePointer)
      // this.createJelly(this.input.activePointer)
    }
  }
  createJelly(pointer: any) {
    const jelly = this.physics.add
      .image(400, 300, 'jelly', 'NoShadow/Jelly5')
      .setScale(0.5)

    jelly.setBounce(1, 1)
    jelly.setCollideWorldBounds(true)
    jelly.setDamping(true)
    jelly.setDrag(0.99)
    jelly.setMaxVelocity(1500)

    this.input.on(
      'swipeleft',
      function(pointer: any) {
        console.log('swipeleft')
      },
      this
    )
  }
}
