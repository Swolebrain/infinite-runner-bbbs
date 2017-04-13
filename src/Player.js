function Player(x, y, keyboard){
  this.x = x;
  this.y = y;
  this.keyboard = keyboard;
  this.layer = 10;
  this.velY = 0;
  this.collision = {};
  this.type = "player";
  this.width = 25;
  this.height = 25;
  this.ticks = 0;
}

Player.prototype.update = function(dx){
  this.ticks++;

  if (this.collision.direction != "down"){
    this.y += this.velY;
  }
  else{
    this.velY = 0;
    this.y += this.collision.distance;
    this.collision.distance = 0;
    if (this.keyboard.space){
      console.log("here");
      this.velY = -10;
      this.collision = {};
    }
  }
  this.velY += 30*dx;
}

Player.prototype.render = function(ctx){
  ctx.fillStyle = "#000000";
  ctx.fillRect(this.x-this.width, this.y-this.height, 50, 50);
}

var player = new Player(100, 200, keyboard);
entityRegistry.addEntity(player);
