
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var rightPressed = false
var leftPressed = false
var key1 = false
var key2 = false
var persX = 30
var persY = 30




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
/*
function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        key1 = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        key2 = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        key1 = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        key2 = false;
    }
}
*/
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStaff(person, persX, persY)
}

function drawStaff(staff, staffX, staffY) {
    ctx.drawImage(staff, staffX, staffY)
}

function processing()
{
    if (rightPressed)
        persX += 4
    if (leftPressed)
        persX -= 4
    if (key1)
        persY -= 4
    if (key2)
        persY += 4

}

setInterval(processing, 30)
setInterval(draw, 10)
