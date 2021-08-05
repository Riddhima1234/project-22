const Engine = matter.Engine;
const World = matter.World;
const Bodies = matter.Bodies;
const Constraint = matter.Constraint;

var engine, world;

var body1,body2,body3,body4,body5;

var roof;

var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(1360,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  
  world = engine.world;
  body1 = new body(580, 450);
  body2 = new body(630, 450);
  body3 = new body(680, 450);
  body4 = new body(730, 450);
  body5 = new body(780, 450);

  roof = new roof(680,100,300,20);

  rope1 = new rope(body1body, rope1.body, -52*2, 0)
  rope2 = new rope(body2.body, rope2.body, -50, 0)
  rope3 = new rope(body3.body, rope3.body,  0, 0)
  rope4 = new rope(body4.body, rope4.body,  50, 0)
  rope5 = new rope(body5.body, rope5.body, -50*2, 0)
}

function draw() {
  background(0); 
  engine.update(engine); 

  roof.display();
  body1.display();
  body2.display();
  body3.display();
  body4.display();
  body5.display();
  rope1.display(); 
  rope2.display(); 
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyDown(){

  if(keycode = UP_ARROW){
    Matter.body.applyForce(body1.body,boby1.boby.position, {x:-100,y:-100})
  }

}

