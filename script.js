var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')


var persX = 0
var persY = 0
var treeX = 10
var treeY = 40
var dx = 0
var dy = 0
var newX = 0
var newY = 0






bg = new Image()
bg.src = "bg.png"

square = new Image()
square.src = "square.png"

sprites = new Image()
sprites.src = "spriteshit.png"


document.addEventListener("click", clickHandler, false)
document.addEventListener("mousemove", mouseHandler, false)

function mouseHandler(e) {
  coordX = e.clientX
  coordY = e.clientY
}


function clickHandler(e) {
  newX = e.clientX
  newY = e.clientY


}


function drawStaff(staff, cropX, cropY, cropW, cropH, staffX, staffY, staffW, staffH) {
    ctx.drawImage(staff, cropX, cropY, cropW, cropH, staffX, staffY, staffW, staffH)
}



function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(bg, 0, 0, 500, 500)
  drawStaff(square, 0, 0, 10, 10, persX, persY, 10, 10)
  //drawStaff(sprites, 0, 186, 42, 62, 20, 20, 42, 62)
  //drawStaff(sprites, 0, 188, 42, 62, 20, 100, 42, 62)
  //drawStaff(sprites, 0, 188, 42, 62, 20, 100, 42, 62)



  //for (persX; persX < =)


  if (persX == newX && persY == newY) {
    dx = 0
    dy = 0

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

    //console.info("x %d y %d newx %d newy %d dx %d dy %d coordX %d coordY %d", persX, persY, newX, newY, dx, dy, coordX, coordY)


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



setInterval(draw, 5)
//setInterval(processing, 5)
