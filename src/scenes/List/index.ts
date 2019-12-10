import { BASE_URL, PATH_URL } from '@/const'
export default class ListScene extends Phaser.Scene {
  constructor() {
    super('ListScene')
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/list')
    this.load.image('slide_menu', 'images/slide_menu.png')
  }

  create() {
    const group = this.add.group({
      key: 'slide_menu',
      repeat: 3,
      frame: 0,
      setXY: {
        x: 100,
        y: 100,
        stepY: 50
      }
    } as any)

    const groups = group.getChildren()
    for (let value of groups) {
      // console.log(value)
      value.setDisplaySize(100, 50)
    }

    // Phaser.Actions.GridAlign(group.getChildren(), {
    //   width: 119,
    //   cellWidth: 58,
    //   cellHeight: 48,
    //   x: 132,
    //   y: 148
    // })

    console.log(group)
  }
}
