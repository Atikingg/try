
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var rightPressed = false
var leftPressed = false
var persX = 0
var persY = 0




person = new Image()
person.src = "person.png"



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function draw()
{
    drawStaff(person, persX, persY)
}

function drawStaff(staff, staffX, staffY) {
  staff.onload = function() {
        ctx.drawImage(staff, staffX, staffY)
    }
}

function processing()
{
    if (rightPressed)
        persX += 8
    if (leftPressed)
        persX -= 8
}

setInterval(processing, 50)
setInterval(draw, 50)

