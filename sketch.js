const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particle = [];
var plinko = [];
var division = [];
var divisions, plinkos, particles, ground;
var score = 0;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create(); 
  world = engine.world; 
  ground = new Ground(width/2,height,width,20); 
  
  for (var k = 0; k <=width; k = k + 80) { 
    division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
  } 
  for (var j = 75; j <=width; j=j+50) { 
    plinko.push(new Plinko(j,75)); 
  } 
  
  for (var j = 50; j <=width-10; j=j+50) { 
    plinko.push(new Plinko(j,175)); 
  } 
  
  for (var j = 75; j <=width; j=j+50) { 
    plinko.push(new Plinko(j,275)); 
  } 
  
  for (var j = 50; j <=width-10; j=j+50) { 
    plinko.push(new Plinko(j,375)); 
  }
  
}

function draw() {
  background("black");  

  Engine.update(engine); 
  ground.display(); 
  for (var i = 0; i < plinko.length; i++) { 
    plinko[i].display(); 
  } 
  
  if(frameCount%60===0){ 
    particle.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
    score++;
   } 
   
   for (var j = 0; j < particle.length; j++) { 
     particle[j].display(); 
    } 
     
    for (var k = 0; k < division.length; k++) { 
      division[k].display(); 
  }

  drawSprites();
}