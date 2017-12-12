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
        this.nextPosition;
        this.canMove = true;
    }
    // An abstract method.
    // foo() {
    //     // Error Type 6. The child has implemented this method but also called `super.foo()`.
    //     throw new TypeError("Do not call abstract method foo from child.");
    // }
    // initialization goes here

    get nextPosition() {
        var movementArray = this.movement;
        var positionArray = this.position;
        var newPosition = []
        for(var i = 0; i < movementArray.length; i++){
            newPosition[i] = movementArray[i] + positionArray[i];
        }
        return newPosition;
    }

}

class Pawn extends Unit {
    constructor() {
        super(1, 1, [1, 0]);
        this.unitText = 'I';
    }  
}

class Militia extends Unit {  
    constructor() {
        super(1, 1, [1, 1]);
        this.unitText = 'M';
    }  
}

class Knight extends Unit {
    constructor() {
        super(2, 2, [1, 0]);
        this.unitText = 'K';
    }  
}