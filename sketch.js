const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, polygon_img;

function preload(){
polygon_img=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,390,1200,20)
    stand = new Ground(510,350,320,10);
    stand2 = new Ground(980,200,180,10)
    box1 = new Box(390,320,40,50);
    box2 = new Box(430,320,40,50);
    box3 = new Box(470,320,40,50);
    box4 = new Box(510,320,40,50);
    box5 = new Box(550,320,40,50);
    box6 = new Box(590,320,40,50);
    box7 = new Box(630,320,40,50);
    box8 = new Box(430,270,40,50);
    box9 = new Box(470,270,40,50);
    box10 = new Box(510,270,40,50);
    box11 = new Box(550,270,40,50);
    box12 = new Box(590,270,40,50);
    box13 = new Box(470,220,40,50);
    box14 = new Box(510,220,40,50);
    box15 = new Box(550,220,40,50);
    box16 = new Box(510,170,40,50);
    box17 = new Box(920,180,30,40);
    box18 = new Box(950,180,30,40);
    box19 = new Box(980,180,30,40);
    box20 = new Box(1010,180,30,40);
    box21 = new Box(1040,180,30,40);
    box22 = new Box(950,140,30,40);
    box23 = new Box(980,140,30,40);
    box24 = new Box(1010,140,30,40);
    box25 = new Box(980,100,30,40);
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)
    slingshot=new SlingShot(this.polygon, {x:100,y:200})
    

}

function draw(){
    background("grey");
    Engine.update(engine);
    ground.display();
    stand.display();
    stand2.display()
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}