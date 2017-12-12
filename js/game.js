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
var spawnedUnit = null;
var playerTurn = 1;
var spawnedObjects = [];

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
    drawUnits()    
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

function drawUnits() {
    ctx.fillStyle = "#000";
    ctx.fillText('Units', 70, 50)
    ctx.fillText('Units', stage.width - 170, 50)

    ctx.strokeRect(70, 70, 50, 50)
    ctx.fillText('I', 90, 100)

    ctx.strokeRect(70, 150, 50, 50)
    ctx.fillText('M', 85, 180)

    ctx.strokeRect(70, 230, 50, 50)
    ctx.fillText('K', 85, 260)

    ctx.strokeRect(stage.width - 170, 70, 50, 50)
    ctx.fillText('I', stage.width - 150, 100)

    ctx.strokeRect(stage.width - 170, 150, 50, 50)
    ctx.fillText('M', stage.width - 155, 180)

    ctx.strokeRect(stage.width - 170, 230, 50, 50)
    ctx.fillText('K', stage.width - 155, 260)
}

function performAction(event){
    coordX = event.pageX - stage.offsetLeft;
    coordY = event.pageY - stage.offsetTop;

    console.log('X: ' + coordX);
    console.log('Y: ' + coordY);

    checkEndTurnClick(coordX, coordY);
    checkUnitClick(coordX, coordY);
    checkGridClick(coordX, coordY);
    
}

function checkEndTurnClick(coordX, coordY){
    if(coordX > 50 && coordX < 200 && coordY > stage.height - 125 && coordY < stage.height - 85){
        console.log('player 1 end turn clicked')
        selectedUnit = null;
        playerTurn = 2;
    } else if(coordX > stage.width - 200 && coordX < stage.width - 50 && coordY > stage.height - 125 && coordY < stage.height - 85){
        console.log('player 2 end turn clicked')
        actionPhase()
        selectedUnit = null;
        playerTurn = 1;
    }
}

function actionPhase() {
    // updatePosition() of each Unit (do not redraw Units yet)
    for(var i = 0; i < spawnedObjects.length; i++){
        console.log(spawnedObjects[i]);

        // check if any new positions are the same (two Units attack each other)
            // if duplicate position, flag Unit as "Do not move"
            // resolve attack by reducing health and destoying Units

        // var sorted_arr = spawnedObjects.slice().sort(); 
        
        // var results = [];
        // for (var i = 0; i < sorted_arr.length - 1; i++) {
        //     if (sorted_arr[i + 1] == sorted_arr[i]) {
        //         results.push(sorted_arr[i]);
        //     }
        // }
        
        // console.log(results);

        // draw Units at their new positions
        if(spawnedObjects[i].canMove){
            redrawUnit(spawnedObjects[i])
            spawnedObjects[i].position = spawnedObjects[i].nextPosition;
        }

    }

}

function redrawUnit(unit){
    ctx.fillStyle = "#AAA";
    ctx.fillText(unit.unitText, unit.position[0], unit.position[1]);
    ctx.fillStyle = '#000';
    ctx.fillText(unit.unitText, unit.nextPosition[0], unit.nextPosition[1]);
}


function checkUnitClick(coordX, coordY){
    if(playerTurn == 1){
        if(coordX > 70 && coordX < 120 ){
            if(coordY > 70 && coordY < 120){
                console.log('player 1 unit 1 clicked')
                selectedUnit = 'pawn'
            } else if(coordY > 150 && coordY < 200){
                console.log('player 1 unit 2 clicked')
                selectedUnit = 'militia'
            } else if(coordY > 230 && coordY < 280){
                console.log('player 1 unit 3 clicked')
                selectedUnit = 'knight'
            }
        }
    }  
    if(playerTurn == 2){
        if(coordX > stage.width - 170 && coordX < stage.width - 120 ){
            if(coordY > 70 && coordY < 120){
                console.log('player 2 unit 1 clicked')
                selectedUnit = 'pawn'
            } else if(coordY > 150 && coordY < 200){
                console.log('player 2 unit 2 clicked')
                selectedUnit = 'militia'
            } else if(coordY > 230 && coordY < 280){
                console.log('player 2 unit 3 clicked')
                selectedUnit = 'knight'
            }
        }
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
            if(playerTurn == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [0, 1]);                    
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_1_MID);
                }
            } else if(playerTurn == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [5, 1]);
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_1_MID);
                }
            }
        }
        else if(coordY > ROW_2_START && coordY < ROW_3_START){
            console.log("Row 2");
            if(playerTurn == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [0, 2]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_2_MID);
                }
            } else if(playerTurn == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [5, 2]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_2_MID);
                }
            }
            clickInGrid = true;
        }
        else if(coordY > ROW_3_START && coordY < ROW_4_START){
            console.log("Row 3");
            if(playerTurn == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [0, 3]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_3_MID);
                }
            } else if(playerTurn == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [5, 3]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_3_MID);
                }
            }
            clickInGrid = true;
        }
        else if(coordY > ROW_4_START && coordY < ROW_5_START){
            console.log("Row 4");
            if(playerTurn == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [0, 4]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_4_MID);
                }
            } else if(playerTurn == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [5, 4]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_4_MID);
                }
            }
            clickInGrid = true;
        }
        else if(coordY > ROW_5_START && coordY < HORIZ_END){
            console.log("Row 5");
            if(playerTurn == 1 && selectedCol == 'A'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [0, 5]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_5_MID);
                }
            } else if(playerTurn == 2 && selectedCol == 'F'){
                if(selectedUnit != null){
                    spawnedUnit = createUnit(selectedUnit, [5, 5]); 
                    ctx.fillText(spawnedUnit.unitText, selectedColVal, ROW_5_MID);
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

function createUnit(selectedUnit, position){
    switch(selectedUnit){
        case 'pawn':
            p = new Pawn();
            p.position = position;
            spawnedObjects.push(p);
            return p;
            break;
        case 'militia':
            m = new Militia();
            m.position = position;
            spawnedObjects.push(m);
            return m;
            break;
        case 'knight':
            k = new Knight();
            k.position = position;
            spawnedObjects.push(k);
            return k;
            break;
    }
}
    
