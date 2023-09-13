let xPosition; 
let speed = 4;
let diameter = 40;
//"let" defines a variable
//define at the very beginning of the program because
//you want to use it in all sections of the program
//aka a global variable
//"scope of variable:" range of possible definitions for variable
//for variables only needed in a certain section of your
//variable, 'let' can be placed under that function
//var also does the same ting as let

function setup() {
  createCanvas(400, 400);
  xPosition = width/2;
  console.log(xPosition)
  //displays stuff in the console (f12 in browser)
  
}

function draw() {
  background(220, 10, 30);
  ellipse(xPosition, height/2, diameter);
  //frame count: number of frames that have been displayed: superfast (60fps)
  //you can also make your own variable



  
  if (xPosition >= width || xPosition <= 0) {
    speed = speed * -1;
    
  }
// || means or
  xPosition += speed;

  //x += speed; same thing as x = x + speed
    
}