let x = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(140, 11, 200);


   x = x+6;
   if (x > width)
     x=x/-2;
  ;
  if (x>width/2)
    rect(160,0,20,x);
  if (x>height/2);
  rect(x,240,20,20);
  
  rect(20,x,20)
  if (x>height/2)
    fill (180,230,12)
  if (x<height/2)
    fill(10,167,190)

  rect(x, x, 20, 20)
  
  
}