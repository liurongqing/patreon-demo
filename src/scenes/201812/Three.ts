import { BASE_URL, PATH_URL, TITLES } from '@/const'
export default class extends Phaser.Scene {
  constructor() {
    super('ThreeScene201812')
  }

  init() {
    document.querySelector('.title').innerHTML = TITLES['201812'][2].text
    this.scale.setGameSize(800, 600)
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/201812')
    this.load.image('background', 'images/background-sky.png')
    this.load.atlas(
      'tiles',
      'images/platform-snow.png',
      'json/platform-snow.json'
    )
    this.load.json('map', 'json/snow-map.json')
  }

  create() {
    this.add
      .image(0, 0, 'background')
      .setOrigin(0)
      .setScrollFactor(0.6, 0.4)

    const camera = this.cameras.main
    const map = this.cache.json.get('map')
    console.log(map)
    camera.setBounds(0, 0, map.width, map.height).centerOn(1000, 600)
    for (let data of map.tiles.values()) {
      // console.log(data.x, data.y, data.key, data.frame)
      const tile = this.add.image(data.x, data.y, data.key, data.frame)
      tile.flipX = data.flipX
    }
    const maxSpeed = 16
    this.input.on(
      'pointermove',
      function(pointer: any) {
        if (pointer.isDown) {
          camera.scrollX += Phaser.Math.Clamp(
            pointer.velocity.x,
            -maxSpeed,
            maxSpeed
          )
          camera.scrollY += Phaser.Math.Clamp(
            pointer.velocity.y,
            -maxSpeed,
            maxSpeed
          )
        }
      },
      this
    )

    this.add
      .text(10, 10, '拖动Camera', { fill: '#fff' })
      .setShadow(1, 1)
      .setScrollFactor(0)
  }
}
