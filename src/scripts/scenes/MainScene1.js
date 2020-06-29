import 'phaser'



export default class MainScene extends Phaser.Scene {
 
  constructor(){
    super({key:'MainScene1'})
  }

  create() {
    this.scene.launch('BgScene')
    this.scene.launch('FgScene')


  }



}