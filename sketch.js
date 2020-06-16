const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1;
var box2;
var box3;
var box4;
var box5;

var pig1;
var pig2;

var log1;
var log2;
var log3;
var log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(850,365,70,70);
    box2 = new Box(1010,365,70,70);
    box3 = new Box(850,300,70,70);
    box4 = new Box(1010,300,70,70);
    box5 = new Box(930,260,70,70);

    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(930,365);
    pig2 = new Pig(930,300);

    log1 = new Log(930,310,250,PI/2);
    log2 = new Log(930,285,250,PI/2);
    log3 = new Log(920,260,150,PI/7);
    log4 = new Log(970,260,150,-PI/7);

    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    text(mouseX + ":" + mouseY,900,100);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();


}