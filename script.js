var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

//var rightPressed = false
//var leftPressed = false
//var key1 = false
//var key2 = false
var persX = 0
var persY = 0
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


document.addEventListener("click", clickHandler, false)



function clickHandler(e) {
  newX = e.clientX
  newY = e.clientY


}


function drawStaff(staff, cropX, cropY, cropW, cropH, staffX, staffY, staffW, staffH) {
    ctx.drawImage(staff, cropX, cropY, cropW, cropH, staffX, staffY, staffW, staffH)
}



function draw()
{

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(bg, 0, 0, 500, 500)
  drawStaff(sprites, x, 0, 42, 62, persX, persY, 42, 62)
  drawStaff(sprites, 0, 186, 42, 62, 20, 20, 42, 62)
  drawStaff(sprites, 0, 188, 42, 62, 20, 100, 42, 62)
  drawStaff(sprites, 0, 188, 42, 62, 20, 100, 42, 62)



  if (persX == newX && persY == newY) {
    
  }
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


  if (newX < persX && dx > 0)
    dx = -dx

  if (newY < persY && dy > 0)
    dy = -dy


    persX += dx
    persY += dy
// click

    console.log(persX, persY, newX, newY, dx, dy)


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

}



setInterval(draw, 30)
//setInterval(processing, 5)
