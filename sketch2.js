var a;
var sens;
var dist;
var ang;
var posX = [];
var posY = [];
var sensX = [];
var sensY = [];

function setup (){
    createCanvas(500,500);
    background (0);
    frameRate(100);
    colorMode(HSB,500,100,100);
    imageMode(CENTER);
    a=1;
    sens=0.1;
    
    for (i=0;i<50;i++){
        posX[i]= random(width);
        posY[i]= random(height);
        sensX[i]= random(10);
        sensY[i]= random(5);
        }
    }



function draw(){
    
 //   a = a+5*sens;
    //noLoop();
    
  //  for (i=0;i<50;i++){ //équivalent à i=i+1
   //     dist = random(i*10);
    //    ang = random (2*3,1416);
        
        //fill(a,random(100),100);
        //noStroke();
        //ellipse((width/2)+dist*cos(ang),(height/2)+dist*sin(ang),50/i,50/i);
    //  }
   
    for (i=0;i<50;i++){
        noStroke();
        fill(i*10,100,100);
        ellipse(posX [i],posY [i],15,15);
        posX[i]= posX[i] + sensX[i];
        posY[i]= posY[i] + sensY[i];
        if (posX[i]>500||posX[i]<0) {
            sensX[i]=sensX[i]*(-0.9);
            }
        if (posY[i]>500||posY[i]<0) {
            sensY[i]=sensY[i]*(-0.9);
        }
        sensY[i]=sensY[i]+0.1;
      
        
    }

    
    if (mouseIsPressed){
        for (i=0;i<50;i++){
        sensY[i]= sensY[i]-0.5;
        }
    }
    
 //   if (a>500) {
    //    sens=-0,1;
    //}
    
    //if (a<00) {
   //     sens=0,1;
    //}

}
