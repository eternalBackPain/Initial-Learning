//Friction
// F = -1 * u * N * v hat
//where:
// v hat = velocity unit vector (the direction of friction is
        // a vector in the opposite direction of velocity)
// u = Mu = coefficient of friction (think ice vs sandpaper)
// N = Normal force (force perpendicular to 2 surfaces in contact;
    // this will be a constant)

// didnt bother doing drag lol

let ball;

//Creating gravity
function gravity(x) {
  const grav = createVector(0, x);
  return p5.Vector.mult(grav, ball.mass)
}

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width * 2 / 3, height / 2, 1, 0, 0, 0, 50)

}

function draw() {
  background(220);
  ball.applyForce(gravity(0.01));
  ball.kick();
  ball.friction(0.1);
  ball.update();
  ball.show();
  ball.edges();
}