class Ball {
    constructor(x, y, radius, bounciness) {
        this.x = x
        this.y = y
        this.r = radius
        this.color = [random(200, 255), random(100, 255), random(0, 100)]
        this.speed = random(1,3)
        this.gravity = 1
        this.bounciness = bounciness
    }

    show() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, 2 * this.r)

        this.speed += this.gravity
        this.y += this.speed
    }

    bounce(ground) {
        this.y = ground - this.r
        this.speed *= -this.bounciness
    }
}