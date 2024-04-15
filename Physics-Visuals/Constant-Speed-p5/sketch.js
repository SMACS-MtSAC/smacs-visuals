// P5 Setup Values
const scaleOfUnit = 20;
const unitToScaleValue = 0.05;
const frameRateValue = 30;
let time = 0;

// Physics Setup Values
let gravity = toScale(9.8, scaleOfUnit);
let posX = toScale(0, scaleOfUnit);
let posY = toScale(0, scaleOfUnit);
let velocityY = toScale(20, scaleOfUnit);
let velocityX = toScale(3, scaleOfUnit);

function setup() {
  createCanvas(1200, 800);
  frameRate(frameRateValue);
  // let button = createButton("Run Function");
  // button.mousePressed(runFunction);

  circle(posX, posY, toScale(1, scaleOfUnit));
}

function draw() {
  if (time < 10) {
    dTime = deltaTime * 0.001;
    dXpos = velocityX * dTime;
    dYpos = velocityY * dTime;
    deltaVY = gravity * dTime;
    posX += dXpos;
    posY += dYpos;
    velocityY -= deltaVY;
    if (posY < 0) {
      velocityY = -velocityY;
    }

    background(220);
    coordinateSystem(0 + scaleOfUnit, height - scaleOfUnit, scaleOfUnit, true);
    circle(posX, posY, toScale(1, scaleOfUnit));
    writeText(
      "Time: " + time.toFixed(2) + "s",
      toScale(10, scaleOfUnit),
      toScale(10, scaleOfUnit)
    );
    writeText(
      "X: " + toUnit(posX, scaleOfUnit).toFixed(2) + "m",
      toScale(10, scaleOfUnit),
      toScale(9, scaleOfUnit)
    );
    writeText(
      "Y: " + toUnit(posY, scaleOfUnit).toFixed(2) + "m",
      toScale(10, scaleOfUnit),
      toScale(8, scaleOfUnit)
    );
    time += dTime;
  } else {
    noLoop();
  }
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
