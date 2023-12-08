let canvas = document.querySelector('#canvas');
let inpColor = document.querySelector('#inp-c');
let button = document.querySelector('button');
let canvasState = true;
let color = '#FF0000';

/*

PART 1: Create the canvas!

a. Make a function called createCanvas
b. Inside, add a for loop that loops from 0 to 1080
c. In the for loop, create a new div element
d. Then append the new div element to the div with id "canvas"
e. In the global scope, call the createCanvas function */

// a. Make a function called createCanvas
function createCanvas() {
  // Get the div element with id "canvas"
  const canvasDiv = document.getElementById("canvas");

  // b. Inside, add a for loop that loops from 0 to 1080
  for (let i = 0; i < 1080; i++) {
    // c. In the for loop, create a new div element
    const divElement = document.createElement("div");

    // d. Then append the new div element to the div with id "canvas"
    canvasDiv.appendChild(divElement);
  }
}
// e. In the global scope, call the createCanvas function
createCanvas();

/* PART 2: Paint!

a. Add an event listener to the div with id of canvas
b. It should respond to the 'mouseover' event
c. Use a condition to check if it's not the canvas div
d. Also check if the 'canvasState' variable is true
e. Set the background color of the target element to the value of the 'color' variable

*/

// a. Add an event listener to the div with id of canvas
const canvasDiv = document.getElementById("canvas");

// b. It should respond to the 'mouseover' event
canvasDiv.addEventListener('mouseover', (event) => {
  // c. Use a condition to check if it's not the canvas div
  if (event.target !== canvasDiv) {
    // d. Also check if the 'canvasState' variable is true
    if (canvasState) {
      // e. Set the background color of the target element to the value of the 'color' variable
      event.target.style.backgroundColor = color;
    }
  }
});

/*

PART 3: Stop painting!

a. Add an event listener to the canvas div that listens for 'click' events
b. In the callback function it should toggle the boolean value of the variable 'canvasState'

*/

canvasDiv.addEventListener('click', () => {
    // b. In the callback function, toggle the boolean value of the variable 'canvasState'
    canvasState = !canvasState;
  });

/*

PART 4: Change the color!

a. Add an event listener to the input with type 'color'
b. It should respond to the 'change' event
c. Inside the callback, set the 'color' variable to the current value of the target element

*/

// a. Add an event listener to the input with type 'color'
const colorInput = document.querySelector('input[type="color"]');

// b. It should respond to the 'change' event
colorInput.addEventListener("change", (event) => {
  // c. Inside the callback, set the 'color' variable to the current value of the target element
  color = event.target.value;
});

/*

PART 5: A clean slate...

a. Add an event listener to the button element that listens for 'click' events
b. It should clear the canvas div of any child elements
c. Then call the createCanvas function you created in Part 1

*/

// a. Add an event listener to the button element that listens for 'click' events
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  // b. It should clear the canvas div of any child elements
  const canvasDiv = document.getElementById("canvas");
  canvasDiv.innerHTML = "";

  // c. Then call the createCanvas function you created in Part 1
  createCanvas();
});


/*

PART 6: Create your Mona Lisa!

a. Use your skills to paint a memorable picture
b. Take a picture of your work of art
c. Share it with the class! (Slack)

*/

