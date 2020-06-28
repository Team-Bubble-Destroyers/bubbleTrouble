import Player from '../objects/Player'

export default class FgScene extends Phaser.Scene {
  constructor() {
    super("FgScene")
  }


  create(){
    this.player = new Player(this, 650, 700, 'dude-walk').setScale(4.3)
    this.player.input.hitArea.setTo(20,20,25,30)
    // this.createAnimations()
  }

  update(time, delta){

  }

  
}