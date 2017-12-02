//------------
//System Vars
//------------
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "black";
ctx.font = GAME_FONTS;

//Clear Canvas
ctx.fillStyle = "#AAA";
ctx.fillRect(0, 0, stage.width, stage.height);	

drawUI()

ctx.fillStyle = "#000";

const col1 = 340
const col2 = 440
const col3 = 540
const col4 = 640
const col5 = 740
const col6 = 840

const row1 = 105
const row2 = 185
const row3 = 265
const row4 = 345
const row5 = 425

ctx.fillText('I', col1 + 5, row1)

m = new Militia();
ctx.fillText(m.unitText, col1, row2);

// var gameloop = setInterval(update, TIME_PER_FRAME);
var counter = 0;

//------------
//Game Loop
//------------
function update() {	
	counter++;
	
	
		
	//Draw Timer
	ctx.fillStyle = "#000";
    ctx.fillText(counter, COUNTER_X, COUNTER_Y);
}

function drawUI() {
    drawGrid()
    drawButtons()

    ctx.fillStyle = "#000";
    ctx.fillText('Units', 70, 50)
    ctx.fillText('Units', stage.width - 170, 50)

    ctx.strokeRect(70, 70, 50, 50)
    ctx.fillText('I', 90, 100)

    ctx.strokeRect(70, 150, 50, 50)
    ctx.fillText('M', 85, 180)

    ctx.strokeRect(70, 230, 50, 50)
    ctx.fillText('K', 85, 260)
}

function drawGrid() {
    ctx.fillStyle = "#000";

    // Draw Horizontal lines
    ctx.fillRect(300, 60, 600, 2);
    ctx.fillRect(300, 140, 600, 2);
    ctx.fillRect(300, 220, 600, 2);
    ctx.fillRect(300, 300, 600, 2);
    ctx.fillRect(300, 380, 600, 2);
    ctx.fillRect(300, 460, 600, 2);

    // Draw Vertical lines
    ctx.fillRect(300, 60, 2, 400);
    ctx.fillRect(400, 60, 2, 400);
    ctx.fillRect(500, 60, 2, 400);
    ctx.fillRect(600, 60, 2, 400);
    ctx.fillRect(700, 60, 2, 400);
    ctx.fillRect(800, 60, 2, 400);
    ctx.fillRect(900, 60, 2, 400);
}

function drawButtons() {
    ctx.fillRect(50, stage.height - 125, 150, 40)
    ctx.fillRect(stage.width - 200, stage.height - 125, 150, 40)
    
    ctx.fillStyle = "#fff";
    ctx.fillText('End Turn', 70, stage.height - 100)
    ctx.fillText('End Turn', stage.width - 170, stage.height - 100)
}

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
