let angle = 0;
let time = 0;

let ballRadius = 130;
let baseDistance = 285;

let colors = ["#FF00FF", "#00FFFF", "#FFFF00"];

function setup() {
  createCanvas(600, 600);
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

