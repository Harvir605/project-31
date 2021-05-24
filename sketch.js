const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // making ground
    ground1 = new Ground(600,395,1200,10);
    ground2 = new Ground(100,250,100,10);
    ground3 = new Ground(700,190,150,10);
    ground4 = new Ground(1000,300,150,10);
    
    // polygon
    polygon = new Box(105,235,40,40);

    //boxes
    box1 = new Obs(750,100,50,50);
}
function draw(){
    background(251,188,100);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    polygon.display();

    box1.display();
}