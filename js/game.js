//------------
//System Vars
//------------
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "black";
ctx.font = GAME_FONTS;

// Monitor clicks on canvas
stage.addEventListener("click", performAction);

//Clear Canvas
ctx.fillStyle = "#AAA";
ctx.fillRect(0, 0, stage.width, stage.height);	

drawUI()

ctx.fillStyle = "#000";

m = new Militia();
ctx.fillText(m.unitText, COL_A_MID, ROW_2_MID);

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
    ctx.fillRect(COL_A_START, ROW_1_START, 600, 2);
    ctx.fillRect(COL_A_START, ROW_2_START, 600, 2);
    ctx.fillRect(COL_A_START, ROW_3_START, 600, 2);
    ctx.fillRect(COL_A_START, ROW_4_START, 600, 2);
    ctx.fillRect(COL_A_START, ROW_5_START, 600, 2);
    ctx.fillRect(COL_A_START, HORIZ_END, 600, 2);

    // Draw Vertical lines
    ctx.fillRect(COL_A_START, ROW_1_START, 2, 400);
    ctx.fillRect(COL_B_START, ROW_1_START, 2, 400);
    ctx.fillRect(COL_C_START, ROW_1_START, 2, 400);
    ctx.fillRect(COL_D_START, ROW_1_START, 2, 400);
    ctx.fillRect(COL_E_START, ROW_1_START, 2, 400);
    ctx.fillRect(COL_F_START, ROW_1_START, 2, 400);
    ctx.fillRect(VERT_END, ROW_1_START, 2, 400);

    ctx.fillText('a', 340, 50);
    ctx.fillText('b', 440, 50);
    ctx.fillText('c', 540, 50);
    ctx.fillText('d', 640, 50);
    ctx.fillText('e', 740, 50);
    ctx.fillText('f', 840, 50);

    ctx.fillText('1', 275, 105);
    ctx.fillText('2', 275, 185);
    ctx.fillText('3', 275, 265);
    ctx.fillText('4', 275, 345);
    ctx.fillText('5', 275, 425);

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

function performAction(event){
    console.log('X: ' + event.clientX);
    console.log('Y: ' + event.clientY);
}
