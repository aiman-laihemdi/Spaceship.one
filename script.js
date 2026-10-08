// Predator vs Alien

let predatorSpaceship = "Predator-Spaceship";
let predatorPanzerung = 100;
let predatorCoin = 0;
let repairKit = 10;

let attackAlien = 10;
let superAttackAlien = true; 

let alienSpaceship = "Alien-Spaceship";
let alienPanzerung = 100;
let alienCoin = 0;

function statusPredatorSpaceshipLog(){
    console.log("Name of Spaceship: " + predatorSpaceship);
    console.log("Panzerung des Shuttle noch zu " + predatorPanzerung + "% gegeben!");
    console.log("Dein Kontostand:" + predatorCoin);
}

function statusAlienSpaceshipLog(){
    console.log("Name of Spaceship: " + alienSpaceship);
    console.log("Panzerung des Shuttle noch zu " + alienPanzerung + "% gegeben!");
    console.log("Dein Kontostand:" + alienCoin);
}

function attackPredatorNow() {

    if (superAttackAlien == true && alienPanzerung > 40) {
        alienPanzerung -= attackAlien * 2;
        predatorCoin += attackAlien * 2;
        console.log("Super Attack!");
    }

    else if (alienPanzerung > 0) {
        alienPanzerung -= attackAlien;
        predatorCoin += attackAlien;
        console.log("Alien wurde angegriffen!");
    }

    if (alienPanzerung <= 0) {
        alienPanzerung = 0;
        console.log("Predators Wins!");
    }

    if (alienPanzerung <= 10 && alienPanzerung > 0) {
        console.log("Shuttle is in Danger!");
    }
}

