const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var standvar;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30;
var destroyer1;
var sling;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  destroyer1 = new box(150, 150, 40);
  standvar = new stand(350, 380, 350, 60)
  //bottom layer
  b1 = new block(350,330, 50, 50);
  b2 = new block(400,330, 50, 50);
  b3 = new block(300,330, 50, 50);
  b4 = new block(350,330, 50, 50);
  b5 = new block(250,330, 50, 50);
  b6 = new block(500,330, 50, 50);
  b7 = new block(200,330, 50, 50);
  b8 = new block(450,330, 50, 50);
  //2nd layer
  b9 = new block(225,280, 50, 50);
  b10 = new block(275,280, 50, 50);
  b11 = new block(325,280, 50, 50);
  b12 = new block(375,280, 50, 50);
  b13 = new block(425,280, 50, 50);
  b14 = new block(475,280, 50, 50);
//3rd layer
b15 = new block(250,230, 50, 50);
b16 = new block(300,230, 50, 50);
b17 = new block(350,230, 50, 50);
b18 = new block(400,230, 50, 50);
b19 = new block(450,230, 50, 50);
//4th layer
b20 = new block(275,180, 50, 50);
b21 = new block(325,180, 50, 50);
b22 = new block(375,180, 50, 50);
b23 = new block(425,180, 50, 50);
//5th layer
b24 = new block(300, 130, 50, 50);
b25 = new block(350, 130, 50, 50);
b26 = new block(400, 130, 50, 50);
//6th layer
b27 = new block(325, 80, 50, 50);
b28 = new block(375, 80, 50, 50);
//Top layer
b29 = new block(350, 30, 50, 50)

sling = new SlingShot(destroyer1.body, {x: 150, y: 150});
}

function draw() {
  background(0);  
  drawSprites();
  standvar.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  //b30.display();

  destroyer1.display();
  sling.display();
};

function mouseDragged(){
  Matter.Body.setPosition(destroyer1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}