let video;
let objectDetector;
let object;
let label = []
let confidence = [] 
// let x = []
// let y = []
// let w = []
// let h = []

function modelReady() {
  console.log('Model is ready!')
  objectDetector.detect(video, getResults)
}
function videoReady() {
  console.log('Video is ready!')
}

function getResults(error, results) {
  if (error) {
    console.log(error)
  } else {
    // console.log(results)
    for (i = 0; i < results.length; i++) {
      object = results[i];
      objectDetector.detect(video, getResults)
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  video = createCapture('video', videoReady)
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelReady)
}

function draw() {
  image(video, 0, 0, windowWidth, windowHeight)
  stroke(0, 255, 0);
  strokeWeight(4)
  noFill();
  rect(object.x, object.y, object.width, object.height)
  textSize(20);
  fill(0, 255, 0);
  text(object.label, object.x + 10, object.y + object.height - 10)
}
