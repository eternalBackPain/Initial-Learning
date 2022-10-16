let bgcolour;
let button;
let slider;
let input;
let nameP;

function setup() {
  createCanvas(400, 400);
  bgcolour = color(200);

  // for any element you create in p5, you can call this function
  txt.style("background-color", "pink")


  //Creating a paragraph and a rollover
  nameP = createP('Paragraph inserted here')
  nameP.mouseOver(overpara)

  // ANY OF THE create___ DOM FUNCTIONS IS AN OBJECT WHICH YOU CAN CALL FUNCTIONS FROM

  //Creating a button from p5 lib
  button = createButton('Change Colour boi');
  button.mousePressed(changeColour); //changeColour is the callback

  //other functions like mousePressed include: changed, input

  //Creating a slider
  slider = createSlider(10, 100, 86)

  //Creating a text input field (you can also use the .value func)
  input = createInput('Yo Momma so fat:')

}

function draw() {
  background(bgcolour);
  //you use .value as createSlider is an object
  ellipse(200, 200, slider.value(), slider.value())
  // text(input.value(), 10, 20);
}

function changeColour() {
  bgcolour = color(random(200))

}

function overpara() {
  nameP.html('the mouse is over the paragraph');
}