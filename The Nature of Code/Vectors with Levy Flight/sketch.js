//varying the probability of the steps of the random walk using
// vectors: https://www.youtube.com/watch?v=bqF9w9TTfeo&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=16&ab_channel=TheCodingTrain

let walker;

// function changeDaColour(r, g, b) {
//   random(r) 
//   random(g)
//   random(b);
//   console.log("colour is changed")
// } 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  walker = new Walker();
}

function draw() {
  walker.show(mouseIsPressed)
  walker.move();
  walker.jump(mouseIsPressed);
}

//TODO: improve upon the mouseIsPressed variable where the click
// of the mouse doesnt trigger it multiple times
//TODO: the colour changes every couple of seconds