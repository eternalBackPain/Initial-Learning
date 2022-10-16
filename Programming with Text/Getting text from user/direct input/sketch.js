let textField;
let output;

function setup() {
  noCanvas();

  textField = createInput("Enter value here"); // Creates an <input></input> element in the DOM for text input
  textField.changed(newText);
  textField.input(newTyping);
  output = select('#output');

}

function newText() {
  // console.log(textField.value())
  createP(textField.value())
}

function newTyping() {
  // console.log(textField.value())
  output.html(textField.value())

}