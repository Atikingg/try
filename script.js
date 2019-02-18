
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var rightPressed = false
var leftPressed = false
var key1 = false
var key2 = false
var persX = 30
var persY = 30
var dx = 4
var dy = 4


bg = new Image()
bg.src = "bg.png"

person = new Image()
person.src = "person.png"

tree1 = new Image()
tree1.src = "tree1.png"



document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)



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




function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawStaff(bg, 0, 0)
    drawStaff(person, persX, persY)
    drawStaff(tree1, 40, 70)

}

function drawStaff(staff, staffX, staffY) {
    ctx.drawImage(staff, staffX, staffY)
}

function processing()
{
    if (rightPressed && persX + 30 < canvas.width)
        persX += dx
    if (leftPressed && persX > 0)
        persX -= dx
    if (key1 && persY  >  0)
        persY -= dy
    if (key2 && persY + 40 < canvas.height)
        persY += dy

}

setInterval(processing, 40)
setInterval(draw, 10)
