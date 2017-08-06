function Background(){
  this.image = document.getElementById("bg");
  this.layer = 0;
  this.type = "bg";
  this.x = 0;

  this.update = function(dx){
    var w = (window.innerHeight / this.image.height) * this.image.width;
    if (this.x <= -w) this.x = 0;
    this.x = this.x - 200*dx;
  }
  this.render = function(ctx){
    var w = (window.innerHeight / this.image.height) * this.image.width;
    ctx.drawImage(this.image, this.x, 0, w, window.innerHeight);
    ctx.drawImage(this.image, this.x+w, 0, w, window.innerHeight);
    ctx.drawImage(this.image, this.x+2*w, 0, w, window.innerHeight);
  }
}

var bg = new Background();
entityRegistry.addEntity(bg);
