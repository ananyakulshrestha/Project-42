hr = hour();
mn = minute();
sc = second();


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  angleMode(DEGREES);

  map()
  {
    scAngle = map(sc, 0, 60, 0, 360);
    hrAngle = map(hr, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
  }

  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop()


}