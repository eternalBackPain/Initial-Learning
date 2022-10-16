class Walker {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.prev = createVector(width / 2, height / 2);
    }

    jump(click) {
        if (click == true) {
            this.pos.set(mouseX, mouseY)
            console.log("jumped!");
            console.log(mouseX, mouseY)
        }
    }

    move() {
        this.vel = p5.Vector.random2D(); //random2D gives you mag of 1
        this.vel.setMag(7);

        let r = random(100);
        if (r >= 99) {
            this.vel.setMag(random(50, 100))
        }

        this.prev.set(this.pos);
        this.pos.add(this.vel);

        if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
            this.pos.set(width/2, height/2);
        }
    
    }


    show(click) {
        if (click == true) {
            console.log("circle is drawn")
            stroke(200);
            fill(255, 0, 0)
            strokeWeight(2);
            ellipse(this.pos.x, this.pos.y, 50, 50);
        }
        stroke(random(255), random(255), random(255));
        strokeWeight(2);
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    }
}