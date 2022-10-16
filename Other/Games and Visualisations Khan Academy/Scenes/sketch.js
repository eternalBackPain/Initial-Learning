function setup() {
  createCanvas(400, 400);
}

let currentScene = 1

function drawScene1() {
  if (currentScene === 1) {
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(25);
    text("The Story of Winston", 10, 200);
  }
}

function drawScene2() {
  if (currentScene === 2) {
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("Lil Winston is born!", 10, 100);
  }
}

//buttons. you can use an object to then call its properties 
//in the function which draws the button. You can add functions
//to an new object to add 

buttontype1 = {
  x: 100, 
  y: 100,
  x2: 300,
  y2: 300
}

function drawScene3() {
  if (currentScene === 3) {
    fill(0, 255, 0);
    text("click here", buttontype1.x, buttontype1.y, buttontype1.x2, buttontype1.y2);
    fill(0, 0, 255);
  }
}

function mousePressed() {
  currentScene++
}

function draw() {
  drawScene1();
  drawScene2();
  drawScene3();
}