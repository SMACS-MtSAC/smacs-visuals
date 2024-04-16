// P5 Setup Values
const scaleOfUnit = 20;
let velocityXInput;
let velocityXText;
let velocityYInput;
let velocityYText;

// Physics Setup Values
let radius = toScale(1, scaleOfUnit);
let posX = toScale(3, scaleOfUnit);
let posY = toScale(8, scaleOfUnit);
let velocityX = toScale(2, scaleOfUnit);
let velocityY = toScale(0, scaleOfUnit);
let time = 0;

function setup() {
  createCanvas(400, 200);
  velocityXInput = select("#x-velocity-input");
  velocityXText = select("#x-velocity-text");
  velocityXInput.input(updateVelocityX);
  velocityXInput.value(2);
  updateVelocityX();

  velocityYInput = select("#y-velocity-input");
  velocityYText = select("#y-velocity-text");
  velocityYInput.input(updateVelocityY);
  velocityYInput.value(0);
  updateVelocityY();
}

function draw() {
  dTime = deltaTime * 0.001;
  dXpos = velocityX * dTime;
  dYpos = velocityY * dTime;
  posX += dXpos;
  posY += dYpos;
  if (posX > width - scaleOfUnit) {
    posX = 0;
  }
  if (posX < 0) {
    posX = width - scaleOfUnit;
  }
  if (posY > height - scaleOfUnit) {
    posY = 0;
  }
  if (posY < 0) {
    posY = height - scaleOfUnit;
  }

  background(300);
  fill(color(0, 0, 0));
  coordinateSystem(0 + scaleOfUnit, height - scaleOfUnit, scaleOfUnit, true);
  fill(255, 0, 0);
  circle(posX, posY, radius);
}

function toScale(value, scale) {
  return value * scale;
}

function toUnit(value, scale) {
  return value / scale;
}

function toTime(value, deltaFrameRate) {
  return value * deltaFrameRate;
}

function updateVelocityX() {
  velocityX = toScale(velocityXInput.value(), scaleOfUnit);
  velocityXText.html(velocityXInput.value() + "m/s");
}

function updateVelocityY() {
  velocityY = toScale(velocityYInput.value(), scaleOfUnit);
  velocityYText.html(velocityYInput.value() + "m/s");
}
