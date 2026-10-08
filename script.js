let predatorSpaceship = "Predator-Spaceship";
let panzerung = 100;
let schadenSmall = 10;
let schadenLarge = 25;
let schadenXxl = 50;
let Coin = 10;

let reparaturKitSmall = 10;
let reparaturKitLarge = 25;
let reparaturKitXXL = 50;

function statusPredatorSpaceshipLog() {
    console.log("Name of Ship: " + predatorSpaceship);
    console.log("Panzerung: " + panzerung + "%");
    console.log("Predator-Coins: " + Coin + "$");
}

function schadenSpaceship(){
    //panzerung -= schaden;
    if (panzerung >50) {
        panzerung -= schadenXxl;
    }

    else if (panzerung >=26){
        panzerung -= schadenLarge;
    }

    else{
        panzerung -= schadenSmall
        console.log("You need a Xxl Repair Kit, do you want to buy it for 50 Coins ")
    }

}