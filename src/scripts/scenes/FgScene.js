import Player from '../objects/Player'
import FpsText from '../objects/fpsText'
import Cable from '../objects/Cable'
import Spikes from '../objects/Spikes'
export default class FgScene extends Phaser.Scene {
  fpsText
  constructor() {
    super('FgScene')

    this.throwCable = this.throwCable.bind(this)
    this.hit = this.hit.bind(this)
  }

  create() {
    this.fpsText = new FpsText(this)
    this.player = new Player(this, 640, 720, 'player').setScale(4.3)
    this.player.setSize(18, 27, true)
    this.cursors = this.input.keyboard.createCursorKeys()
    
    this.createCollisions()
    this.createAnimations()
    this.createGroups()
  }

  update(time, delta, cursors) {
    this.fpsText.update()
    
    this.player.update(this.cursors)

    if(!this.cable && this.cursors.space.isDown){
     this.throwCable()
    }
  }

  createCeiling(x, y) {
    this.spikeGroup.create(x, y, 'spikes').setScale(2).setSize(922,15)
    
  }

  createGroups() {
    this.spikeGroup = this.physics.add.staticGroup({ classType: Spikes, allowGravity: false})
    this.createCeiling(0,0)
    this.createCeiling(1844,0)
    // this.cables = this.physics.add.group({
    //   classType: Cable,
    //   maxSize: 1,
    //   runChildUpdate: true,
    //   allowGravity: false,
    // })
  }

  createAnimations() {
    this.anims.create({
      key: 'throw',
      frames: this.anims.generateFrameNumbers('player', { start: 6, end: 10 }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
      frameRate: 8,
      repeat: -1,
    })
    this.anims.create({
      key: 'idle',
      frames: [{ key: 'player', frame: 5 }],
      frameRate: 10,
    })
  }

  hit(ball, cable) {
    cable.setActive(false), cable.setVisible(false)
  }

  throwCable() {
    const offsetX = 2
    // let cable = this.cables.getFirstDead()

    if (!this.cable) {
      const cableX = this.player.x + (this.player.facingLeft ? -offsetX : offsetX)
      const cableY = this.player.y + 600

      this.cable = new Cable(this, cableX, cableY, 'cable', this.player.facingLeft).setScale(2)
      // this.cables.add(cable)
    }
  
  }
  destroyCable(){
    this.cable.destroy()
  }

  createCollisions(){
  //   this.physics.add.collider(this.player, this.spikeGroup)
    this.physics.add.collider(this.cable, this.spikeGroup)
  //   this.physics.add.collider(this.ball,)
  }
}
// update(time, cursors, throwCable) {
//   this.updateMovement(cursors)
//   if (cursors.space.isDown && time > this.lastThrown){
//     throwCable()
//     this.lastThrown = time + this.throwDelay
//   } 
// }