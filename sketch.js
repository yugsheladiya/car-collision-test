var car,wall;
var speed,weight;
var deformation;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,height/2);
  
  car.velocityX = speed;
}

function draw() {
  background("cyan");  
  drawSprites();

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * width * speed* speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color("yellow");
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      wall.shapeColor=color("green");
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
      wall.shapeColor=color("red");
    }
    
  }
  
}