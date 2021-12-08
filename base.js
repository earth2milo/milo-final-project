



function preload() {
  fRoboto = loadFont('https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf');  
  //spriteSheetTextureG=loadImage('data/sprite_sheet_grinch.png');
  
}

function grinchPreload() {





}

let cols, rows; // colums and rows for building my grid
let scale=20; // my constant
let w=1200; // I fill more than the screen size because of how the 3d rendering functions with 2d drawings
let h=1200;

let terrain = []; // my array that will nest more arrays within it

function setup() {
createCanvas(800,800,WEBGL); // set 800x800 window size to converse performance on all devices when rendering WEB GL
background(120,20,90);

//terrain[cols].push= w/scale;
//terrain[rows].push= h/scale;
cols= w/scale;
rows= h/scale;
for(let y=0; y < rows; y++) {  
  terrain[y]=[];
for(let x=0; x < cols; x++) {
  terrain[y][x]= random(-10,10);
}
}
}

//initial cam position
// this 3d Terrain Simulator is based off Dan Shiffman's Coding Challenge #11 in Processing
// All code needed to be translated in p5js, and I wanted this to act as a solid foundation for texturing the terrain to fit Dr Seuss images.
// link:https://www.youtube.com/watch?v=IKB1hWWedMk

function draw() {
  
  background(120,20,90); 
  stroke(255);
  noFill();
  rotateX(PI/3); // my rotation of 60 degrees 
  translate(-w/2,-h/2); // moving my canvas to fit the grid fully

  for(let y=0; y < rows; y++) { // double for loops for rows and columns
      beginShape(TRIANGLE_STRIP); // theses 2 for loops create a perfect grid
  for(let x=0; x < cols; x++) {
      vertex(x*scale,y*scale, terrain[y][x]); // first variable is x and y, third is Z which will generate the "terrain" or mountains thanks to a random value
      vertex(x*scale,(y+1)*scale,terrain[y][x]);



    }
endShape();
  }
  
}