import 'phaser'


const groundHeight = 

export default class Cable extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, spriteKey, facingLeft){
    super(scene, x, y, spriteKey)

    console.log(this);

    this.scene = scene;
    this.scene.add.existing(this)
    // this.scene.physics.add.existing(this)
    this.scene.physics.world.enable(this);
    this.setSize(7, 401, this)
    this.body.setAllowGravity(false)
    this.speed = Phaser.Math.GetSpeed(375, 1)

    // this.setVelocityY(-200);

    // this.reset(x,y,facingLeft)
  }

  update(time, delta){
    // console.log('delta:', delta);
    // const moveDistance = this.speed * delta
    // this.y -= moveDistance;

    if(this.body.touching.up){
      console.log('cable destroy')
      this.destroy()
    }

    // if(this.lifespan <= 0){
    //   this.setActive(false)
    //   this.setVisible(false)
    // }
  }
}