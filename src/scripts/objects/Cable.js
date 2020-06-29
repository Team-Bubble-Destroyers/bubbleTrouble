import 'phaser'


export default class Cable extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, spriteKey, facingLeft){
    super(scene, x, y, spriteKey)

    this.scene = scene;
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.scene.physics.world.enable(this);
    this.setSize(7, 401, this)
    this.body.setAllowGravity(false)
    this.speed = Phaser.Math.GetSpeed(375, 1)
  
  }

  update(time, delta){
      // this.setVelocityY(-200)
    const moveDistance = this.speed * delta
    this.y -= moveDistance;

 
    }

  }
