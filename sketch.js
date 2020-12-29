var hr, mn, sc;
var scAngle;

function setup() {
  createCanvas(800,400);

   hr = hour();
   mn = minute();
   sc = second();

  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  
  //stroke(255,0,0);
  //strokeWeight(7);
  //line(0,0,100,0);

  /*push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop();*/

  textSize(50);
  //text("Current hour: \n" + hr, 200, 50);
  //text("Current minute: \n" + mn, 200, 150);
  //text("Current second: \n" + sc, 200,250);
  text(hr + ":" + mn + ":" + sc, 550,400);

  drawSprites();
}