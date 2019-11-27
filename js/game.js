/*
    Project: Goal clicker
    Filename: game.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description: Core game logic for the Goal clicker game
*/

class Game {
    score;
    currentTime;

    timeLimit;
    happiness;
    productivity;

    generator;


    constructor(timeLimit, happiness, productivity){
        //Initialize vaariable from parameters
        this.timeLimit = timeLimit;
        this.happiness = happiness;
        this.productivity = productivity;
        
        //Initialize variables
        this.score = 0;
        this.currentTime = 0;
        this.generator = new Generator();
    }

    get score() {
        return this.score;
    }
    Update(time) {
        
        
    }

    GenerateGoal(){

    }
}

