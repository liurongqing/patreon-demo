import { BASE_URL, PATH_URL, TITLES } from '@/const'
export default class extends Phaser.Scene {
  constructor() {
    super('TwoScene201812')
  }

  init() {
    document.querySelector('.title').innerHTML = TITLES['201812'][1].text
    this.scale.setGameSize(800, 600)
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/201812')

    this.load.image('lava', 'images/lava3.png')
  }

  create() {
    const tile = this.add.tileSprite(400, 300, 800, 600, 'lava')
    tile.setInteractive({ draggable: true })
    let prevX = 0,
      prevY = 0

    // 开始拖动
    tile.on('dragstart', function(pointer: any) {
      prevX = pointer.x
      prevY = pointer.y
      // console.log('prevX %s, prevY %s', prevX, prevY)
    })

    // 拖放地图精灵
    tile.on('drag', function(pointer: any) {
      let velocityX = pointer.x - prevX
      let velocityY = pointer.y - prevY
      // console.log('velocityX %s, velocityY %s', velocityX, velocityY)
      this.tilePositionX -= velocityX * (1 / this.tileScaleX)
      this.tilePositionY -= velocityY * (1 / this.tileScaleY)
      prevX = pointer.x
      prevY = pointer.y
    })

    // 鼠标中间滚动控制缩放
    this.sys.canvas.addEventListener('wheel', event => {
      if (event.deltaY < 0 && tile.tileScaleX > 0.4) {
        //  Up
        tile.tileScaleX -= 0.1
        tile.tileScaleY -= 0.1
      } else if (event.deltaY > 0 && tile.tileScaleX <= 2.0) {
        //  Down
        tile.tileScaleX += 0.1
        tile.tileScaleY += 0.1
      }
    })

    this.add
      .text(10, 10, '拖放地图精灵、滚动鼠标缩放精灵', { fill: '#fff' })
      .setShadow(1, 1)
  }
}
