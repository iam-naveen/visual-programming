let length = 0
let angle = 0
let dec = 0
let angleSlider, decrementSlider

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleSlider = createSlider(0, PI, PI / 4, 0.01).position(0, 0);
    decrementSlider = createSlider(15, 80, 30).position(0, 20);
    lengthSlider = createSlider(100, 600, 200).position(0, 40)
    stroke(255)
    translate(width / 2, height)
}

function draw() {
    background(0)
    angle = angleSlider.value()
    dec = decrementSlider.value()
    length = lengthSlider.value()
    translate(width / 2, height)
    branch(length)
}

function branch(length) {

    line(0, 0, 0, -length)
    translate(0, -length)

    if (length > 4) {
        push()
        rotate(angle)
        branch(length * dec / 100)
        pop()

        push()
        rotate(-angle)
        branch(length * dec / 100)
        pop()
    }
}