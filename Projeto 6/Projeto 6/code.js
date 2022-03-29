var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var lazer1=createSprite(300,10,200,5);
lazer1.shapeColor="red";

var lazer2=createSprite(100,345,200,5);
lazer2.shapeColor="red";

var diamond=createSprite(390,10,20,20);
diamond.shapeColor="blue";

var player=createSprite(390,390,25,25);
player.shapeColor="black";

var gameState="serve";

function draw() {
background("grey");

if(gameState==="serve"){
  textSize(20);
  fill("black");
  text("Press space to start",110,180);
   }

if(keyDown("space")){
   lazer1.velocityY=-3;
  lazer2.velocityY=-3; 
  }

if(keyDown("space") && gameState==="serve"){
    gameState="play";
}
 
if(keyDown("up") && gameState==="play"){
  player.setVelocity(0, -4);
 }
 
if(keyDown("down") && gameState==="play"){
   player.setVelocity(0, 3);
 }
 
if(keyDown("left") && gameState==="play"){
   player.setVelocity(-3, 0);
 }
  
if(keyDown("right") && gameState==="play"){
   player.setVelocity(3, 0);
 }
  
if(player.isTouching(lazer1) || player.isTouching(lazer2)){
   textSize(24);
   textFont("Algerian");
   fill("blue");
   text("Ladrão Capturado", 100,200);
   textFont("times new roman");
   text("Aperte 'r' para recomeçar",110,240);
   lazer1.setVelocity(0, 0);
   lazer2.setVelocity(0, 0);
   player.setVelocity(0, 0);
  
   
 }
 
 if(player.isTouching(diamond)){
   textSize(24);
   textFont("algerian");
   fill("red");
   text("VOC~E PEGOU O DIAMENTE!!!", 70,200);
   textFont("times new roman");
   text("Aperte 'r' para recomeçar", 110,240);
   lazer1.setVelocity(0, 0);
   lazer2.setVelocity(0, 0);
   player.setVelocity(0, 0);
   
 }
 


 
 //reset();
 if(keyDown("r")){
   reset();
 gameState="serve";
 }

    
 

  

  createEdgeSprites();
  lazer1.bounceOff(topEdge);
  lazer1.bounceOff(bottomEdge);
  lazer2.bounceOff(topEdge);
  lazer2.bounceOff(bottomEdge);
  player.bounceOff(edges);
  
  drawSprites();
}
function reset(){
 player.x = 200;
 player.y = 200;
 player.velocityX = 0;
 player.velocityY = 0;
 player.x=390;
 player.y=390;
 lazer1.x=300;
 lazer1.y=10;
 lazer2.x=100;
 lazer2.y=345;
} 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
