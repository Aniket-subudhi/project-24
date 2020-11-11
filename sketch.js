
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(1200,400,10000,10);
    paper = new  Paper(15,350,25)
    box = new Box(650,350,20,100)
	box2 = new Box(500,350,20,100)
	box3 = new Box(575,390,130,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  box.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
  
 
}

function keyPressed (){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


	}

}










