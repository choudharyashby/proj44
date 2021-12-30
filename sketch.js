var girl; 
var garden; 
var butterflysGroup,butterfly1;


var score = 0

function preload () {
  
girl_running = loadAnimation("girl1.png");
butterfly1 = loadImage("butterfly.png");
gardenImage = loadImage("garden.png");
girl_jumping = loadAnimation("girl2.png");

}

function setup() {
  
  createCanvas(800,400);
  
  garden = createSprite (400,100,400,20);
  garden.addImage(gardenImage);
  garden.x = width /2;
  garden.scale = 1.8


  girl = createSprite(50, 230, 50, 50);
  girl.addAnimation("running",girl_running);
  girl.addAnimation("jumping",girl_jumping);
  girl.scale = 0.3;

  invisibleGround = createSprite(400,310,1600,10);
  invisibleGround.visible = false;

  butterflysGroup = new Group();

  score = 0;

}

function draw() {
  background(255,255,255);  



  garden.velocityX=-3

    if(garden.x<100)
    {
       garden.x=400
    }
  
    if(keyDown("r")){
      girl.changeAnimation("running",girl_running)
    }

    if(keyDown("space")) {
      girl.velocityY = -16;
      girl.changeAnimation("jumping",girl_jumping)
  
    
    }

   girl.velocityY = girl.velocityY + 0.8

   spawnbutterfly();

   girl.collide(invisibleGround);

   if(butterflysGroup.isTouching(girl)){
    score = score + 1;
    butterflysGroup.destroyEach();
  }

  drawSprites();

  textSize(20);
  stroke(3);
  fill("black")
  text("butterfly"+ score, 270,50);

  if(score >= 100){
    girl.visible = false;
    textSize(30);
    stroke(3);
    fill("black");
    text("Congragulations!! You win the game!! ", 70,200);
    
  }
}


  function spawnbutterfly () {
       if(frameCount% 200 === 0){
         var butterfly = createSprite(400,50,40,40)
         butterfly.setCollider("rectangle",0,0,200,200)
         butterfly.addImage(butterfly1);
         butterfly.velocityX = -3
         butterfly.scale = 0.15;      
     
         butterfly.lifetime = 200;
         butterflysGroup.add(butterfly);
         

      
       }







  }
  

