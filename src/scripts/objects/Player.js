import 'phaser'

export default class Player extends Phaser.Physics.Arcade.Sprite{
  constructor (scene, x, y, spriteKey){
    super(scene, x, y, spriteKey)
    scene = scene
    scene.add.existing(this)
    scene.physics.world.enable(this)

    this.setCollideWorldBounds(true)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-400)
      })
     
      this.setPosition(200,200)
  }

  update(){

  }

  // updateMovements()
}