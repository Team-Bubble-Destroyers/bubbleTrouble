import Player from '../objects/Player'

export default class FgScene extends Phaser.Scene {
  constructor() {
    super("FgScene")
  }


  create(){
    this.player = new Player(this, 650, 700, 'player').setScale(4.3)

    this.cursors = this.input.keyboard.createCursorKeys()

    this.createAnimations()
  }

  update(time, delta){
    this.player.update(this.cursors)
  }

  createAnimations(){
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers('player', {start: 1, end: 6}),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: "idle",
      frames: [{key: "player", frame: 3}],
      frameRate:10
    })
  }
  
}