export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, left = false, prevBall = null, ballSize = 1) {
    super(scene, x, y, 'ball', left, prevBall, ballSize)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.ballSize = ballSize;

    // if (left) this.setVelocityX(-100);
    // else this.setVelocityX(100);

    // if (prevBall) this.setVelocityY(-300)

    this.speed = Phaser.Math.GetSpeed(200, 1);

    this.setCircle(111);

    this.ballHeights = {
      1: -500,
      2: -450,
      3: -400,
      4: -350
    }

    this.setCollideWorldBounds(true)
      .setBounce(1.0)
      .setInteractive()
      .on('pointerdown', () => {
        console.log(this)
        // console.log(this.scale);
      })
  }

  updateBounce () {
    if (this.body.touching.down) {
      this.body.velocity.y = this.ballHeights[this.ballSize]
    }
  }

  update(time, delta) {
    this.updateBounce();

    const moveDistance = this.speed * delta;
    if (this.x + this.body.halfWidth >= 1280 || this.x - this.body.halfWidth <= 0) {
      this.left = !this.left
    }

    if (this.left) {
      this.x -= moveDistance;
    }
    else {this.x += moveDistance}
  }
}