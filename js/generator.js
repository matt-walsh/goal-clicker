/*
    Project: Goal clicker
    Filename: generator.js
    Author: Matt Walsh
    Date: 2019-11-25
    Description: generator class
*/
const GENERATOR_STATUS = {
    ONLINE: 0,
    OFFLINE: 1
};

class Generator {

    constructor(){
        this.status = GENERATOR_STATUS.ONLINE;
        this.costToGenerate = 0.5;
        this.costMultiplier = 1;

        this.generatedPerTick = 0.05;
        this.speedMultiplyier = 1;
    }

    ConsumeFuel(){
        return this.costToGenerate * this.costMultiplier;
    }

    GenerateProductivity(){
        return this.generatedPerTick * this.speedMultiplyier;
    }
}