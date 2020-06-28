import 'phaser'

export default class Cable extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, spriteKey, facingLeft){
    super(scene, x, y, spriteKey)
    this.scene = scene;
    this.scene.physics.world.enable(this)
    this.scene.add.existing(this)
    this.setSize(7, 401, true)
    this.speed = Phaser.Math.GetSpeed(375,1)
    this.body.setAllowGravity(false)

    this.reset(x,y,facingLeft)
  }

  update(time,delta){
    this.lifespan -= delta
    const moveDistance = this.speed * delta
    this.y -= moveDistance

      if(this.lifespan <= 0){
        this.setActive(false)
        this.setVisible(false)
      }
  }

  reset(x, y, facingLeft){
    this.setActive(true)
    this.setVisible(true)
    this.lifespan = 2400
    this.setPosition(x,y)
  }
}