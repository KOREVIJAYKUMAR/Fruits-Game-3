gameState="wait";

var bg;
var backgroundIMG1;
var backgroundIMG;

var knife,knifeImg;

var form;

var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6;
var fruitImg1,fruitImg2,fruitImg3,fruitImg4,fruitImg5,fruitImg6;

var sprite1,sprite2,sprite3,sprite4;

var fruitGroup;

var edges;

var Score=0;

function preload(){
 backgroundIMG1=loadImage("FruitsIMG/background img.png");
 backgroundIMG2=loadImage("FruitsIMG/background img1.jpg");
 
 knifeImg=loadImage("FruitsIMG/knife img.png");

 fruitImg1=loadImage("FruitsIMG/fruitIMG1.png");
 fruitImg2=loadImage("FruitsIMG/fruitIMG2.png");
 fruitImg3=loadImage("FruitsIMG/fruitIMG3.png");
 fruitImg4=loadImage("FruitsIMG/fruitIMG4.png");
 fruitImg5=loadImage("FruitsIMG/fruitIMG5.png");
 fruitImg6=loadImage("FruitsIMG/fruitIMG6.png");

}


function setup() {
  createCanvas(800,600);

  bg=createSprite(400, 200, 50, 50);
  bg.addImage(backgroundIMG1);
  bg.scale=2.5;

  knife=createSprite(400, 530, 50, 50);
  knife.addImage(knifeImg);
  knife.scale=0.2;
  knife.visible=false;

  fruit1=createSprite(400, 30, 50, 50);
  fruit1.addImage(fruitImg1);
  fruit1.velocityX=6;
  fruit1.scale=0.3;
  fruit1.visible=false;

  fruit2=createSprite(400, 180, 50, 50);
  fruit2.addImage(fruitImg2);
  fruit2.velocityX=7;
  fruit2.scale=0.3;
  fruit2.visible=false;

  fruit3=createSprite(505, 140, 50, 50);
  fruit3.addImage(fruitImg3);
  fruit3.velocityX=4;
  fruit3.scale=0.3;
  fruit3.visible=false;

  fruit4=createSprite(505, 70, 50, 50);
  fruit4.addImage(fruitImg4);
  fruit4.velocityX=2;
  fruit4.scale=0.3;
  fruit4.visible=false;

  fruit5=createSprite(295, 140, 50, 50);
  fruit5.addImage(fruitImg5);
  fruit5.velocityX=5;
  fruit5.scale=0.3;
  fruit5.visible=false;

  fruit6=createSprite(295, 70, 50, 50);
  fruit6.addImage(fruitImg6);
  fruit6.velocityX=8;
  fruit6.scale=0.3;
  fruit6.visible=false;

  fruitGroup=createGroup()

  form=new Form();

  form.display();

}




function draw() {
  background(255,255,255); 

  textSize(20);
  stroke("white");
  text("Score=0"+score,100,150);
  
  if(gameState==="play"){

    bg.addImage(backgroundIMG2);
    bg.scale=1.5;

    knife.visible=true;
    fruit1.visible=true;
    fruit2.visible=true;
    fruit3.visible=true;
    fruit4.visible=true;
    fruit5.visible=true;
    fruit6.visible=true;
   

   if(keyDown("space")){
    knife.velocityY = -80;
   
   }

   if(knife.y<0){
     knife.y=530;
     knife.velocityY = 0;
    
   }

   edges=createEdgeSprites();

   fruit1.bounceOff(edges[0]);
   fruit1.bounceOff(edges[1]);
   fruit1.bounceOff(edges[2]);
   fruit1.bounceOff(edges[3]),

   fruit2.bounceOff(edges[0]);
   fruit2.bounceOff(edges[1]);
   fruit2.bounceOff(edges[2]);
   fruit2.bounceOff(edges[3]);

   fruit3.bounceOff(edges[0]);
   fruit3.bounceOff(edges[1]);
   fruit3.bounceOff(edges[2]);
   fruit3.bounceOff(edges[3]);

   fruit4.bounceOff(edges[0]);
   fruit4.bounceOff(edges[1]);
   fruit4.bounceOff(edges[2]);
   fruit4.bounceOff(edges[3]);

   fruit5.bounceOff(edges[0]);
   fruit5.bounceOff(edges[1]);
   fruit5.bounceOff(edges[2]);
   fruit5.bounceOff(edges[3]);

   fruit6.bounceOff(edges[0]);
   fruit6.bounceOff(edges[1]);
   fruit6.bounceOff(edges[2]);
   fruit6.bounceOff(edges[3]);
   //leedges[]


   if(fruit1.isTouching(knife)){
    fruit1.destroy();
  }

   if(fruit2.isTouching(knife)){
    fruit2.destroy();
  }

  if(fruit3.isTouching(knife)){
    fruit3.destroy();
  }

  if(fruit4.isTouching(knife)){
    fruit4.destroy();
  }

  if(fruit5.isTouching(knife)){
    fruit5.destroy();
  }

  if(fruit6.isTouching(knife)){
    fruit6.destroy();
  }

  }

  drawSprites();
}












