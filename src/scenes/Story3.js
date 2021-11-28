export class Story3 extends Phaser.Scene {
   constructor() {
      super('Story3');
   }

   preload() {
      
   }

   create() {
      var { width, height } = this.sys.game.canvas;
      
      this.add.text(50, 50, "Dẫn truyện 3...", {font: "50px Arial"});
      this.add.text(width - 350, height - 100, "Ấn space để bỏ qua cốt truyện...", {font: "20px Arial"});
      this.spacebar = this.input.keyboard.addKey('space');
   }
   
   update() {
      if (this.spacebar.isDown) {
         this.scene.start("Lv3");
      }

      this.input.on('pointerup', function() {
         this.scene.start("Lv3");
      }, this)
   }
}