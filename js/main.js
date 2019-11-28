/*
    Project: Goal clicker
    Filename: main.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description:  Handles the interaction between the game class and the ui
*/
//Create instance of Game class
let game = new Game(3650, 0, 0);

//Start the game loop
let gameLoop = setInterval(GameLoop, 100);

window.onload = (event) =>{
    //Setup event handlers
    goalJuice = document.getElementById("goal-juice");
    document.getElementById("clicker").addEventListener("click", (event) => {
        game.goalJuice++;
        goalJuice.innerHTML = game.goalJuice;
    });

    document.getElementById("start-generator").addEventListener("click", (event) => {
        game.generator.status = GENERATOR_STATUS.ONLINE;
    });

    document.getElementById("stop-generator").addEventListener("click", (event) => {
        game.generator.status = GENERATOR_STATUS.OFFLINE;
    });
}

function GameLoop(){
    //Get elments that will change during execution
    let counterValue = document.getElementById("counter");
    let humanityHappiness = document.getElementById("humanity-happiness");
    let humanityProductivity = document.getElementById("humanity-productivity");
    let generatedPerDay = document.getElementById("generated-per-day");
    let costToGenerate = document.getElementById("cost-to-generate");
    let totalGoalJuice = document.getElementById("goal-juice");
    
    //Handle the gamestate changeing between intervals
    if(game.gameState === GAME_STATE.WIN_SATE){
        console.log("Won the game");
        //Stop the game loop
        clearInterval(gameLoop);
    }
    else if(game.gameState === GAME_STATE.LOSE_STATE){
        console.log("Lost Game");
        //stop the game loop
        clearInterval(gameLoop);
    }
    else if(game.gameState === GAME_STATE.PLAY_STATE){
        game.Update();
    } 

    //update all the elements on screen
    counterValue.innerHTML = (game.currentTime / 10).toFixed(0);
    totalGoalJuice.innerHTML = game.goalJuice;
    humanityHappiness.innerHTML = game.happiness;
    humanityProductivity.innerHTML = game.productivity.toFixed(2);
    generatedPerDay.innerHTML = game.generator.generatedPerTick;
    costToGenerate.innerHTML = game.generator.costToGenerate;

    if (game.generator.status === GENERATOR_STATUS.OFFLINE) {
        document.getElementById("status-text").innerHTML = "OFFLINE";
        document.getElementById("status-box").style.backgroundColor = "rgb(128,0,0)";
    }
    else if(game.generator.status === GENERATOR_STATUS.ONLINE){
        document.getElementById("status-text").innerHTML = "ONLINE";
        document.getElementById("status-box").style.backgroundColor = "rgb(0,128,0)";
    }

}
