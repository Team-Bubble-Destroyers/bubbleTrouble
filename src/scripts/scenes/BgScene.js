import 'phaser'

export default class BgScene extends Phaser.Scene {
  constructor(){
    super('BgScene')
  }

  preload(){
    this.load.image('fossil-cave', 'assets/backgrounds/fossil-cave.png')
  }

  create() {
    this.add.image(0, 0,'fossil-cave').setOrigin(0).setScale(0.7)
  }

}


