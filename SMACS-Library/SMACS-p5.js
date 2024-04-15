function coordinateSystem(originX, originY, unitScale, reversered) {
  //moves the origin to bottom left
  translate(originX, originY);
  //flips the y values so y increases "up"
  if (reversered) {
    scale(1, -1);
  }
  // Draw the x axis
  line(-originX, 0, width, 0);
  for (let i = -originX; i <= width + 100; i += unitScale) {
    line(i, 0, i, -5);
    writeText(i / unitScale, i, -12);
  }
  // Draw the y axis
  line(0, originY, 0, -height);
  for (let i = -height; i <= originY + 100; i += unitScale) {
    line(0, i, -5, i);
    writeText(i / unitScale, -12, i);
  }
}

function writeText(stringText, x, y) {
  push();
  textAlign(CENTER, CENTER);
  scale(1, -1);
  text(stringText, x, -y);
  pop();
}
