class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
        // this.acc = p5.Vector.random2D();
    }

    update() {
        //acc equals to sub of pos from mouse
        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos)
        this.acc.setMag(0.1);

        //add acceleration to velocity
        this.vel.add(this.acc);
        this.vel.limit(2);

        //every frame, the velocity is added to the pos
        this.pos.add(this.vel);
    }

    show() {
        strokeWeight(2)
        stroke(255);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 32, 32)
    }
}