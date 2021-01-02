const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1;

function setup() {
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    stand1 = new Stand(600,200,300,50);
}

function draw() {
    background(255);
    Engine.update(engine);

    stand1.display();
}