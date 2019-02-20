
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var rightPressed = false
var leftPressed = false
var key1 = false
var key2 = false
var persX = 30
var persY = 30
var treeX = 10
var treeY = 40
var dx = 0
var dy = 0
var newX = 0
var newY = 0
var x = 0



bg = new Image()
bg.src = "bg.png"

person = new Image()
person.src = "spriteshit.png"

tree = new Image()
tree.src = "spriteshit.png"

sprites = new Image()
sprites.src = "spriteshit.png"



document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

document.addEventListener("click", clickHandler, false)
document.addEventListener("mousemove", mouseHandler, false)


function mouseHandler(e) {
  mouseX = e.clientX
  mouseY = e.clientY



}


function clickHandler(e) {
  newX = e.clientX
  newY = e.clientY


}



function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        key1 = true
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        key2 = true
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        key1 = false
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        key2 = false
    }
}




function animateSprite() {


}




function drawStaff(staff, cropX, cropY, cropW, cropH, staffX, staffY, staffW, staffH) {
    ctx.drawImage(staff, cropX, cropY, cropW, cropH, staffX, staffY, staffW, staffH)
}



function draw()
{

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(bg, 0, 0, 500, 500)

  drawStaff(sprites, 0, 186, 42, 62, 20, 20, 42, 62)
  drawStaff(sprites, 0, 188, 42, 62, 20, 100, 42, 62)
  drawStaff(sprites, 0, 188, 42, 62, 20, 100, 42, 62)
  drawStaff(sprites, x, 0, 42, 62, persX, persY, 42, 62)

}





function processing()
{


  /*
    if (rightPressed && persX + 30 < canvas.width)
        persX += dx
    if (leftPressed && persX > 0)
        persX -= dx
    if (key1 && persY  >  0)
        persY -= dy
    if (key2 && persY + 40 < canvas.height)
        persY += dy
//control keys
*/

/*
    if (persX < newX)
          persX++
    if (persY < newY)
          persY++
    if (persX > newX)
          persX--
    if (persY > newY)
          persY--
*/

//mouse up down
  if (Math.abs(newX - persX) < Math.abs(newY - persY)) {
      dx = (newX - persX)/(newY - persY)
      dy = 1
  }
  if (Math.abs(newX - persX) > Math.abs(newY - persY)) {
      dx = 1
      dy = (newY - persY)/(newX - persX)
  }
  if (Math.abs(newX - persX) == Math.abs(newY - persY)) {
      dx = 1
      dy = 1
  }
  if (persX == newX && persY == newY) {
    dx = 0
    dy = 0
  }

  if (newX < persX && dx > 0) {
    dx = -dx
  }
  if (newY < persY && dy > 0) {
    dy = -dy
  }

   persX += dx
   persY += dy

// click


}



setInterval(animateSprite, 30)
setInterval(processing, 30)
setInterval(draw, 30)
