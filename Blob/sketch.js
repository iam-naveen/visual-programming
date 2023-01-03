let scale = 1;

function setup() {
  createCanvas(500, 400);
  noStroke();
}

function draw() {
  background(255);

  let xoff = 0;
  for (let x = 0; x < width; x += scale) {
    let yoff = 0;
    for (let y = 0; y < height; y += scale) {
      color = noise(xoff, yoff) * 255;
      fill(color);
      rect(x, y, scale);
      yoff += 0.01;
    }
    xoff += 0.01;
  }
}
