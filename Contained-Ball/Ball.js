class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.speedX = random(2, 10) * random(-1, 1);
        this.speedY = random(2, 10) * random(-1, 1);
    }

    move() {
        fill(0, 100)
        stroke(0)
        strokeWeight(0.8)
        ellipse(this.x, this.y, 2 * this.r)

        this.speedY++

        this.x += this.speedX;
        this.y += this.speedY;
    }

    bounceWall(wall) {
        if (wall == Left) {
            this.x = Left + this.r;
            this.speedX *= -1;
            this.speedX--
        }
        if (wall == Right) {
            this.x = Right - this.r;
            this.speedX *= -1;
            this.speedX++
        }
        if (wall == Top) {
            this.y = Top + this.r;
            this.speedY++
            this.speedY *= -1;
        }
        if (wall == Bottom) {
            this.y = Bottom - this.r;
            this.speedY *= -1
            this.speedY++
            this.speedX += -(this.speedX * 0.1)
        }
    }
}