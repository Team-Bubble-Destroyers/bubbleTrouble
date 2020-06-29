import 'phaser';

export default class Ground extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey); 

    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setAllowGravity(false);
    this.setImmovable(true);
    // this.setCollideWorldBounds(true);
  }
}