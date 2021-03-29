
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperBall;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1300,650);
	paperBall = new Paper(200, 645);
	paperBall.scale = 2;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  console.log(mouseX);
  console.log(mouseY);

  groundObject.display();
  dustbinObj.display();
  paperBall.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:125, y:-145})
	}
}