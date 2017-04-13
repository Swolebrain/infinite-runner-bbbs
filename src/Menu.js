function Menu(keyboard){
  this.keyboard = keyboard;
  this.labels = [
    "Press Space to Start"
  ];
  this.menuIndex = 0;
  this.started = false;
}

Menu.prototype.update = function(dx){
  if (this.keyboard.space) this.started = true;
}

Menu.prototype.render = function(ctx){
  ctx.font="60px Georgia";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  this.labels.forEach(function(label, index){
    ctx.fillText(label, window.innerWidth/2, window.innerHeight/2 + index*70);
  });
}
