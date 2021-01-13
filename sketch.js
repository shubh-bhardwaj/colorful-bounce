var x = 0;
var y=120;
//var z=100;
var speed = 6;
var speed1 = 4;
//var speed2 = 5;
function setup() {
  createCanvas(1520, 730);
}

function draw() {
  background(0);
  stroke(1);
  strokeWeight(4);
  // noFill();
  ellipse(x, 350, 100, 100);
  stroke(1);
  strokeWeight(4);
  ellipse(y,350,100,100);
  stroke(1);
  strokeWeight(4);
  //rect(300,200,30,100);

  if (x > width || x<0) {
    speed = -speed;
    fill(random(255),0,random(200));
  }
  if (y > width || y<0) {
    speed1 = -speed1;
    fill(random(220),20,random(60));
  }
  if (x > height || x<0) {
    speed = -speed;
    fill(random(255),0,random(200));
  }
  if (y > height || y<0) {
    speed1 = -speed1;
    fill(random(220),20,random(60));
  }


  x = x + speed;
  y = y + speed1;
 // z = z + speed2;
}
// function get_random_color() {
//   var letters = 'ABCDE'.split('');
//   var color = '#';
//   for (var i = 0; i < 3; i++) {
//       color += letters[Math.floor(Math.random() * letters.length)];
//   }
//   return color;
// }