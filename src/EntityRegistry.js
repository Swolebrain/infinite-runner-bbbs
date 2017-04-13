/*
  Entities should have a type (string), a layer (int),
  and a collisionClass ("enemy", or "environment")
*/

function EntityRegistry(){
  this.entities = [];
  this.player = null;
}

EntityRegistry.prototype.addEntity = function(e){
  this.entities.push(e);
  if (e.type === "player"){
    this.player = e;
    console.log("added player to registry");
  }
}

EntityRegistry.prototype.removeEntity = function(e){
  var idx = this.entities.indexOf(e);
  this.entities.splice(idx, 1);
}

EntityRegistry.prototype.update = function(dx){
  this.detectCollisions();
  this.entities.forEach(function(entity){
    entity.update(dx);
  });
}

EntityRegistry.prototype.render = function(ctx){
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  var ctr = 0;
  for (var i = 0; i <= 10 && ctr < this.entities.length; i++){
    this.entities.forEach(function(entity){
      if (entity.layer == i){
        entity.render(ctx);
        ctr++;
      }
    });
  }
}

EntityRegistry.prototype.detectCollisions = function(){
  for (var i = 0; i < this.entities.length; i++){
    var entity = this.entities[i];
    if (this.player === entity){
      if (this.player.y < 0) this.player.collision = {direction: "up"};
      if (this.player.y > window.innerHeight) this.player.collision = {direction: "down"};
      if (this.player.collision.direction) return;
    }
    if (!entity.collisionClass ) continue;
    var px = this.player.x;
    var py = this.player.y;
    var pw = this.player.width;
    var ph = this.player.height;

    var ex = entity.x;
    var ey = entity.y;
    var ew = entity.width;
    var eh = entity.height;

    var p = this.player;

    if (px-pw+p.velX > ex-ew && px-pw+p.velX < ex+ew   &&   py-ph > ey-eh && py-ph < ey+eh ||
    px-pw+p.velX > ex-ew && px-pw+p.velX < ex+ew   &&   py+ph > ey-eh && py+ph < ey+eh){
      // console.log("collision!");
      if (p.velX < 0) p.collision = {direction: "left", entity: entity};
      else p.collision = {direction: "right", entity: entity};
      return;
    }

    if (px > ex-ew && px < ex+ew   &&
      (py-ph+p.velY > ey-eh && py-ph+p.velY < ey+eh || py+ph+p.velY > ey-eh && py+ph+p.velY < ey+eh)){
      // console.log("collision!");
      if (p.velY < 0) p.collision = {direction: "up", entity: entity, distance: (py-ph) - (ey+eh)};
      else p.collision = {direction: "down", entity: entity, distance: (ey-eh) - (py+ph)};
      return;
    }

  }
  this.player.collision = {};
}
