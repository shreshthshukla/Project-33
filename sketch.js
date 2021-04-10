const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Maxsnow = 50;
var snow = [];
var boy, boyI1
var day, night;
var backgroundImg
function preload(){
boyI1 = loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png","man7.png","man8.png")
// day = loadImage("snow1.jpg")
// night = loadImage("snow2.jpg")
getTime();    
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth,windowHeight);
  boy = createSprite(width/2,height/1.5, 50, 50);
  boy.addAnimation("running",boyI1)



 if(frameCount%150===0){
  for(var i=0; i<Maxsnow; i++){
    snow.push(new Snow(random(0,width-50),random(0,200)))
   }
 }

}

function draw() {
  Engine.update(engine);
  if(backgroundImg);
  background(255,255,255);

  for(var i = 0; i<Maxsnow; i++){
    snow[i].showSnow();
    snow[i].updateY()
    
 }
  drawSprites();
}
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson = await response.json();
  var datetime = responseJson.datetime
  var hour = datetime.slice(11,13);

  if(hour>=06&&hour<=18){
  bg = "snow1.jpg";
  }
  else{
  bg = "snow2.jpg"
  }
  backgroundImg = loadImage(bg);
  
}