const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var backgroundImg
var orbit = false
var ballImg
var beamImg
var smallBall;
var button;
var beam1, beam2, beam3, beam4, beam5, beam6,  beam7,  beam8,  beam9,  beam10,  beam11,  beam12,  beam13,  beam14   
var smallBeam1, smallBeam2, smallBeam3
var leftBeam,rightBeam,topBeam,bottomBeam,rightBeam2
var pit,home
var gamestate = 0

function preload(){
  backgroundImg = loadImage("./assets/background.png")
  beamImg = loadImage("./assets/beam2.png")
  ballImg = loadImage("./assets/ball.png")
  beam1Img = loadImage("./assets/beam.png")
}

function setup() {
  var canvas = createCanvas(1200, 800);

  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(975, 40, 40, 40);
  smallball = new SmallBall(100, 40, 20, 20);

  beam1 = new Beam(975, 150, 250, 35);
  beam2 = new Beam(673, 150, 250, 35);
  beam3 = new Beam(205, 150, 500, 35);
 
  beam4 = new Beam(200, 300, 200, 35);
  beam5 = new Beam(485, 300, 250, 35);
  beam6 = new Beam(887, 300, 425, 35)

  beam7 = new Beam(200, 450, 500, 35);
  beam8 = new Beam(600, 450, 350, 35);
  beam9 = new Beam(980, 450, 225, 35);

  beam10 = new Beam(200, 600, 200, 35);
  beam11 = new Beam(485, 600, 250, 35);
  beam12 = new Beam(887, 600, 425, 35);

  beam13 = new Beam(300, 750, 600, 60);
  beam14 = new Beam(887, 750, 425, 60);


  smallBeam1 = new SmallBeam(824, 166, 50, 3);
  smallBeam2 = new SmallBeam(332, 316, 62, 3);
  smallBeam3 = new SmallBeam(640, 316, 67, 3);
  smallBeam4 = new SmallBeam(332, 616, 67, 3);
  smallBeam5 = new SmallBeam(640, 616, 67, 3);

  pit = new SmallBeam(1150, 779, 100, 3);
  home = new SmallBeam(650, 779, 100, 3);

  leftBeam = new Beam(0, 400, 10, 800);
  rightBeam2 = new Beam(1096, 455, 10, 645);
  rightBeam = new Beam(1199, 400, 10, 800);
  topBeam = new Beam(600, 1, 1200, 10);
  bottomBeam = new Beam(600, 800, 1200, 10);


  //ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  //blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  //blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  //button = createButton("Click to Blow");
  //button.position(width / 2, height - 100);
  //button.class("blowButton");

  //button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(59);
  //background.addImage("backgroundImg")
  image(backgroundImg, 0, 0, width, height);

  

//Should detect if the ball is off the screen and then change var orbit to 
  
  if(ball.body.position.x > 1200 || ball.body.position.x < 0 || ball.body.position.y > 800 || ball.body.position.y < 0  ) {
    orbit = true
    ball.body.position.x = 975
    ball.body.position.y = 40
    ball.body.velocity.x = 0
    ball.body.velocity.y = 0
  }
  


// if orbit is true show message 
if(orbit === true){
  console.log("Orbit")
}


var collision = Matter.SAT.collides(ball.body,pit.body)
      if(collision.collided){
        console.log("pit")
        gamestate = 2 
        console.log(gamestate)

        if(gamestate = 2){
          fill("white")
          text("You have gone into the pit, you loose.",300,10)
          ball.body.velocityX = 0
          ball.body.velocityY = 0
        }
      }

      var collision = Matter.SAT.collides(ball.body,home.body)
      if(collision.collided){
        console.log("home")
        gamestate = 1 
        console.log(gamestate)
      }



    console.log(gamestate)


  //if ball collide with home show message you will 
  /*if(ball.collide(home))
  console.log("home")
  */

  //console.log("ball x is:", ball.body.position.x)
  //console.log("ball y is:", ball.body.position.y)
  //console.log("ball velocity x is:", ball.body.velocity.x)
  //console.log("ball velocity y is:", ball.body.velocity.y)

  Engine.update(engine);

  //blower.show(); 
  //blowerMouth.show();
  push();
  fill("brown");
  rectMode(CENTER);
  //rect(beam1.position.x, ground.position.y, width * 2, 1);
  pop();
  
  ball.show();

  beam1.show()
  image(beamImg)
  beam2.show()
  beam3.show()
  beam4.show()
  beam5.show()
  beam6.show()
  beam7.show()
  beam8.show()
  beam9.show()
  beam10.show()
  beam11.show()
  beam12.show()
  beam13.show()
  beam14.show()
  smallBeam1.show()
  smallBeam2.show()
  smallBeam3.show()
  smallBeam4.show()
  smallBeam5.show()

  smallball.show()

  leftBeam.show()
  rightBeam.show()
  rightBeam2.show()
  topBeam.show()
  bottomBeam.show()

  pit.show()
  home.show()

  /*
  if keyIsDown(UP_ARROW){
  upForce()
    }
 */
    //left
    if (keyCode === 37){
      leftForce()
      }
    //right
    if (keyCode === 39){
      rightForce()
      }
    //up
    if (keyCode === 38){
      upForce()
      }
    //down
    if (keyCode === 34){
      downForce()
    }
}

function upForce(){
	Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.001})
  }
  
function downForce(){
	Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.001})
  }

function leftForce(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:-0.001,y:0})
  }

function rightForce(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.001,y:0})
}

function control(){
	if (keyPressed = UP_ARROW){
  upForce()
  }
	else
	if (keyIsDown = RIGHT_ARROW){
	rightForce()
  }
	else
  if (keyCode === 37){
	leftForce()
  }
  else
  if (keyCode === DOWN_ARROW){
  downForce()
  } 
  
}




