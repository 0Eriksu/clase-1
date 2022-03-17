function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0,255),random(0.255),random(0,255));
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(mouseX,mouseY,20,20);
  arc(50, 50, 80, 80, 0, HALF_PI);
  arc(100, 50, 80, 80, 0, HALF_PI);
  arc(150, 50, 80, 80, 0, HALF_PI);
}