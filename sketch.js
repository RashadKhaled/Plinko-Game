const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var division=[]
var plinko=[]
var particle=[]

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(400,800,800,20);
  for(var x=0; x<=800; x=x+80){
    division.push(new Division(x,650,10,300))
  }
for(var x=14; x<=800; x=x+50){
  plinko.push(new Plinko(x,75,10))
  plinko.push(new Plinko(x,175,10))
  plinko.push(new Plinko(x,275,10))
  plinko.push(new Plinko(x,375,10))
}
}

function draw() {
  background(0); 
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY);
  ground.display() 
  for(var pos=0; pos<division.length; pos=pos+1){
    division[pos].display()
  }
  for(var pos=0; pos<plinko.length; pos=pos+1){
    plinko[pos].display()
  }
  if(frameCount%60==0){
    particle.push(new Particle(random(0,800),10,10))
  }
  for(var pos=0; pos<particle.length; pos=pos+1){
    particle[pos].display()
  }
}
