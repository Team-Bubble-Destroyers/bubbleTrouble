import 'phaser'

export default class Cable extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, spriteKey, facingLeft){
    super(scene, x, y, spriteKey)
    scene.physics.world.enable(this)
    scene.add.existing(this)
    this.setSize(7, 401, true)
    this.speed = Phaser.Math.GetSpeed(375,1)
    this.body.setAllowGravity(false)
    // this.reset(x,y,facingLeft)
  }

  update(time,delta){
    if(this.body.touching.up){
      console.log('cable destroy')
      this.destroy()
      
    }

    const moveDistance = this.speed * delta
    this.y -= moveDistance

      // if(this.lifespan <= 0){
      //   this.setActive(false)
      //   this.setVisible(false)
      // }
  }
  
}