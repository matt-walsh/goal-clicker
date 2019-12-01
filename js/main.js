/*
    Project: Goal clicker
    Filename: main.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description:  Handles the interaction between the game class and the ui
*/
const TICK_INTERVAL = 100;

//Create instance of Game class
let game = new Game(3650, 0, 0);

//declare the game loop
let gameLoop;

window.onload = (event) =>{
    console.log(INGAME_EVENTS.length);
    //Setup button event handlers
    goalJuice = document.getElementById("goal-juice");
    document.getElementById("clicker").addEventListener("click", (event) => {
        game.goalJuice++;
        goalJuice.innerHTML = game.goalJuice.toFixed(0);
    });

    document.getElementById("start-generator").addEventListener("click", (event) => {
        game.generator.status = GENERATOR_STATUS.ONLINE;
    });

    document.getElementById("stop-generator").addEventListener("click", (event) => {
        game.generator.status = GENERATOR_STATUS.OFFLINE;
    });

    document.getElementById("modal-button").addEventListener("click", (event) => {
        HideModal();
    });
    //Show the New Game Modal
    let title = "Your Mission: Save Humanity";
    let message = `<p>It is the distant future, the year 2020. Humans have become apathetic to the blights of their species, and are no longer contributing to the betterment of humankind.</p>`;
    message += `<p>Fortunatly for them, our engineers have developed a generator that creates pure productivity. The generator runs on a substance called "Goal Juice", which we need help to create.</p>`
    message += `<p>We have one year to until humanity destroys itslef. Please help them regain their productivity, We are their only hope!</p>`
    ShowModal(title, message);
    //gameLoop = setInterval(GameLoop, TICK_INTERVAL);
}

function ShowModal(title, message){
    //Stop the game loop
    clearInterval(gameLoop);

    //Get The Modals DOM Objects and set them to the correct vales
    document.querySelector("#modal-title > h2").innerHTML = title;
    document.getElementById("modal-message").innerHTML = message;
    document.getElementById("message-modal").style.display = "block";
}

function HideModal(){
    //Resume the gameloop
    gameLoop = setInterval(GameLoop, TICK_INTERVAL);
    document.getElementById("message-modal").style.display = "none";
}

//Function called every tick to update the game
function GameLoop(){
    //Get elments that will change during execution
    let counterValue = document.getElementById("counter");
    let humanityHappiness = document.getElementById("humanity-happiness");
    let humanityProductivity = document.getElementById("humanity-productivity");
    let generatedPerDay = document.getElementById("generated-per-day");
    let costToGenerate = document.getElementById("cost-to-generate");
    let totalGoalJuice = document.getElementById("goal-juice");
    
    //Check to see if we have an event happening
    if(game.currentEvent !== undefined){
        //Trigger the event and save a copy to use in the modal
        let currentEvent = game.ExecuteEvent();
        //Construct the modal
        modalMessage = `<p>${currentEvent.eventText}</p><br><p>`;
        if(currentEvent.value >= 0){
            modalMessage += `+`;
        }

        modalMessage += `${currentEvent.value} ${currentEvent.modifierType}.<p>`;
        ShowModal("Event in Progress", modalMessage);
    }

    //Handle the gamestate changing between intervals
    if(game.gameState === GAME_STATE.WIN_SATE){
        console.log("Won the game");
        let title = "Humanity is Saved!";
        let message = "<p>We saved humanity! They will go on to become productive intergalactic citizens</p><p>Unfortunatly, this is but one of infinite universes, we must attempt to save all of humanity!</p><p>Reload the browers window to try again</p>";
        ShowModal(title, message);
        //Stop the game loop
        clearInterval(gameLoop);
    }
    else if(game.gameState === GAME_STATE.LOSE_STATE){
        console.log("Lost Game");
        let title = "Humanity is doomed!";
        let message = "<p>We couldn't save humanity from an unproductive life. They are doomed. So sad.</p><p>Fortunatly, with our advanced alien technology, we are able to travel back in time and try again.</p><p>Reload the browers window to try again</p>"
        ShowModal(title, message);
        
        //stop the game loop
        clearInterval(gameLoop);
    }
    else if(game.gameState === GAME_STATE.PLAY_STATE){
        game.Update();
    }

    //Change the Generator status styles depending on generator state
    if (game.generator.status === GENERATOR_STATUS.OFFLINE) {
        document.getElementById("status-text").innerHTML = "OFFLINE";
        document.getElementById("status-box").style.backgroundColor = "rgb(128,0,0)";
    }
    else if(game.generator.status === GENERATOR_STATUS.ONLINE){
        document.getElementById("status-text").innerHTML = "ONLINE";
        document.getElementById("status-box").style.backgroundColor = "rgb(0,128,0)";
    }

    //update all the elements on screen
    counterValue.innerHTML = (game.currentTime / 10).toFixed(0);
    totalGoalJuice.innerHTML = game.goalJuice.toFixed(0);
    humanityHappiness.innerHTML = game.happiness.toFixed(0);
    humanityProductivity.innerHTML = game.productivity.toFixed(2);
    generatedPerDay.innerHTML = (game.generator.generatedPerTick * game.generator.speedMultiplyier).toFixed(2);
    costToGenerate.innerHTML = (game.generator.costToGenerate * game.generator.costMultiplier);
}
