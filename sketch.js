var fr,mr,br1,br2;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400,200,50,100);
mr = createSprite(600,200,100,50);
br1 = createSprite(100,100,50,100);
br2 = createSprite(700,100,100,50);
br1.velocityX = 3;
br2.velocityX = -3;
}



function draw() {
  background(0);
  bounceoff(br1,br2);  
 mr.x = World.mouseX; 
 mr.y = World.mouseY;
 if(collide ( mr,fr)      )
{
  mr.shapeColor = "blue"
fr.shapeColor = "green"
}
else{
  mr.shapeColor = "red"
fr.shapeColor = "yellow" 


}



 drawSprites();

}

