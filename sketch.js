/*
TEXT ON CIRCLE
Jeff Thompson | 2021 | jeffreythompson.org

While we use straight text in most cases, sometimes you
want to make things a little more exciting! This example
shows how to create text on a circle but comes with a
caveat: it doesn't maintain the fancy letter-spacing
that we'd get with normal text (since kerning is ignored).

Circles are easy, more complex curves and other
shapes will require a lot more math, so we'll skip
that here :)

CHALLENGES
1. Can you have the letters change color as they go
   around the circle? (Hint: use lerpColor)
2. Can you make this interactive by mapping the mouse
   position to startAngle and distanceAngle?
3. Or can you make the entire circle rotate slowly? Or
   animate the radius changing over time?

*/

// text to display
// (note: the space at the end helps keep the first
// and last word from running into each other)
let str = 'WATER MUSIC WATER MUSIC WATER MUSIC WATER MUSIC ';

let startAngle =    0;     // angle where text should start
let distanceAngle = 360;   // how far (in degrees) text will go

let radius;                // set dynamically in setup()
let font;

let sinSpeed=.006;







function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // radius is set dynamically depending on the
  // sketch's size – the min() function gives
  // us the smaller of two numbers, ensuring
  // that the circle won't get cut off
  radius = min(width,height) / 3;
  
  // font size is also dynamic!
  textSize(radius*.2);
  //textFont(font);
  textAlign(CENTER, BASELINE);
}


function draw() {
  background(238);
  fill(0);
  translate(width/2,height/2);

  rotate(radians(frameCount));
  // the circle our text will go around

  stroke(0,150,255);
  textDisplay(1);
  textDisplay(1.25);
 
  
}


function textDisplay(x){
  // calculate the angle between each letter
  let angleBetweenLetters = radians(distanceAngle) / str.length;

  scale(sin(frameCount*sinSpeed)*x);
  // display the text!
  push();
  //translate(width/2, height/2);        // move to circle's center
  rotate(radians(startAngle));         // rotate to where text starts
  for (let i=0; i<str.length; i++) {   // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters);   // rotate to angle
    translate(0,-radius);              // and translate to edge of circle
    fill(0);
    noStroke();
    text(str[i], 0,0);                 // draw character at location
    pop();
  }
  pop();
}

// to make this sketch responsive to the window size
// being changed, the windowResized() function calls
// setup() so we can change the radius and font size
function windowResized() {
  setup();
}

