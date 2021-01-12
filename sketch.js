const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var block1,block2,block3,block4,block5,block6,polygon
var block10,sling
var score =0
var ground,ground1 
var colour;
var backgroundImg

function preload(){
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(900,400);
    
    engine = Engine.create();
    world = engine.world;
    polygon=new Polygon(300,200)
    
    sling= new Slingshot(polygon.body,{x:100,y:200})
    
    ground=new Ground(390,300,250,10)
    ground1= new Ground(700,200,200,10)

    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);

    //set 2 for second stand
    //level one
    blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
    blocks3 = new Block(700,175,30,40);
    blocks4 = new Block(730,175,30,40);
    blocks5 = new Block(760,175,30,40);
    //level two
    blocks6 = new Block(670,135,30,40);
    blocks7 = new Block(700,135,30,40);
    blocks8 = new Block(730,135,30,40);
    //top
    blocks9 = new Block(700,95,30,40);

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 900,
            height: 400,
            showAngleIndicator: true
        }
    });

    Render.run(render);

}

function draw(){

    if(backgroundImg){
        background(backgroundImg)
    }
    
    
    text(mouseX+","+mouseY,mouseX,mouseY)
    text("Drag the polygon to destroy the blocks",300,30);
    text("SCORE : "+score,750,40);
    textSize(10);
    text("Press Space to get a second Chance to Play!!",650 ,350);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();


    fill("white")
    ground1.display();
    ground.display()
    polygon.display()
    sling.display()
    Engine.update(engine)
    text(mouseX+","+mouseY,mouseX,mouseY)
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    blocks6.score();
    blocks7.score();
    blocks8.score();
    blocks9.score();
    drawSprites()
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    var datetime = responseJSON.currentDateTime;
    //console.log(datetime)
    var hour = datetime.slice(11,13);  
    console.log(hour)  
    
    if (hour >= 06 && hour <= 18) {
        bg = "bg2.jpg";
      } 
      else {
        bg = "bg.png";
      }
   
      backgroundImg = loadImage(bg);
      console.log(backgroundImg);

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    //Booyah
    sling.fly()
}

function keyPressed(){
    if(keyCode==32){
        sling.attach(polygon.body)
    }
}
