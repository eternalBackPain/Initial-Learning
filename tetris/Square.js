class Square {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        fill(50)
        stroke(200);
        strokeWeight(1);
        rect(this.x, this.y, this.size, this.size)
    }



}