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

drawGrid()

// var gameloop = setInterval(update, TIME_PER_FRAME);
var counter = 0;

//------------
//Game Loop
//------------
function update()
{	
	counter++;
	
	
		
	//Draw Timer
	ctx.fillStyle = "#000";
    ctx.fillText(counter, COUNTER_X, COUNTER_Y);
}

function drawGrid()
{
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
