function BoxEnemy(x, y, speed){
  this.x = x;
  this.y = y;
  this.type="enemy";
  this.collisionClass = "enemy";
  this.layer = 3;
  this.width = 50;
  this.height = 50;
  this.speed = speed;
  this.update = function(dx){
    this.x = this.x - dx*this.speed;
    if (this.x < - this.width * 2){
      entityRegistry.removeEntity(this);
    }
  }
  this.render = function(ctx){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x-this.width, this.y-this.height,
      this.width*2, this.height*2);
  }
}

setInterval(function(){
  var box1 = new BoxEnemy(window.innerWidth, window.innerHeight*0.9-50, 300);
  entityRegistry.addEntity(box1);
}, 1500);
