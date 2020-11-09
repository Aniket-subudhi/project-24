
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
	
	ground = new Ground(600,50,120,10);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  //drawSprites();
 
}

function keyPressed (){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


	}

}










