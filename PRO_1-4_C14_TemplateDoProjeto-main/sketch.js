var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,arrowGroup,redB,blueB,greenB,pinkB;
var play = 1
var end = 0
var gameState = play
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  green_balloonImage = loadImage("green_balloon0.png");
  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_balloon0.png");
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0
  redB = new Group();  
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
   arrowGroup = new Group();
}

function draw() {
 background(0);
 if(gameState === play){
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
    bow.y = World.mouseY
    if (keyDown("space")) {
      createArrow();
      var select_balloon = Math.round(random(1,4));
    }
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: redBalloon();
    break;
    case 2: blueBalloon();
    break;
    case 3: greenBalloon();
    break;
    case 4: pinkBalloon();
    break;
    default:break;
   }
  }
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    gameState=end
   }
    if(arrowGroup.isTouching(greenB)){
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score = score+3
    }
    if(arrowGroup.isTouching(blueB)){
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score = score+2
    }
    if(arrowGroup.isTouching(pinkB)){
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score = score+1
    }
 }  
   if (gameState === end) {
    bow.destroy();
    scene.velocityX = 0;
  }
    
  drawSprites();
  text("Pontos: "+ score, 300,50);
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  //crieSprite para o balão
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  blue.addImage(blue_balloonImage);
  // adicione velocidade para fazer o balão se mover
  blue.velocityX = 3;
  // mudar a dimensão do balão
  blue.scale = 0.1;
  // atriubua tempo de vida ao balão
  blue.lifetime = 150;
  blueB.add(blue);
}

function greenBalloon() {
  //crieSprite para o balão
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  green.addImage(green_balloonImage);
  // adicione velocidade para fazer o balão se mover
  green.velocityX = 3;
  // mudar a dimensão do balão
  green.scale = 0.1;
  // atriubua tempo de vida ao balão
  green.lifetime = 150;
  greenB.add(green);
}

function pinkBalloon() {
 //crieSprite para o balão
 var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
 //adicioneImagem para o balão
 pink.addImage(pink_balloonImage);
 // adicione velocidade para fazer o balão se mover
 pink.velocityX = 3;
 // mudar a dimensão do balão
 pink.scale = 0.1;
 // atriubua tempo de vida ao balão
 pink.lifetime = 150;
 pinkB.add(pink);
}
