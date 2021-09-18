  var ship
  var sea

function preload(){

  seaImg = loadImage("sea.png")
  shipImg = loadImage("ship-2.png")

  }

function setup(){
    createCanvas(400,400);
    sea = createSprite(200,160,200,20);
    sea.addImage("sea",seaImg);
    sea.velocityX = -4;
    ship = createSprite(200,250,300,150);
    ship.addImage("ship",shipImg);
    ship.scale=0.2
  }

function draw() {
    background("blue")

    if(sea.x < 0){
      sea.x= sea.width/2;
    }
    drawSprites();
  }
  