let boxW, boxH, Top, Bottom, Left, Right
let widthSlider, heightSlider
let balls = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  let heightSliderX = 155, widthSliderX = -20
  widthSlider = createSlider(300, width - 100).position(width / 2 - widthSliderX, 40).value(300)
  heightSlider = createSlider(300, height - 200).position(width / 2 - heightSliderX, 40).value(300)
  createP("Box Width: ").position(widthSlider.x, widthSlider.y - 35)
  createP("Box Height: ").position(heightSlider.x, heightSlider.y - 35)
}

function draw() {
  background(255);
  if (balls.length == 0) drawText("Click within the box to Create Balls");
  boxW = widthSlider.value()
  boxH = heightSlider.value()
  setBoundaries(boxW, boxH)
  drawBox(Left, Top, boxW, boxH)

  for (let ball of balls) {
    ball.move()
    if (ball.x - ball.r < Left) ball.bounceWall(Left)
    if (ball.x + ball.r > Right) ball.bounceWall(Right)
    if (ball.y - ball.r < Top) ball.bounceWall(Top)
    if (ball.y + ball.r > Bottom) ball.bounceWall(Bottom)
  }
}

function drawText(s) {
  let pos = 250
  fill(0, 30)
  noStroke()
  textSize(40)
  textAlign(CENTER, CENTER)
  text(s, width / 2 - pos / 2, height / 2, pos)
}

function mouseIsWithin(x1, y1, x2, y2) {
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) return true
  else return false
}

function mousePressed() {
  if (mouseIsWithin(Left, Top, Right, Bottom)) {
    if (balls.length <= 40) balls.push(new Ball(mouseX, mouseY, 20));
  }
}

function drawBox(x, y, w, h) {
  noFill()
  stroke(0)
  strokeWeight(10)
  rect(x, y, w, h)
}

function setBoundaries(boxW, boxH) {
  Top = height / 2 - boxH / 2;
  Bottom = height / 2 + boxH / 2;
  Left = width / 2 - boxW / 2;
  Right = width / 2 + boxW / 2;
}