/*
    Project: Goal clicker
    Filename: generator.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description: generator logic
*/

class Generator {
    generatorStatus;
    generatedPerTick;
    costToGenerate;

    constructor(){
        this.generatorStatus = "OFFLINE";
        this.generatedPerTick = 1;
        this.costToGenerate = 1;
    }
}