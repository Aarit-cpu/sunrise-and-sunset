// made by a user from here called Sorcey

var sunYpos = 500;

function setup() {
	createCanvas(800, 500);
}

function draw() {
	background(0, 4, frameCount);

	var c;
	noStroke();

	//SUN
	c = color(255, 212, 0);
	fill(c);
	ellipseMode(CENTER);
	ellipse(400, sunYpos, 300);
	if (sunYpos > 250)
		sunYpos--;

	//MOUNTAIN CENTER
	c = color(61, 41, 28);
	fill(c);
	triangle(350, 220, 600, 370, 130, 370);

	//MOUNTAIN LEFT
	c = color(81, 47, 25);
	fill(c);
	triangle(150, 215, 500, 380, -150, 380);

	//MOUNTAIN RIGHT
	c = color(102, 52, 20);
	fill(c);
	triangle(600, 200, 930, 400, 300, 400);

	//WATER
	c = color(95, 189, 204);
	fill(c);
	rect(0, 380, 800, 120);
}