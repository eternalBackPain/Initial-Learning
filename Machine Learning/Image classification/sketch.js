//IMAGE CLASSIFICATION: https://learn.ml5js.org/#/reference/image-classifier

// let mobilenet;
// let oky;

// function modelReady() {
//   console.log('Model is ready!!!')
//   mobilenet.predict(oky, gotResults)
// }

// function gotResults(error, results) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(results)
//   }
// }

// function imageReady() {
//   image(oky, 0, 0, width, height)
// }

// function setup() {
//   createCanvas(400, 400);
//   background(220);
//   oky = createImg('oky.jpeg',imageReady)
//   oky.hide();
//   mobilenet = ml5.imageClassifier('MobileNet', modelReady)
// }

// ---------------------------------------------------------------------------

//IMAGE CLASSIFICATION USING WEB CAM
let mobilenet;
let video;
let classLabel = '';
let probLabel = '';

function modelReady() {
  console.log('Model is ready!!!')
  mobilenet.predict(gotResults)
} 

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    // console.log(results)
    classLabel = results[0].label
    probLabel = results[0].confidence
    mobilenet.predict(gotResults)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  video = createCapture('video')
  video.hide();
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw() {
  image(video, 0, 0, width, height)
  fill(0, 255, 0)
  textSize(20)
  text(classLabel, 40, windowHeight - 40)
  text(probLabel, 40, windowHeight - 20)
}