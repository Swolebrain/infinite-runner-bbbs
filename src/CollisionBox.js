function CollisionBox(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.type = "environment";
  this.collisionClass = "environment";
  this.layer = 1;
}

CollisionBox.prototype.update = function(dx){

}

CollisionBox.prototype.render = function(ctx){
  ctx.fillStyle = "#333333";
  ctx.fillRect(this.x-this.width, this.y-this.height, this.width*2, this.height*2);
}

var collisionBox = new CollisionBox(window.innerWidth/2, window.innerHeight, window.innerWidth/2, window.innerHeight*0.1);
entityRegistry.addEntity(collisionBox);
