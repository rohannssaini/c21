var go1, go2, go3, go4;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect= createSprite(100,100,50,80);
 fixedRect.shapeColor="lightblue";
 movingRect.shapeColor="lightblue";

 go1=createSprite(100,100,50,50);
go2=createSprite(200,100,50,50);
go3=createSprite(300,100,50,50);
go4=createSprite(400,100,50,50);
go1.shapeColor="lightblue";
go2.shapeColor="lightblue";
go3.shapeColor="lightblue";
go4.shapeColor="lightblue";
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  // 25+25=50
  console.log(movingRect.x - fixedRect.x )

  if(isTouching(movingRect, go1)){
    go4.shapeColor="crimson";
    go2.shapeColor="crimson";
  }else {
    go4.shapeColor="lightblue";
    go2.shapeColor="lightblue";
  }
  drawSprites();
}

