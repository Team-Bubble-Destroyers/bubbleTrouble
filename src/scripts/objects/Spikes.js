import 'phaser'

export default class Spikes extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey){
    super(scene, x, y, spriteKey)
    this.scene = scene;
    this.scene.physics.world.enable(this)
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.setAllowGravity(false);
  }
}