import 'phaser'

export default class MainScene extends Phaser.Scene {
  fpsText
  constructor(){
    super({key:'MainScene1'})
  }

  create() {
    this.scene.launch('BgScene')
    this.scene.start('FgScene')
    this.fpsText = new FpsText(this)

  }

  update(){

  }

}