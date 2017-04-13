

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var keyboard = new Keyboard();
var menu = new Menu(keyboard);
var entityRegistry = new EntityRegistry();
var gameState = "menu";

sizeCanvas();
window.onresize = sizeCanvas;

var loopStart = new Date().getTime();
gameLoop();
function gameLoop(){
  var elapsed = new Date().getTime() - loopStart;
  var dx = elapsed/1000;
  if ( gameState === "menu"){
    menu.update(dx);
    menu.render(ctx);
    if (menu.started) gameState = "running";
  }
  else if (gameState === "running"){
    entityRegistry.update(dx);
    entityRegistry.render(ctx);
  }

  loopStart = new Date().getTime();
  window.requestAnimationFrame(gameLoop);
}

function sizeCanvas(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}
