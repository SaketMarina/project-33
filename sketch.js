var bg, bgImg;
var snowflake, snowflakeImg;
var character1, character1Img;
var ground, wall1, wall2;

function preload() {
  bgImg = loadImage("snow2.jpg");
  snowflakeImg = loadImage("snow4.webp");
  character1Img = loadImage("snowman.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.scale = 1.4;
  bg.addImage(bgImg);

  character1 = createSprite(windowWidth/2, windowHeight - 100);
  character1.addImage(character1Img);
  character1.scale = 0.5;
  character1.velocityX = 5; 

  ground = createSprite(windowWidth/2, windowHeight, windowWidth, 1);
  ground.visible = false;
  wall1 = createSprite(5, windowHeight/2, 1, windowHeight);
  wall1.visible = false;
  wall2 = createSprite(windowWidth - 5, windowHeight/2, 1, windowHeight);
  wall2.visible = false;
}

function draw() {
  background("lightblue");  
  drawSprites();

  character1.collide(ground);
  
  character1.bounceOff(wall1);
  character1.bounceOff(wall2);
  
  console.log(character1.y)

  snowFall();
}

function snowFall() {
  if (frameCount % 40 === 0) {
  snowflake = createSprite(Math.round(random(50, windowWidth - 50)), 50);
  snowflake.addImage(snowflakeImg);
  snowflake.velocityY = 4;
  snowflake.scale = random(0.1, 0.3);
 }
}