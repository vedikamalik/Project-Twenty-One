var thickness, wall;
var speed,bullet,weight; 

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,58);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

function draw() {
  background(0,0,0);  
 
 if(wall.x-thickness.x < thickness.width+wall.width/2)
 {
  car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22500;
if(deformation>180)
{
  car.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100)
{
 car.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  car.shapeColor=color(0,230,0)
}
  drawSprites();
}
}