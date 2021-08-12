var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

//creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

 createApple();
 createleaves();
  

  rabbit.x = World.mouseX

  drawSprites();
}

function createApple(){
  apple = createSprite(random(0,350),40,10,10);
  apple.velocityX= -50;
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.lifetime= 1;
  
}
function createleaves(){
  leaf = createSprite(random(10,370),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityX= -3;
  leaf.scale = 0.1;
  leaf.lifetime = 1;
}


var select_sprites = Math.round(random());
    
 if (framecount % 80 == 0) 
 {
   if (select_sprites == 1)
    {
      createApple();
   }
   else 
   {
     createleaves();
   }
  }