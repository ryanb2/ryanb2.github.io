'use strict';

class Unit {
    constructor(health = 0, attack = 0, movement = [0, 0], position = [-10, -10]) {
        if (this.constructor === Unit) {
            throw new TypeError("Cannot construct abstract class.");
        }
        // Check if all instance methods are implemented.
        // if (this.foo === Abstract.prototype.foo) {
        //     throw new TypeError("Please implement abstract method foo.");
        // }
        this.health = health;
        this.attack = attack;
        this.movement = movement;
        this.position = position;
    }
    // An abstract method.
    // foo() {
    //     // Error Type 6. The child has implemented this method but also called `super.foo()`.
    //     throw new TypeError("Do not call abstract method foo from child.");
    // }
    // initialization goes here
    set unitHealth(newHealth) {
        this.health = newHealth;
    }

    set unitPosition(newPosition) {
        this.position = newPosition;
    }

    get unitPosition() {
        return this.position;
    }

}

class Pawn extends Unit {
    constructor() {
        super(1, 1, [1, 0]);
        this.unitText = 'I';
    }  

    set unitPosition(newPosition) {
        this.position = newPosition;
    }
    
    drawUnit(ctx, color, unitText = 'M', positionX, positionY) {
        ctx.fillStyle = color;
        ctx.fillText = (unitText, positionX, positionY);
    }
}

class Militia extends Unit {  
    constructor() {
        super(1, 1, [1, 1]);
        this.unitText = 'M';
    }  

    set unitPosition(newPosition) {
        this.position = newPosition;
    }
    
    drawUnit(ctx, color, unitText = 'M', positionX, positionY) {
        ctx.fillStyle = color;
        ctx.fillText = (unitText, positionX, positionY);
    }
}

class Knight extends Unit {
    constructor() {
        super(2, 2, [1, 0]);
        this.unitText = 'K';
    }  

    set unitPosition(newPosition) {
        this.position = newPosition;
    }
    
    drawUnit(ctx, color, unitText = 'M', positionX, positionY) {
        ctx.fillStyle = color;
        ctx.fillText = (unitText, positionX, positionY);
    }
}