let reset

function setup() {
    createCanvas(400, 400)
    background(0);
    reset = createButton("reset").position(50, 50).mousePressed(() => background(0));

    client.on('painted', paint)
}

function draw() {

    if (mouseIsPressed && mouseX > 0 && mouseY > 0) {
        fill(255)
        noStroke()
        ellipse(mouseX, mouseY, 50)

        const data = {
            x: mouseX,
            y: mouseY,
            id: client.id
        }
        client.emit('painted', data)
        console.log("sent: ", mouseX, mouseY);
    }
}

function paint(data) {
    fill(255, 0, 100)
    noStroke()
    ellipse(data.x, data.y, 50)
    console.log(data.id);
}
