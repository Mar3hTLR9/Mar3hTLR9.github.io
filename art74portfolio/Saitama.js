function setup() 
{
  createCanvas(600, 600);
  angleMode(DEGREES);
}


function draw() 
{
  background(200);

  
  //Face 
  noStroke();
  fill(252, 217, 172);
  ellipse(300, 280, 200, 280);
  
  //Ears
  noStroke()
  fill(252, 217, 172);
  arc(190, 280, 50, 70, 0, 270, OPEN);
  arc(410, 280, 50, 70, 270, 540, OPEN);
  
  //Eyes
  stroke(1);
  fill(255);
  arc(255, 230, 50, 60, 0, 180);
  arc(345, 230, 50, 60, 0, 180);
    //pupil
    noStroke();
    fill(0);
    ellipse(255, 240, 10, 10);
    ellipse(345, 240, 10, 10);
  
  //nose
  stroke(1);
  strokeWeight(3);
  line(300, 270, 320, 320);
  line(320, 320, 300, 330);
  
  //mouth
  stroke(1);
  fill(255);
  triangle(300, 390, 280, 350, 320, 350);
  
  //neck1
  noStroke();
  fill(252, 217, 172);
  rect(275, 400, 50, 75, 10);
  
  //body
  fill(255, 255, 0);
  rect(210, 465, 180, 135);
  triangle(210, 465, 210, 600, 130, 600);
  triangle(390, 465, 390, 600, 470, 600);
  
  fill(255, 0, 0);
  triangle(210, 465, 250, 465, 230, 485);
  triangle(350, 465, 390, 465, 370, 485);
  
  //arms
  fill(255, 0, 0);
  triangle(210, 550, 210, 600, 180, 600);
  triangle(390, 550, 390, 600, 420, 600);
  
  //neck2
  fill(252, 217, 172);
  arc(300, 455, 50, 60, 0, 180);
  
  
  //buttons
  fill(255, 0, 0);
  ellipse(300, 490, 10, 10);
  ellipse(300, 520, 10, 10);
  ellipse(300, 550, 10, 10);
  ellipse(300, 580, 10, 10);
}
