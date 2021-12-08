let currentCamera;
let camFrame1, camFrame2;

let delta = 0.01;




function preload() {
  fRoboto = loadFont('https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf');	
	spriteSheetTextureG=loadImage('data/sprite_sheet_grinch.png');
	
}

function grinchPreload() {





}




function setup() {
createCanvas(100, 100, WEBGL); // set 800x800 window size to converse performance on all devices when rendering WEB GL
  texture(spriteSheetTextureG);
	
camFrame1=createCamera();
camFrame2=createCamera();
camFrame2.setPosition(30,0,50);
camFrame2.lookAt(0,0,0)
camFrame2.ortho();

  currentCamera=1;
}

//initial cam position

function draw() {
	background(120,20,90);
  camFrame1.lookAt(0,0,0);
 // camFrame1.setPosition(sin(frameCount/60)*200,0,100);

  // every 100 frames switch between 2 cs
	//camera(0,0,0,0,0,0,0,1,0); // my first three variables: Where is the camera's position? my next three: where is the camera looking? My last two values show which way is up
	//camera(width/2, height/2, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);

  if(frameCount % 100 === 0); {
  if(currentCamera === 1) {
    setCamera(camFrame1);
    currentCamera=0;
  } else {
setCamera(camFrame2);
currentCamera=1;
}
  }
  introShapes();

}



function introShapes() {
rotateX(frameCount * 0.01);
  translate(-100, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);

}