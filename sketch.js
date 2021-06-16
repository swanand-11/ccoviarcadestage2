var ground,iground;
var edges;
var Corona,coronaimg;
function preload(){
   doc1img = loadImage("images/doctor2.png");
   doc2img = loadImage("images/doctor1.png");
   coronaimg = loadImage("images/corona.png");
}

function setup() {
  createCanvas(1200,400);
  ground = createSprite(600,390,width,20);
  iground = createSprite(600,370,width,20);

  edges = createEdgeSprites();
  

  doc = createSprite(600,390,50,50);

  doc.addImage("doctor",doc1img)

  doc.scale = 0.5

  iground.visible = false;

  coronaGroup = new Group()

}

function draw() {
  background(236,152,237);  
if (keyDown(RIGHT_ARROW)) {
  doc.x = doc.x + 5;
  doc.addImage("doctor",doc1img)
}

if (keyDown(LEFT_ARROW)) {
  doc.x = doc.x - 5;
  doc.addImage("doctor",doc2img)
}
doc.bounceOff(edges);
spawncorona();

  drawSprites();
}

function spawncorona(){
  if(frameCount % 60 == 0){
    Corona = createSprite(600,100,10,10);
    Corona.addImage("corona",coronaimg)
    Corona.velocityY = 3;
    Corona.x = Math.round(random(20,1000));
    Corona.scale = 0.15
    Corona.depth = doc.depth;
    doc.depth = doc.depth+1
    //Corona.lifetime = 350;
    coronaGroup.add(Corona);
    coronaGroup.setLifetimeEach(80);
  }
}