var ship;
var sea;
function preload(){
  movingsea=loadImage("sea.png")
  movingship=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage("blueseaa",movingsea)
  sea.scale=0.3;
  ship=createSprite(130,200,30,30)
  ship.addAnimation("shipship",movingship)
  ship.scale=0.25;
  
}

function draw() {
  background("blue");
  drawSprites()
  sea.velocityX=-3
}