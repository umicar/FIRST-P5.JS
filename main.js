function preload(){
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(400,300);
    img=createCapture(VIDEO);
    img.hide();
    filter_color="";
}

function draw(){
    image(img,150,125,300,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(100,100,50);
    circle(100,350,50);
    circle(500,100,50);
    circle(500,350,50);
    fill(0,255,0);
    stroke(0,255,0);
    rect(125,80,350,20);
    rect(125,340,350,20);
    rect(100,100,20,250);
    rect(500,100,20,250);
   
   
   
}

function take_snapshot(){
    save('family.jpg');
}