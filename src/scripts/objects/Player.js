import 'phaser'

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {

    super(scene, x, y, spriteKey)
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
    // this.body.setAllowGravity(true)
    this.facingLeft = false
    this.setCollideWorldBounds(true)

    this.throwDelay = 2400

    // this.lastThrown = 0
    
  }

  update(cursors) {
    this.updateMovement(cursors)
  }

  updateMovement(cursors) {
    if (cursors.left.isDown) {
      if (!this.facingLeft) {
        this.flipX = !this.flipX
        this.facingLeft = true
      }
      this.setVelocityX(-260)
      this.play('walk', true)
    } else if (cursors.right.isDown) {
      if (this.facingLeft) {
        this.flipX = !this.flipX
        this.facingLeft = false
      }
      this.setVelocityX(260)
      this.play('walk', true)
    } else if (cursors.space.isDown) {
      this.play('throw', true)
    } else {
      this.setVelocityX(0)
      this.play('idle', true)
    }
  }
}


