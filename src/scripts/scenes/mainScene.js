import Ball from '../objects/ball'
import FpsText from '../objects/fpsText'
import Ground from '../objects/ground';

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    /**
     * Delete all the code below to start a fresh scene
     */



    // << Create Objects here >>

    this.ground = new Ground(this, this.cameras.main.width/2, 680, 'ground')
    this.ground.displayWidth = this.cameras.main.width;
    
    // this.groundGroup = this.physics.add.staticGroup({classType: Ground})
    // this.createGround(160, 680);
    // this.createGround(480, 680);


    // Grouping balls
    this.ballGroup = this.physics.add.group({
      classType: Ball,
      runChildUpdate: true,
      allowGravity: true,
      // collideWorldBounds: true,
      // bounceX: 1,
      bounceY: 1
    })

    // A initial ball
    this.initBall = new Ball(this, this.cameras.main.width / 2, 300, false, false, 1).setScale(.5)
      .on('pointerdown', () => {this.splitBall(this.initBall)});
    // change setCircle parameters to be half the width of the circle png img when changed. (the value is the diam of the circle)
    this.ballGroup.add(this.initBall);

    this.fpsText = new FpsText(this)


    // << Create Collision for objects here >>
    this.physics.add.collider(
      this.ground,
      this.ballGroup,
      );

    // this.physics.add.overlap(
    //   this.ballGroup,
    //   this.ground,
    //   (ele) => {
    //     ele.body.velocityY = -ele.body.velocityY
    //     console.log(ele);
    //   },
    //   null,
    //   this
    //   )



    // async/await example
    const pause = ms => {
      return new Promise(resolve => {
        window.setTimeout(() => {
          resolve()
        }, ms)
      })
    }
    const asyncFunction = async () => {
      console.log('Before Pause')
      await pause(4000) // 4 seconds pause
      console.log('After Pause')
    }
    asyncFunction()

    // Spread operator test
    const numbers = [0, 1, 2, 3]
    const moreNumbers = [...numbers, 4, 5]
    console.log(`All numbers: ` + moreNumbers)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(1, 0)
  }

  createGround(x, y) {
    this.groundGroup.create(x, y, 'ground');
  }

  splitBall(ball) {
    ball.disableBody(true, true)
    if (ball.ballSize <= 3) {
      const rightball = new Ball(this, ball.x, ball.y, false, ball, ball.ballSize+1).setCircle(ball.body.radius).setScale(ball.scale*.75).on('pointerdown', () => {this.splitBall(rightball)});
      const leftball = new Ball(this, ball.x, ball.y, true, ball, ball.ballSize+1).setCircle(ball.body.radius).setScale(ball.scale*.75).on('pointerdown', () => {this.splitBall(leftball)});

      this.ballGroup.add(rightball);
      this.ballGroup.add(leftball);
      leftball.left = true;
   }
  }

  // hitGround() {
  //   this.body.velocity.y = -(this.ballHeights[this.ballSize])
  // }

  update(time, delta) {
    this.fpsText.update()

  }
}


// this.hitGround = function() {
//   this.body.velocity.y = -(Math.sqrt(2*this.body.gravity.y*(game.world.height/this.template.preferredHeightRatio)));
//   }