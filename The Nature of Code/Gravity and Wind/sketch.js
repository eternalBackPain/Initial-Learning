// an object at rest stays at rest
// f = m * a; or A = F / M

//we're taking a force that exists in the environment and applying
// it to the object

let ball1;
let ball2

//Creating gravity
function gravity(x) {
  const grav = createVector(0, 0.001);

  //the force is the weight, and the bigger the weight, the 
  //bigger the mass
  return p5.Vector.mult(grav, x.mass)
}

//Creating wind
// function wind(x) {
//   if (mouseIsPressed) {
//     console.log("WOOOSSSHHH")
//     const wind = createVector(x, 0);
//     ball.applyForce(wind)
//   }
// }

function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(width * 2 / 3, height / 2, 0, 0, 0, 0, 25)
  ball2 = new Ball(width / 3, height / 2, 0, 0, 0, 0, 50)

}

function draw() {
  background(220);
  ball1.applyForce(gravity(ball1));
  ball2.applyForce(gravity(ball2));

  ball1.kick();
  ball2.kick();

  // ball.applyForce(wind(0.1))

  ball1.update();
  ball2.update();

  ball1.show();
  ball2.show();

  ball1.edges();
  ball2.edges();

}