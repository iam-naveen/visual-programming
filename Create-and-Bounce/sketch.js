let balls = []

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0)
    fill(255)
    noStroke()
    text("Click anywhere create a ball", width / 2 - 70, height / 2 - 100)
    drawCursor()
    for (let ball of balls) {
        ball.show()
        if (ball.y + ball.r > height) ball.bounce(height)
    }
}

function drawCursor() {
    noFill()
    stroke(255, 255, 255)
    strokeWeight(2)
    ellipse(mouseX, mouseY, 50)
}
function mousePressed() {
    balls.push(new Ball(mouseX, mouseY, 20, 0.95))
}