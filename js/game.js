/*
    Project: Goal clicker
    Filename: game.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description: Core game logic for the Goal clicker game
*/

const GAME_STATE = {
    PLAY_STATE: 0,
    WIN_SATE: 1,
    LOSE_STATE: 2
}

class Game {

    constructor(timeLimit, happiness, productivity){
        //Initialize variable from parameters
        this.timeLimit = timeLimit;
        this.happiness = happiness;
        this.productivity = productivity;
        
        //Initialize variables
        this.goalJuice = 0;
        this.goalJuiceMultiplier = 1;
        this.score = 0;
        this.currentTime = this.timeLimit;
        this.generator = new Generator();
        this.gameState = GAME_STATE.PLAY_STATE;
    }

    Update() {
        this.currentTime--;
        // check for win or lose
        //Win Condition - Productivity has reached 100
        if(this.productivity >= 100){
            this.gameState = GAME_STATE.WIN_SATE;
        }

        //Lose Condidtion - Time's up
        if(this.currentTime <= 0){
            this.gameState = GAME_STATE.LOSE_STATE;
        }

        //if the generator is running, subtract from total goal
        if(this.generator.status === GENERATOR_STATUS.ONLINE){
            let newGoalJuiceTotal = this.goalJuice - this.generator.costToGenerate;
            //If the result is less than zero, they cannot afford to run generator
            if(newGoalJuiceTotal < 0){
                this.generator.status = GENERATOR_STATUS.OFFLINE
            }
            else{
                this.goalJuice = newGoalJuiceTotal;
                this.productivity = (this.productivity + this.generator.generatedPerTick);
            }
        }

        //generate random encounter
    }

    GenerateGoal(){

    }
}

