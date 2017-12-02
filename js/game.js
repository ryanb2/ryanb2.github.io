//------------
//System Vars
//------------
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "black";
ctx.font = GAME_FONTS;

var selectedUnit = null;

// NOTE: For testing purposes. This will need to be changed once Turns and player 2 are implemented
var player = 1;

// Monitor clicks on canvas
stage.addEventListener("click", performAction);

//Clear Canvas
ctx.fillStyle = "#AAA";
ctx.fillRect(0, 0, stage.width, stage.height);	

drawUI()

ctx.fillStyle = "#000";

m = new Militia();
selectedUnit = m;


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

function performAction(event){
    coordX = event.pageX - stage.offsetLeft;
    coordY = event.pageY - stage.offsetTop;

    console.log('X: ' + coordX);
    console.log('Y: ' + coordY);

    checkEndTurnClick(coordX, coordY);
    checkGridClick(coordX, coordY);
    
}

function checkEndTurnClick(coordX, coordY){
    if(coordX > 50 && coordX < 200 && coordY > stage.height - 125 && coordY < stage.height - 85){
        console.log('player 1 end turn clicked')
    } else if(coordX > stage.width - 200 && coordX < stage.width - 50 && coordY > stage.height - 125 && coordY < stage.height - 85){
        console.log('player 2 end turn clicked')
    }
}

function checkGridClick(coordX, coordY){
    clickInGrid = false;

    var selectedCol = null;
    var selectedColVal = null;

    if(coordX > COL_A_START && coordX < COL_B_START){
        console.log("Column A");
        selectedCol = 'A';
        selectedColVal = COL_A_MID;
        clickInGrid = true;
    }
    else if(coordX > COL_B_START && coordX < COL_C_START){
        console.log("Column B");
        clickInGrid = true;
    }
    else if(coordX > COL_C_START && coordX < COL_D_START){
        console.log("Column C");
        clickInGrid = true;
    }
    else if(coordX > COL_D_START && coordX < COL_E_START){
        console.log("Column D");
        clickInGrid = true;
    }
    else if(coordX > COL_E_START && coordX < COL_F_START){
        console.log("Column E");
        clickInGrid = true;
    }
    else if(coordX > COL_F_START && coordX < VERT_END){
        console.log("Column F");
        selectedCol = 'F';
        selectedColVal = COL_F_MID;
        clickInGrid = true;
    }
    else {
        console.log("X click not in grid");
        clickInGrid = false;
    }

    if(clickInGrid){
        if(coordY > ROW_1_START && coordY < ROW_2_START){
            console.log("Row 1");
            if(player == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_1_MID);
                }
            } else if(player == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_1_MID);
                }
            }
        }
        else if(coordY > ROW_2_START && coordY < ROW_3_START){
            console.log("Row 2");
            if(player == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_2_MID);
                }
            } else if(player == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_2_MID);
                }
            }
            clickInGrid = true;
        }
        else if(coordY > ROW_3_START && coordY < ROW_4_START){
            console.log("Row 3");
            if(player == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_3_MID);
                }
            } else if(player == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_3_MID);
                }
            }
            clickInGrid = true;
        }
        else if(coordY > ROW_4_START && coordY < ROW_5_START){
            console.log("Row 4");
            if(player == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_4_MID);
                }
            } else if(player == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_4_MID);
                }
            }
            clickInGrid = true;
        }
        else if(coordY > ROW_5_START && coordY < HORIZ_END){
            console.log("Row 5");
            if(player == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_5_MID);
                }
            } else if(player == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    ctx.fillText(selectedUnit.unitText, selectedColVal, ROW_5_MID);
                }
            }
            clickInGrid = true;
        }
        else {
            console.log("Y click not in grid")
            clickInGrid = false;
        }
    }

    console.log(clickInGrid);
}
