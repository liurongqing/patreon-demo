import { BASE_URL, PATH_URL, TITLES } from '@/const'

import { getBetweenMonth } from '@/utils'

export default class ListScene extends Phaser.Scene {
  months: any
  textData: any
  currentMenu: any
  groups: any
  textGroups: any
  constructor() {
    super('ListScene')
  }

  init() {
    this.months = getBetweenMonth()
    this.currentMenu = '201812'
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL + '/common')
    this.load.image('slide_menu', 'images/slide_menu.png')
  }

  create() {
    this.createMenu()
    this.createText()
  }

  createMenu() {
    this.groups = this.add.group({
      key: 'slide_menu',
      repeat: this.months.length - 1,
      frame: 0,
      name: '234',
      setXY: {
        x: 160,
        y: 80,
        stepY: 70
      },
      setScale: { x: 0.5, y: 0.5 }
    } as any)

    let text: any,
      index = this.months.length - 1
    Phaser.Actions.Call(
      this.groups.getChildren(),
      function(group: any) {
        text = this.add.text(0, 0, this.months[index], {
          fontSize: '30px',
          color: '#000000'
        })
        Phaser.Display.Align.In.Center(text, group)
        group.setName(this.months[index])
        group.setInteractive()
        group.on('pointerdown', function() {
          this.scene.currentMenu = this.name
          this.scene.resetMenu()
          this.scene.createText()
        })
        if (this.currentMenu === group.name) {
          group.setTint(0xff0000)
        }
        index--
      },
      this
    )
  }

  createText() {
    if (this.textGroups && this.textGroups.name !== this.currentMenu) {
      this.textGroups.destroy(true)
    }

    if (!TITLES[this.currentMenu]) return
    this.textGroups = this.add.group()
    this.textGroups.name = this.currentMenu
    let text: any
    for (let i = 0; i < TITLES[this.currentMenu].length; i++) {
      text = this.add.text(0, i * 50, TITLES[this.currentMenu][i].text, {
        fontSize: '20px',
        color: '#00ff00'
      })
      text.setName(TITLES[this.currentMenu][i].scene)
      text.setInteractive()
      text.on('pointerdown', function() {
        this.scene.scene.start(this.name)
      })

      this.textGroups.add(text)
    }

    Phaser.Actions.GridAlign(this.textGroups.getChildren(), {
      width: 1,
      cellWidth: 150,
      cellHeight: 60,
      x: 350,
      y: 86
    })
  }

  resetMenu() {
    Phaser.Actions.Call(
      this.groups.getChildren(),
      function(group: any) {
        if (this.currentMenu === group.name) {
          group.setTint(0xff0000)
        } else {
          group.clearTint()
        }
      },
      this
    )
  }
}
