import 'phaser'

export default class BgScene extends Phaser.Scene {
  constructor(){
    super('BgScene')
  }

  preload(){
    this.load.image('fossil-cave', 'assets/background/fossil-cave.png')
  }

  create() {
    this.add.image(922, 500,'fossil-cave')
  }



}


