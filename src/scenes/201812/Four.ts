import { BASE_URL, PATH_URL, TITLES } from '@/const'
export default class extends Phaser.Scene {
  constructor() {
    super('FourScene201812')
  }

  init() {
    document.querySelector('.title').innerHTML = TITLES['201812'][3].text
    this.scale.setGameSize(800, 600)
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/201812')
    this.load.image('background', 'images/background-desert.png')
    this.load.image('cactusTop', 'images/cactus-top.png')
    this.load.image('cactusBase', 'images/cactus-base.png')
    this.load.atlas(
      'tiles',
      'images/platform-desert.png',
      'json/platform-desert.json'
    )
  }

  create() {
    this.add.image(400, 100, 'background')
    this.add.tileSprite(400, 562, 800, 128, 'tiles', '2')

    this.add.text(10, 10, '拖拉调整仙人掌调试', { fill: '#000' })
    this.createExpandingSprite(220, 498, 110)
    this.createExpandingSprite(400, 498)
    this.createExpandingSprite(580, 498, 260)
  }

  createExpandingSprite(x: any, baseY: any, startHeight = 48) {
    let base = this.add
      .tileSprite(x, baseY, 64, startHeight, 'cactusBase')
      .setOrigin(0.5, 1)
    let top = this.add
      .image(x, baseY - startHeight, 'cactusTop')
      .setOrigin(0.5, 1)
    top.setInteractive({ draggable: true, useHandCursor: true })
    top.on('drag', function(pointer: any, dragX: any, dragY: any) {
      console.log('dragY', dragY)
      if (dragY <= baseY) {
        this.y = dragY
        let height = baseY - dragY

        base.setSize(64, height)
      }
    })
  }
}
