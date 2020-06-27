import 'phaser'
import FpsText from '../objects/fpsText'


export default class MainScene extends Phaser.Scene {
  fpsText
  constructor(){
    super({key:'MainScene1'})
  }

  create() {
    this.scene.launch('BgScene')
    this.scene.launch('FgScene')
    this.fpsText = new FpsText(this)

  }

  update(){
 this.fpsText.update()

  }

}