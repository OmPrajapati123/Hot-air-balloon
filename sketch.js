var balloon
var hab1 , hab2 , hab3 

function preload(){

balloon = loadImage("b1.png");
hab1 = loadImage("b2.png");
hab2 = loadImage("b3.png");
hab3 = loadImage("b4.png");


}
function setup() {
  createCanvas(500,500);
  database = firebase.database
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(playerCount === 4){
    game.update(1)
  }
  if(playerCount === 1){
    clear();
    game.play();
  }
  if(playerCount === 2){
    game.end();
  }

 if(keyDown(LEFT_ARROW)){
   balloon.x = balloon.y -10
 }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.y +10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10
  }

  if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon", hab2);
    balloon.scale = balloon.scale -0.01;
  }
 
 
 balloon.display();
  hab1.display();
  hab2.display();
  hab3.display();

}

function updateHeight(x,y){
database.ref('balloon/height').set({
 'x': height.x + x,
 'y': height.y + y
})
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}