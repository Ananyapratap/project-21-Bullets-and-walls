var bullet,wall,thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(200, 200, 80, 2);

  bullet.velocityX = speed;
  
bullet.shapeColor = "white";

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "white";


}
function draw() {

 background("black");
  if(hasCollided(bullet,wall))
  {
  bullet.velocityX = 0;
  var damage  =  0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10)
  {
    wall.shapeColor = color("green");
  }
  if(damage<10)
  {
    wall.shapeColor = color("red");
  }
}
drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width ;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;

}
