// Rover Object Goes Here
// ======================
var theRover = {
x: 0,
y: 0,
 direction: "N",
  
}
var direction = "N";
// ======================
function turnLeft(rover){
  switch (theRover.direction) {
    case "N":
    theRover.direction = "W";
    break;
    case "W":
    theRover.direction = "S";
    break;
    case "S":
    theRover.direction = "E";
    break;
    case "E":
   theRover.direction = "N";
    break;
  }
  console.log("El Rover va hacia el " + " " + direction);
}


function turnRight(rover){
  switch (theRover.direction) {
    case "N":
    theRover.direction = "E";
    break;
    case "E":
    theRover.direction = "S";
    break;
    case "S":
    theRover.direction = "W";
    break;
    case "W":
    theRover.direction = "N";
    break;
  }
  console.log("El Rover va para" + " " + direction);
}

function moveForward(rover){
  switch (theRover.direction) {
    case "N":
    theRover.y--;
    break;
    case "E":
    theRover.x++;
    break;
    case "S":
    theRover.y++;
    break;
    case "W":
    theRover.x--;
    break;
  }

  console.log("El rover esta en" + " eje X " + theRover.x + " eje Y " + theRover.y);
}
function moveBackward(rover){
  switch (theRover.direction) {
    case "N":
    theRover.y++;
    break;
    case "E":
    theRover.x--;
    break;
    case "S":
    theRover.y--;
    break;
    case "W":
    theRover.x++;
    break;
  }

  console.log("El rover esta en" + " eje X " + theRover.x + " eje Y " + theRover.y);
}
function listacomandos(theRover, comando) {

  for (var i = 0; i < comando.length; i++) {
    var comandos = comando[i];

    switch (comandos) {
      case "l":
        turnLeft(direction.theRover);
      break;
      case "r":
        turnRight(direction.theRover);
      break;
      case "f":
        moveForward(theRover);
      break;
      case "b":
        moveBackward(theRover);
      break;

    }
  }
}


