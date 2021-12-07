function preload() {
	
	
	
}



document.oncontextmenu = () => false; // disables the mouse right to pop-up a context menu to allow easier camera control.
function setup() {
createCanvas(800, 800, WEBGL); // set 800x800 window size to converse perforance on all devices when rendering WEB GL
createEasyCam(); // initiating my p5.easycam plugin.
}



function draw() {
	background(120,20,90);
	lights(); // my lighting
	box(200);
	
}