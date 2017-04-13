function Keyboard(){
  this.up = false;
  this.down = false;
  this.left = false;
  this.right = false;
  this.space = false;
  this.enter = false;
  var self = this;
  window.addEventListener("keydown", function(e){
    if (e.keyCode === 37) self.left = true;
    if (e.keyCode === 38) self.up = true;
    if (e.keyCode === 39) self.right = true;
    if (e.keyCode === 40) self.down = true;
    if (e.keyCode === 13) self.enter = true;
    if (e.keyCode === 32) self.space = true;
  });

  window.addEventListener("keyup", function(e){
    if (e.keyCode === 37) self.left = false;
    if (e.keyCode === 38) self.up = false;
    if (e.keyCode === 39) self.right = false;
    if (e.keyCode === 40) self.down = false;
    if (e.keyCode === 13) self.enter = false;
    if (e.keyCode === 32) self.space = false;
  })
}
