var a;
var ground, ground1;
var block1, block2, block3, block4, block5; 
var block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var  block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var slingshot;
var hexagonObj;
var bg;
var score = 0;
const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
function setup() {

  createCanvas(900,400);
  getBackgroundColor();
  engine  = Engine.create();
  world = engine.world;
  ground = new Ground (390,300,250,10)
  ground1 = new Ground (700,200,200,10)
  
//level one
block1 = new Box(300,275,30,40);
block2 = new Box(330,275,30,40);
block3 = new Box(360,275,30,40);
block4 = new Box(390,275,30,40);
block5 = new Box(420,275,30,40);
block6 = new Box(450,275,30,40);
block7 = new Box(480,275,30,40);
//level two
block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);
//level three
block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);
//top
block16 = new Box(390,155,30,40);

//set 2 
//level one
block17 = new Box(640,175,30,40);
block18 = new Box(670,175,30,40);
block19 = new Box(700,175,30,40);
block20 = new Box(730,175,30,40);
block21 = new Box(760,175,30,40);
//level two
block22 = new Box(670,135,30,40);
block23 = new Box(700,135,30,40);
block24 = new Box(730,135,30,40);
//top
block25 = new Box(700,95,30,40);
// hexagon object
hexagonObj = new stone(150, 200, 20)
//slingshot
slingshot = new SlingShot(hexagonObj.body, {x: 150, y:200})
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
 
}

function draw() {
  if(bg){
  background(bg);  
  }
  // stand display
  Engine.update(engine);
  ground.display();
  ground1.display();
  fill("pink")
  // set 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill("green")
  //set2 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 //object polygon
 hexagonObj.display();
 push();
 strokeWeight(3)
 slingshot.display();
 pop();
 textSize(15)
 fill("black")
 text("SCORE :"+score, 750, 40)
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 
 //set2 
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();
 
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(hexagonObj.body)
  }
}
function mouseDragged(){
  Matter.Body.setPosition(hexagonObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
async function getBackgroundColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<18){
     bg = "yellow"
  }
  else{
      bg = "blue";
  }

  backgroundColor = bg;
 
}
