// an object at rest stays at rest
// f = m * a; or A = F / M

//TODO: For some reason wind doesnt work when putting in an
// if statement

let balls = [];

//Creating gravity
function gravity(g, x) {
  const grav = createVector(0, g);
  grav.limit(g);
  //the force is the weight, and the bigger the weight, the 
  //bigger the mass
  return p5.Vector.mult(grav, x.mass)
}

// function wind(w, x) {
//   // if (mouseIsPressed) {
//     const wind = createVector(w, 0)
//     wind.limit(w)
//     return p5.Vector.mult(wind, x.mass)
//   // }
// }

//got no idea how to draw an arrow
function arrow(x1, y1, x2, y2) {
  line(x1, y1, x2, y2)
}

function setup() {
  createCanvas(400, 400);
  replay = createButton('Reload');
  replay.position(10, 10);
  replay.mousePressed(() => document.location.reload())
  for (i = 0; i < 5; i++) {
    balls[i] = new Ball(random(width), 0 + this.r * 2, 1, 0, 0, 0, random(25, 150))
      }
  }

function draw() {
  background(220);

  balls.forEach(ball => {
    ball.applyForce(gravity(0.001, ball));
    // ball.applyForce(wind(0.01, ball))

    ball.update();
    ball.show();
    ball.edges();

  });

}