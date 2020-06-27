import Ball from '../objects/ball'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    /**
     * Delete all the code below to start a fresh scene
     */
    this.balls = this.physics.add.group({
      classType: Ball,
      runChildUpdate: true,
      allowGravity: true,
    })

    // first Initial ball
    const initBall = new Ball(this, this.cameras.main.width / 2, 0).setScale(.5).setCircle(111)
      .on('pointerdown', () => {this.splitBall(initBall)});
    // change setCircle parameters to be half the width of the circle png img when changed. (the value is the radius of the circle)

    this.fpsText = new FpsText(this)

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

  splitBall(ball) {
    ball.disableBody(true, true)
    const rightball = new Ball(this, ball.x, ball.y, false).setScale(ball.scale/2).setCircle(ball.body.radius).on('pointerdown', () => {this.splitBall(rightball)});
    const leftball = new Ball(this, ball.x, ball.y, true).setScale(ball.scale/2).setCircle(ball.body.radius).on('pointerdown', () => {this.splitBall(leftball)});
  }

  update() {
    this.fpsText.update()
  }
}
