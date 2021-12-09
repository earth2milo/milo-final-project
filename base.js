let grass;
let pg;
let pg2;

const startTimer = 120
let secs = startTimer;
let frames = 60;




function preload() {
  fRoboto = loadFont('https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf');
  //spriteSheetTextureG=loadImage('data/sprite_sheet_grinch.png');
  grass = loadImage('data/Grass.png');
  hump = loadImage('data/hump.png');

}

function grinchPreload() {





}

let cols, rows; // colums and rows for building my grid
let scale = 20; // my constant
let w = 1400; // I fill more than the screen size because of how the 3d rendering functions with 2d drawings
let h = 1400;

let flying = 0;

let terrain = []; // my array that will nest more arrays within it

function setup() {
  createCanvas(800, 800, WEBGL); // set 800x800 window size to converse performance on all devices when rendering WEB GL
  frameRate(frames);
  //background(120,20,90);
  //textureWrap(CLAMP,0);
  //pg=createGraphics(600,600);
  //grass=createImage(400,400);
  cols = w / scale;
  rows = h / scale;

}

//initial cam position
// this 3d Terrain Simulator is based off Dan Shiffman's Coding Challenge #11 in Processing
// All code needed to be translated in p5js, and I wanted this to act as a solid foundation for texturing the terrain to fit Dr Seuss images.
// link:https://www.youtube.com/watch?v=IKB1hWWedMk

function draw() {
  if (frameCount <= 1800) {
    flying -= 0.1;
  }


  background(11, 13, 250);
  //stroke(23,250,23);
  stroke(0);
  fill(23, 250, 118);
  rotateX(PI / 2.15); // my rotation of 60 degrees 
  translate(-w / 2, -h / 2); // moving my canvas to fit the grid fully

  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    terrain[y] = [];
    for (let x = 0; x < cols; x++) {
      //terrain[y][x]= random(-10,10);
      terrain[y][x] = map(noise(xoff, yoff), 0, 1, -10, 30); // my noise function essentially will help my terrain look more "organic" as one random value will be surrounded by related value and so forth.

      xoff += 0.1; // to make my perlin noise values more structued, i make a xoff and yoff values to help structure the terrain consistently
    }
    yoff += 0.1;
  }

  for (let y = 0; y < rows - 1; y++) { // double for loops for rows and columns
    //texture(grass);
    //specularMaterial(20);
    //fill("#4B8740");
    //createGraphics(600,600,WEBGL);
    beginShape(TRIANGLE_STRIP); // theses 2 for loops create a perfect grid
    for (let x = 0; x < cols; x++) {
//fill(23,250,23);
      vertex(x * scale, y * scale, terrain[y][x]); // first variable is x and y, third is Z which will generate the "terrain" or mountains thanks to a random value

     vertex(x * scale, (y + 1) * scale, terrain[y + 1][x]);



    }
    endShape();
  }


}






class movingImages  {

constructor() {



}







}