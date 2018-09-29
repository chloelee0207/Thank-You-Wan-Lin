let rowHeight;
let xposSushi = [];
let yposSushi = [];
let imgSushi = [];
let xdir = [];
let sushiWidth;
let sushiHeight;
let numSushiPerRow = 7;
let numRows = 12;
let sushiSpeed = 3;

function preload() {
  myFont = loadFont('Kalam-Bold.ttf');
  sushi1 = loadImage('sushi1.png');
  sushi2 = loadImage('sushi2.png');
  sushi3 = loadImage('sushi3.png');
  sushi4 = loadImage('sushi4.png');
  sushiPictures = [sushi1,sushi2,sushi3,sushi4];
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(50);
  textFont(myFont);

  rowHeight = windowHeight / 12;
  sushiWidth = rowHeight*0.9;
  sushiHeight = rowHeight * 0.5;

  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numSushiPerRow; i++) {
      xposSushi.push(i * width / numSushiPerRow + random(width/numSushiPerRow));
      yposSushi.push(j * rowHeight + rowHeight/2 - sushiHeight/2);
      imgSushi.push(random(sushiPictures));
      if (j % 2 == 0) {
        xdir.push(sushiSpeed);
      } else {
        xdir.push(-sushiSpeed);
      }
    }
  }
}

function draw() {
  background(50);
  
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numSushiPerRow; i++) {
      let index = (j * numSushiPerRow) + i;
      xposSushi[index] = xposSushi[index] + xdir[index];
      if (xposSushi[index] > width) {
        xdir[index] = -xdir[index];
        yposSushi[index] = yposSushi[index] + rowHeight;
      } else if (xposSushi[index] < 0) {
        xdir[index] = -xdir[index];
        yposSushi[index] = yposSushi[index] + rowHeight;
      }
    
      // Teleport
      if (yposSushi[index] > numRows * rowHeight) {
        yposSushi[index] = rowHeight/2 - sushiHeight/2;
      }
      image(imgSushi[index], xposSushi[index], yposSushi[index], sushiWidth, sushiHeight);
    }
  }

  stroke(random(255), random(255), random(255));
  line(0, rowHeight, windowWidth, rowHeight);
  line(0, rowHeight * 2, windowWidth, rowHeight * 2);
  line(0, rowHeight * 3, windowWidth, rowHeight * 3);
  line(0, rowHeight * 4, windowWidth, rowHeight * 4);
  line(0, rowHeight * 8, windowWidth, rowHeight * 8);
  line(0, rowHeight * 9, windowWidth, rowHeight * 9);
  line(0, rowHeight * 10, windowWidth, rowHeight * 10);
  line(0, rowHeight * 11, windowWidth, rowHeight * 11);
  // line(0, rowHeight*12, windowWidth, rowHeight*12);
  fill(50);
  rect(-10, 4 * rowHeight, width+10, 4 * rowHeight);

  fill(random(255), random(255), random(255));
  textSize(72);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text('Thank You, Wan Lin', windowWidth / 2, windowHeight / 2);
}
