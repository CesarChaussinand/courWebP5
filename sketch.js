var canvas;
var curseur;
var rot;
var couleur;
var x;
var y;

function setup (){
    canvas = createCanvas(500, 500);
    background (0);
    frameRate(20);
    colorMode(HSB,300,100,100);
    imageMode(CENTER);;
    rot = 0.05;
    curseur = loadImage("toutou.png");
    couleur = 0;
    x = 150;
    y = 0;
   }



function draw(){
    background(0,.03);
    
    push();
    translate(mouseX,mouseY);
    rotate(rot);
    image(curseur,0,0);
    fill(couleur+50,100,100);
    ellipse(x, y, 50, 50);
    pop();
    
    tint(couleur,100,100);
    
    if (mouseIsPressed) {
                   couleur = -50;
    }
    
           background(0,0.05);
    rot = rot + ((mouseY-200)/1000);
    couleur = couleur + 1;

}
