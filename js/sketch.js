var x,y,d,r,speed;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = width/2;
    d = 200;
    r = d/2;
    speed = 10;
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(x, y, d);
    y+= speed;
    if(y > height+r){
        y = (-r)
    }
}