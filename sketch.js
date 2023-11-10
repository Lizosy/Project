let canvas;
let margin = 40;
let itter = 10;
let radius;
let step;
let leftTextMargin = 30;
let userName = '';
let userSurname = '';

function setup() {
    pixelDensity(2);
    canvas = createCanvas(700, 900);
    canvas.parent('canvasContainer');
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

    fill(255);
    textSize(32);
    textAlign(LEFT, CENTER);
    text("SWU Open House - CS and DE Department", leftTextMargin, height - 170);
    textSize(24);
    text("We appreciate your visit to our booth.", leftTextMargin, height - 130);
    text("Thank you for your interest!", leftTextMargin, height - 100);
    text(userName + ' ' + userSurname, leftTextMargin, height - 70);
}

function displayArtwork() {
    userName = document.getElementById('name').value;
    userSurname = document.getElementById('surname').value;
    document.getElementById('inputArea').style.display = 'none';
    document.getElementById('canvasContainer').style.display = 'block';
    redraw();
}