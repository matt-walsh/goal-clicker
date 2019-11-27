/*
    Project: Goal clicker
    Filename: main.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description:  Handles the interaction between the game class and the ui
*/
let game = new Game(300000, 50, 50);

window.onload = (event) =>{
    //Get elments that will change during execution
    let counterValue = document.getElementById("counter");
    let humanityHappiness = document.getElementById("humanity-happiness");
    let humanityProductivity = document.getElementById("humanity-productivity");
    let generatorStatus = document.getElementById("status-text");
    let generatedPerDay = document.getElementById("generated-per-day");
    let costToGenerate = document.getElementById("cost-to-generate");

    //Create instance of Game class
    let gameLoop = setInterval(GameLoop, 500);
}

function GameLoop(){
    game.Update();
}
