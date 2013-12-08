//movement.js
//global variables
var sprite;
var x, y;    //position variables

//constants
var MIN_X = 15;
var MAX_X = 365;
var MIN_Y = 85;
var MAX_Y = 435;
      
function init(){
  sprite = document.getElementById("sprite");
} // end init

function moveSprite(dx, dy){
  var surface = document.getElementById("surface");
 
  x = parseInt(sprite.style.left);
  y = parseInt(sprite.style.top);

  x += dx;
  y += dy;
        
  checkBounds();

  // move ball to new position
  sprite.style.left = x + "px";
  sprite.style.top = y + "px";
        
  //describe position
  var output = document.getElementById("output");
  output.innerHTML = "x: " + x + ", y: " + y;
} // end MoveSprite
      
function checkBounds(){
  //wrap
  if (x > MAX_X){
    x = MIN_X;
  } // end if
  if (x < MIN_X){
    x = MAX_X;
  } // end if
  if (y > MAX_Y){
    y = MIN_Y;
  } // end if
  if (y < MIN_Y){
    y = MAX_Y;
  } // end if
} // end function



	
