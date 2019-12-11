// import { BASE_URL, PATH_URL } from '@/const'
// export default class extends Phaser.Scene {
//   constructor() {
//     super({
//       key: 'BackScene',
//       active: true
//     })
//   }

//   preload() {
//     this.load.setBaseURL(BASE_URL)
//     this.load.setPath(PATH_URL + '/common')

//     // 加载图标
//     this.load.image('back', 'images/back.png')
//   }

//   create() {
//     const backSprite = this.add
//       .sprite(0, 0, 'back')
//       .setOrigin(0)
//       .setScale(0.5)
//       .setInteractive()
//     backSprite.on('pointerdown', () => {
//       // this.scene.start('ListScene')
//       this.scene.launch('ListScene')
//       this.scene.
//       // this.scene.switch('ListScene')
//     })
//   }
// }
