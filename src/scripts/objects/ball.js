import splitBall from '../scenes/mainScene'

export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, left = false) {
    super(scene, x, y, 'ball')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    if (left) this.setVelocityX(-100);
    else this.setVelocityX(100);

    this.setCollideWorldBounds(true)
      .setBounce(1.0)
      .setInteractive()
      .on('pointerdown', () => {
        // this.setVelocityY(-400)
        console.log(this)
        // console.log(this.scale);
      })
  }


}
