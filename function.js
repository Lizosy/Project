// 'canvas' is a p5.js object that represents the canvas on which we draw
let canvas;
let margin = 40;
let itter = 10;
let radius;
let step;
let leftTextMargin = 30; // Margin from the left in pixels for the text

// The 'setup' function is part of p5.js and runs once at the beginning
function setup() {
  pixelDensity(2);
  canvas = createCanvas(700, 900); // Create a canvas of A4 size ratio
  canvas.parent('canvasContainer'); // Place the canvas in a div with this id
  step = (width - margin * 2) / (itter - 1); // Calculate the step for the grid of circles
  noLoop(); // Ensure that the draw function only runs once
  drawCanvas(); // Call a function to draw the initial canvas
}

// The 'drawCanvas' function handles the actual drawing on the canvas
function drawCanvas(name = '', surname = '') {
  background('#333333'); // Set the background color of the canvas
  fill(255); // Set the color for the circles
  noStroke(); // Draw circles without an outline
  
  // Draw a grid of circles
  for (let y = 0; y < itter; y++) {
    for (let x = 0; x < itter; x++) {
      radius = random(5, 20); // Randomize the size of the circles
      ellipse(margin + x * step, margin + y * step, radius, radius); // Draw each circle
    }
  }

  // Set the text properties and display the name and surname
  fill(255); // White text color
  textSize(32); // Size of the title text
  textAlign(LEFT, CENTER); // Align text to the left
  text("Certificate of Participation", leftTextMargin, height - 150);
  textSize(24); // Size of the body text
  text("This is to certify that", leftTextMargin, height - 120);
  textSize(30); // Size of the name text
  text(name + " " + surname, leftTextMargin, height - 90); // Display the name and surname
}

// This function is called to save the current state of the canvas as an image
function saveCanvasAsImage() {
  saveCanvas(canvas, 'certificate', 'jpg'); // Save the canvas as 'certificate.jpg'
}

// This function gets called from the HTML page's script when the form is submitted
window.updateCertificateText = function(name, surname) {
  // Update the canvas with the new text
  drawCanvas(name, surname);

  // Wait until the canvas has been updated before saving the image
  setTimeout(function() {
    saveCanvasAsImage(); // Call the function to save the canvas as an image
  }, 0);
}
