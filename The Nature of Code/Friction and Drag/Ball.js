class Ball {
    constructor(posx, posy, velx, vely, accx, accy, m) {
        this.pos = createVector(posx, posy);
        this.vel = createVector(velx, vely);
        this.acc = createVector(accx, accy);
        this.mass = m
        this.r = sqrt(this.mass) * 2
    }

    //creating Friction
    friction(mu) { //f = -1 * u * N * v hat
        const diff = height - (this.pos.y + this.r)
        if (diff < 1) {
            //Direction of friction
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            //Magnitude of friction
            let normal = this.mass;
            friction.setMag(mu * normal);
            this.applyForce(friction);
        }
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel);
    }

    show() {
        fill(255, 0, 0);
        stroke(50);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }

    edges() {
        if (this.pos.x <= 0 + this.r) {
            this.pos.x = 0 + this.r
            this.vel.x *= -1;
        } else if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        } else if (this.pos.y <= 0 + this.r) {
            this.pos.y = 0 + this.r
            this.vel.y *= -1;
        } else if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r
            this.vel.y *= -1;
        }
    }

    kick() {
        if (mouseIsPressed && dist(this.pos.x, this.pos.y, mouseX, mouseY) < this.r) {
            console.log("clicked!!")
            this.acc.set(0, 0)
            this.vel.set(random([-7, -6, -5, 5, 6, 7]), random([-7, -6, -5, 5, 6, 7]))
        }

        //TODO: flick the ball whenever cursor drags on ball in a direction
        // let mouseVector = createVector(mouseX, mouseY)
        // this.pos.add(mouseReleased(mouseVector));
    }

}