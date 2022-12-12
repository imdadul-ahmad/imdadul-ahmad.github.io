let img; //declare global variable to hold image object
let bg; //variable to hold nyc background image

//preload() runs once, before all other functions
function preload(){ 
  img = loadImage("super.png"); //load image after uploading to file system
  bg = loadImage("nyc.jpg");
  
}

function setup() {
  createCanvas(2000, 2000);
  noCursor(); //stops cursor from being shown over canvas
}

function draw() {
  // background(220);
  image(bg,0,0,width, height);
  
  //the image function draws the image object into the canvas
  image(img,mouseX-100,mouseY-50,200,100);
  
  //the width attribute of the image is based on the file, not the pixels drawn to the canvas
  console.log(img.width);
}