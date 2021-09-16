var hero;
var heroImg
var bg
var bgImg
function preload () {
  heroImg = loadAnimation ("contrap.png","standing.png");
  bgImg=loadImage("contrabackground.png");
}

function setup()
{
  createCanvas(displayWidth,displayHeight);
  bg=createSprite (width/2,height/2,width,height);
  
  hero=createSprite(100,displayHeight/2,10,40);
  hero.addAnimation("heroImg",heroImg);
  bg.addImage(bgImg);
  bg.velocityX=-5
  bg.scale=1.7
}

function draw() 
{
  background(51);

   drawSprites();
 if(keyDown("space")){
   hero.velocityY=-14
   

   }
   if(bg.x<0){
bg.x=bg.width/2
   }
 }


