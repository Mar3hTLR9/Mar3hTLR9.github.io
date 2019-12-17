var img;
var initials ='tp'; //Initials of Thinh Pham
var choice = '1'; //first tool of choice
var screenbg = 250; //White background
var lastscreenshot=61; //Last screenshot

function preload() 
{//Preload image from my own pages
  img1 = loadImage('https://mar3htlr9.github.io/art74portfolio/index1ccimage1.jpg');
  img2 = loadImage('https://mar3htlr9.github.io/art74portfolio/index1ccimage2.jpg');
}

function setup()
{
  createCanvas(800, 600);  // canvas size
  background(screenbg);   // use our background screen color
}

function draw() 
{
  if (keyIsPressed) 
  {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }

  if (mouseIsPressed)
  {
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
  noStroke();
  fill(0);
  text('Thinh Pham', 735, 597);
}

function newkeyChoice(toolChoice) 
{
  if (toolChoice == '[') 
  {//print image 1
    image(img1, mouseX, mouseY, 800, 600);
  } 
  
  else if (toolChoice == ']') 
  {//print image 2
    image(img2, mouseX, mouseY, 800, 600);
  } 
  
  else if (toolChoice == 'r' ) 
  {//Thin red line
    stroke(255, 0, 0);
    strokeWeight(1); //Must add to override strokeWeight of the last tool
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == 'R') 
  {//Thick red line
    stroke(255, 0, 0);
    strokeWeight(5); //Must add to override strokeWeight of the last tool
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == 'g') 
  {//Thin green line
    stroke(0, 255, 0);
    strokeWeight(1); //Must add to override strokeWeight of the last tool
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == 'G') 
  {//Thick green line
    stroke(0, 255, 0);
    strokeWeight(5); //Must add to override strokeWeight of the last tool
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == 'b') 
  {//Thin blue line
    stroke(0, 0, 255);
    strokeWeight(1); //Must add to override strokeWeight of the last tool
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == 'B') 
  {//Thick blue line
    stroke(0, 0, 255);
    strokeWeight(5); //Must add to override strokeWeight of the last tool
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == ',') 
  {//Yellow block
    drawYellowBlock();
  } 
  
  else if (toolChoice == '.') 
  {//White Block
    drawWhiteBlock();
  }
  
  else if (toolChoice == ';')
  {//White circle
    drawWhiteCircle();
  }
  
  else if (toolChoice == '/')
  {//Brown circle
    drawBrownCircle();
  }
  
  else if (key == '1') 
  {//Player 1
    drawOne();
  } 
  
  else if (key == '2') 
  {//Player 2
    drawTwo();
  } 
  
  else if (key == '3') 
  {//Player 3
    drawThree();
  } 
  
  else if (key == '4') 
  {//Player 4
    drawFour();
  } 
  
  else if (key == '5') 
  {//Right side glitch
    x = mouseX;
    y = mouseY;
    for (let i = 0; i < 200; i=i+5) 
    {
      let r = random(300);
      stroke(random(0, 255), random(0, 255), random(0, 255));
      line(x, y+i, x+r, y+i);
    }
  } 
  
  else if (key == '6') 
  {//Double glitch
    x = mouseX;
    y = mouseY;
    for (let i = 0; i < 200; i=i+5) 
    {
      let r = random(-300, 300);
      stroke(random(0, 255), random(0, 255), random(0, 255));
      line(x, y+i, x+r, y+i);
    }
  }
  
  else if (key == '7')
  {
    x = mouseX;
    y = mouseY;
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(3);
    line(x, y, x+random(50), y);
  }
}

function drawYellowBlock()
{
  x = mouseX;
  y = mouseY;
  fill(255, 255, 0);
  rect(x-22, y-22, 44, 44);
}

function drawWhiteBlock()
{
  x = mouseX;
  y = mouseY;
  fill(255, 255, 255);
  rect(x-22, y-22, 44, 44);
}

function drawBrownCircle()
{
  x = mouseX;
  y = mouseY;
  fill(153, 76, 0);
  circle(x, y, 30);
}

function drawWhiteCircle()
{
  x = mouseX;
  y = mouseY;
  fill(255);
  circle(x, y, 20);
}

function drawOne()
{//Horse symbol
  x = mouseX;
  y = mouseY;
  noStroke();
  fill(255, 0, 0);
  rect(x-10, y-4, 20, 8);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(x-5, y-5, x-5, y-20);
  line(x-5, y-20, x-15, y-17);
  line(x-15, y-17, x-15, y-25);
  line(x-15, y-25, x-5, y-28);
  line(x-5, y-28, x-5, y-33);
  line(x-5, y-33, x+2, y-33);
  line(x+2, y-33, x+5, y-5);
}

function drawTwo()
{//Rood cross symbol
  x = mouseX;
  y = mouseY;
  noStroke();
  fill(0, 255, 0);
  rect(x-10, y-4, 20, 8);
  stroke(0, 255, 0);
  strokeWeight(2);
  //Left portion
  line(x-5, y-5, x-5, y-20);
  line(x-5, y-20, x-10, y-20);
  line(x-10, y-20, x-10, y-25);
  line(x-10, y-25, x-5, y-25);
  line(x-5, y-25, x-5, y-30);
  
  //Right portion
  line(x+5, y-5, x+5, y-20);
  line(x+5, y-20, x+10, y-20);
  line(x+10, y-20, x+10, y-25);
  line(x+10, y-25, x+5, y-25);
  line(x+5, y-25, x+5, y-30);
  
  //Top portion
  line(x-5, y-30, x+5, y-30);
}

function drawThree()
{//Red cross symbol
  x = mouseX;
  y = mouseY;
  noStroke();
  fill(0, 0, 255);
  rect(x-10, y-4, 20, 8);
  stroke(0, 0, 255);
  strokeWeight(2);
  //Left portion
  line(x-2, y-5, x-2, y-10);
  line(x-2, y-10, x-7, y-10);
  line(x-7, y-10, x-7, y-15);
  line(x-7, y-15, x-2, y-15);
  line(x-2, y-15, x-2, y-20);
  
  //Right portion
  line(x+2, y-5, x+2, y-10);
  line(x+2, y-10, x+7, y-10);
  line(x+7, y-10, x+7, y-15);
  line(x+7, y-15, x+2, y-15);
  line(x+2, y-15, x+2, y-20);
  
  //Top portion
  line(x-2, y-20, x+2, y-20);
}

function drawFour()
{//Human symbol
  x = mouseX;
  y = mouseY;
  noStroke();
  fill(255, 255, 0);
  rect(x-10, y-4, 20, 8);
  stroke(255, 255, 0);
  noFill();
  circle(x, y-25, 5);
  line(x, y-20, x, y-10);
  
  //Arms
  line(x, y-15, x-5, y-17);
  line(x, y-15, x+5, y-17);
  
  //Legs
  line(x, y-10, x-3, y-5);
  line(x, y-10, x+3, y-5);
}

function clear_print() 
{
  if (key == 'x' || key == 'X') 
  {
    background(screenbg); //Clear everything by applying background on top
  } 
  else if (key == 's' || key == 'S') 
  {
    saveme(); //Call save function
  }
}

function saveme()
{
  filename= initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) 
  {
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot= second();//so that multiple screenshots wont save
}
