let img;

function preload() {
  img = loadImage('images./jpg');
}

function setup() {
  createCanvas(400, 400);
  img.resizeBy(250,100)
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

function draw() {
  background(220);
    image(img, 0, 0);
  }