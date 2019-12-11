import { BASE_URL, PATH_URL,TITLES } from '@/const'
export default class extends Phaser.Scene {
  constructor() {
    super('OneScene201812')
  }

  init() {
    document.querySelector('.title').innerHTML = TITLES['201812'][0].text
    this.scale.setGameSize(800, 600)
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/201812')

    // 加载地图集
    this.load.atlas('tiles', 'images/platformer.png', 'json/platformer.json')
  }

  create() {
    // 地图集精灵， x、y、width、height
    this.add.tileSprite(400, 536, 800, 128, 'tiles', '2')

    // 添加一棵树
    const tree = this.add.image(200, 472, 'tiles', 'tree1').setOrigin(0.5, 1)

    // 可拖、有手形、识别像素
    tree.setInteractive({
      draggable: true,
      useHandCursor: true,
      pixelPerfect: true
    })

    // 拖动树
    tree.on('drag', function(pointer: any, dragX: any) {
      this.x = dragX
    })

    // 平台图标
    const platform = this.add.image(600, 200, 'tiles', 'platform1')
    platform.setInteractive({
      draggable: true,
      useHandCursor: true,
      pixelPerfect: true
    })

    // 拖动平台图标
    platform.on('drag', function(pointer: any, dragX: any, dragY: any) {
      if (dragY > 60 && dragY < 420) {
        this.y = dragY
      }
    })
  }
}
