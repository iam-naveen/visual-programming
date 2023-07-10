class Node {
  constructor(val = null, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.val = val;
    this.parent = null;
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  show(parent) {
    // circle for nodes
    fill(255);
    ellipse(this.pos.x, this.pos.y, 30);
    // lines connecting the nodes
    stroke(255);
    strokeWeight(2);
    line(parent.pos.x, parent.pos.y, this.pos.x, this.pos.y);
    // values of the nodes
    fill(0);
    noStroke();
    text(this.val, this.pos.x, this.pos.y);

    if (this.left != null) {
      this.left.show(this);
    }
    if (this.right != null) {
      this.right.show(this);
    }
  }

  arrange(other) {
    let gap = p5.Vector.sub(other.pos, this.pos);
    // console.log(gap);
    if (p5.Vector.mag(gap) <= 10) {
      this.pos.add(this.pos.heading());
      this.pos.add(this.pos.heading());
      // console.log(this.pos.heading())
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
