let canvas;
let margin = 40;
let itter = 10;
let radius;
let step;
let leftTextMargin = 30; // Margin from the left in pixels for the text

function setup() {
  pixelDensity(2);
  canvas = createCanvas(700, 900); // Scaled down A4 size with the same aspect ratio
  canvas.parent('canvasContainer'); // Attach the canvas to the div
  step = (width - margin * 2) / (itter - 1);
  noLoop();
}

function draw() {
  background('#333333');
  fill(255);
  noStroke();
  for (let y = 0; y < itter; y++) {
    for (let x = 0; x < itter; x++) {
      radius = random(5, 20);
      ellipse(margin + x * step, margin + y * step, radius, radius);
    }
  }

  // Add your initial text here, if any
}

// Function to update the text on the canvas
window.updateCertificateText = function(name, surname) {
  // Clear the previous canvas
  clear();
  
  // Redraw everything
  draw();

  // Set the name and surname on the canvas
  fill(255);
  textSize(32);
  textAlign(LEFT, CENTER);
  text("Certificate of Participation", leftTextMargin, height - 150);
  textSize(24);
  text("This is to certify that", leftTextMargin, height - 120);
  textSize(30);
  text(name + " " + surname, leftTextMargin, height - 90);
  // Continue drawing any other text or graphics
}