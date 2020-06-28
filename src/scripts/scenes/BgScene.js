import 'phaser'

export default class BgScene extends Phaser.Scene {
  constructor(){
    super('BgScene')
  }

  create() {
    this.add.image(0, 0,'fossil-cave').setOrigin(0).setScale(0.7)
  }

}


