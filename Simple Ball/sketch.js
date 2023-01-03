let arr = new Array()

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0)
    if(arr.length < 200) arr.push(new Bubble(random(width - 50), random(height - 50), random(10)));
    for (let ele of arr) {
        ele.show()
        ele.move()
        ele.setBoundary()
    }

}


class Bubble {
    constructor(x, y, d) {
        this.size = d;
        this.x = x;
        this.y = y;
        this.color = [255, 0, 200];
        this.weight = 5
    }

    show() {
        noFill();
        stroke(this.color);
        strokeWeight(this.weight);
        ellipse(this.x, this.y, this.size);
    }

    move() {
        this.x += random(5, -5)
        this.y += random(5, -5)
    }

    setBoundary() {
        if (this.x > width - this.d || this.x < this.d)
            this.x *= -1
        if (this.y > width - this.d || this.y < this.d)
            this.y *= -1
    }
}