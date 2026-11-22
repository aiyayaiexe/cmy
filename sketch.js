let angle = 0;
let time = 0;

let ballRadius = 130;
let baseDistance = 285;

let colors = ["#FF00FF", "#00FFFF", "#FFFF00"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  //increases at a constant rate
  time += 0.017;
  angle += 0.015; //rotation kinda

  //makes it smoothly transition across 0-baseDistance
  let distance = baseDistance * (sin(time));

  //balls
  for (let i = 0; i < 3; i++) {

    //gives each ball its position
    let ballAngle = angle + i * TWO_PI / 3;

    let x = width / 2 + cos(ballAngle) * distance;
    let y = height / 2 + sin(ballAngle) * distance;

    noStroke();
    fill(colors[i] + "10");
    circle(x, y, ballRadius * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Describe the process of researching, designing, and fine-tuning your optical illusion. - I began by using the digital artist M:PY for inspiration by looking through his work. From there, I found a piece labeled "No additive blending - pure RGB interpolation. #p5js." I used that as inspiration to create an orbiting triangle of 3 dots in CMY, where I wanted to play with saturation in order for them to show color overlaps. When I finished that code, I decided to play around with adding multiple dots and different colors. During this time, I decided to turn off the background color, which allowed me to see that since the shapes were in draw, it was leaving a smear behind on the background. This created a beautiful effect, which I tweaked with the transparency and sizing to create my graphic.

