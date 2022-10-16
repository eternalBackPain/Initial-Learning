let img;

function preload() {
  img = loadImage('Headshot.png')

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, 0, 0, 200, 200)
}