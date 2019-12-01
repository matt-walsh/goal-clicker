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
        this.currentTime = this.timeLimit;
        this.generator = new Generator();
        this.gameState = GAME_STATE.PLAY_STATE;

        //Event variables
        this.eventChance = 0;
        this.previousEvents = [];//INGAME_EVENTS;
        this.currentEvent = undefined;
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

        //Determine if an event should occur
        if(this.GetRandomInteger(1, 100) <= this.eventChance){
            
            //Choose event
            let eventIndex = this.GetRandomInteger(0, INGAME_EVENTS.length - 1);
            console.log(`Event ${eventIndex} Happened`);
            let chosenEvent = INGAME_EVENTS[eventIndex];
            
            //Check if the event has already happened
            if(this.previousEvents.includes(chosenEvent)){
                this.eventChance += 0.3;
            }
            else{
                //Event has occured
                this.currentEvent = chosenEvent;
                this.previousEvents.push(chosenEvent);
                this.eventChance = 0;
            }
        }
        else{
            this.eventChance += 0.1;
        }
    }

    ExecuteEvent(){
        //Apply the augments caused by the event
        switch (this.currentEvent.modifierType) {
            case MODIFIER_TYPES.GOAL_JUICE:{
                this.goalJuice += this.currentEvent.value;
                break;
            }
            case MODIFIER_TYPES.HAPPINESS:{       
                this.happiness += this.currentEvent.value;     
                break;
            }
            case MODIFIER_TYPES.EARTH_PRODUCTIVITY:{
                this.productivity += this.currentEvent.value;
                break;
            }
            case MODIFIER_TYPES.GENERATOR_PRODUCTIVITY:{
                this.generator.speedMultiplyier += this.currentEvent.value;
                break;
            }
            case MODIFIER_TYPES.COST_TO_RUN:{
                this.generator.costMultiplier += this.currentEvent.value;
                break;
            }
        }

        //Clear the current event and pass a copy back to the caller
        let tempEvent = this.currentEvent;
        this.currentEvent = undefined;
        return tempEvent;
    }

    GetScore(){
        let score = this.currentTime / 10 + this.happiness + this.productivity + this.goalJuice;
        if(this.gameState === GAME_STATE.WIN_SATE){
            score += 100;
        }
        return score;
    }
    GetRandomInteger(min, max)
    {
        min = Number.parseInt(min);
        max = Number.parseInt(max);

        if(!Number.isNaN(min) || !Number.isNaN(max)){
            return Math.floor(Math.random() * (max)) + min;
        }
        
        return undefined;
    };
}

