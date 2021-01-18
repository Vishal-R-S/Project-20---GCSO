var car1;
var wall;
var speed, weight;

function setup ()
{
  createCanvas(990, 700);

  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(500, 200, 50, 50);
  car1.shapeColor = "blue";
  wall = createSprite(900, 200, 60, (height/2)/2);
  wall.shapeColor = "white";
}

function draw ()
{
  background("black");
  car1.velocityX = speed;

  if(wall.x-car1.x < car1.width/2+wall.width/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;

    if(deformation < 100)
    {
      car1.shapeColor = color(0,255,0);
    }
    if(deformation > 100 && deformation <180)
    {
      car1.shapeColor = color(230,230,0);
    }
    if(deformation > 180)
    {
      car1.shapeColor = color(255,0,0);
    }
  }
  drawSprites();
}