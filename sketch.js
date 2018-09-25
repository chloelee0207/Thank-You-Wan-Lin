function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0, 0, 0);
  //ellipse (width/2,height/2,400,400);
}

function draw() {
  // put drawing code here
  
  //fill(255, 0, 0);
  //ellipse(width/2,height/2,200,200);
  //fill(255, 255, 255);
  //ellipse(280,280,200,200);  

  // fill(255, 0, 0);
  // ellipse(100,100,100,100);
  // fill(0, 255, 0);
  // ellipse(250,250,100,100);
  // fill(0, 0, 255);
  // ellipse(400,400,100,100); 
  fill(random(100,255),random(100,255),random(100,255));
  let xpos = mouseX+random(-50,50);
  let ypos = mouseY+random(-50,50);
  let diameter = 10
  // ellipse (xpos,ypos,diameter,diameter);

 
  fill(random(255),random(255),255);
  textSize(36);
  textAlign(CENTER);
  textStyle(BOLD);
  text('My Catsite',xpos,ypos);
}
