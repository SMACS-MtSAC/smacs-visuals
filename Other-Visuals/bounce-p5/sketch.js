// P5 Setup Values
const scaleOfUnit = 20;
const unitToScaleValue = 0.05;
// const frameRateValue = 30;
let time = 0;

// Physics Setup Values
let gravity = toScale(9.8, scaleOfUnit);
let posX = toScale(0, scaleOfUnit);
let posY = toScale(0, scaleOfUnit);
let velocityX = toScale(3, scaleOfUnit);
let velocityY = toScale(15, scaleOfUnit);

function setup() {
  createCanvas(800, 400);
  // frameRate(frameRateValue);
  // let button = createButton("Run Function");
  // button.mousePressed(runFunction);

  circle(posX, posY, toScale(1, scaleOfUnit));
}

function draw() {
  if (time < 10) {
    dTime = deltaTime * 0.001;
    dXpos = velocityX * dTime;
    dYpos = velocityY * dTime + 0.5 * -gravity * dTime ** 2;
    deltaVY = gravity * dTime;
    posX += dXpos;
    posY += dYpos;
    velocityY -= deltaVY;
    // if (posY < 0) {
    //   velocityY = -velocityY;
    // }

    background(220);
    coordinateSystem(0 + scaleOfUnit, height - scaleOfUnit, scaleOfUnit, true);
    circle(posX, posY, toScale(1, scaleOfUnit));

    time += dTime;
  } else {
    coordinateSystem(0 + scaleOfUnit, height - scaleOfUnit, scaleOfUnit, true);
    writeText(
      "Time: " + time + "s",
      toScale(35, scaleOfUnit),
      toScale(18, scaleOfUnit)
    );
    writeText(
      "X: " + toUnit(posX, scaleOfUnit) + "m",
      toScale(35, scaleOfUnit),
      toScale(17, scaleOfUnit)
    );
    writeText(
      "Y: " + toUnit(posY, scaleOfUnit) + "m",
      toScale(35, scaleOfUnit),
      toScale(16, scaleOfUnit)
    );
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

let timeUnceraintyCount = 1;
let timeUncertaintyRate = 5;
function fixUncertainty(value) {
  if (time > timeUnceraintyCount * timeUncertaintyRate) {
    timeUnceraintyCount++;
    return value.toFixed(2);
  }
}
