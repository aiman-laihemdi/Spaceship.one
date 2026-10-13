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
        console.log("Super Attack!");
    }

    else if (alienPanzerung > 0) {
        alienPanzerung -= attackAlien;
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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Predator vs Alien

// Predator

let predatorSpaceship = "Predator-Spaceship";
let predatorPanzerung = 100;
let predatorCoin = 0;

let attackAlien = 10;
let superAttackAlien = true; 

function renderStatusPredatorSpaceshipLog(){
    console.log("Name of Spaceship: " + predatorSpaceship);
    console.log("Panzerung des Shuttle noch zu " + predatorPanzerung + "% gegeben!");
    console.log("Dein Kontostand:" + predatorCoin);
}

function attackAlienNow() {

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

function renderStatusPredator() {
    let statusContainer = document.getElementById("renderSpaceshipStatusPredator");

    statusContainer.innerHTML = `
        <table>
            <tr>
                <h3>Status: Predator-Spaceship</h3>
            </tr>
            <tr>
                <td>Name des Raumschiffs</td>
                <td>${predatorSpaceship}</td>
            </tr>
            <tr>
                <td>Panzerung</td>
                <td>${predatorPanzerung}%</td>
            </tr>
            <tr>
                <td>Kontostand</td>
                <td>${predatorCoin} Coins</td>
            </tr>
        </table>
    `;
}

// renderStatusPredator();

function addDamageAlien(){
    let errorMessage = document.getElementById("errorMessage");
    let yourDamage = document.getElementById("damageInputAlien");
    let damage = Number(yourDamage.value);

    if (damage < 10){
        document.getElementById("errorMessage").innerText = "Der Schaden muss mindestens 10 sein!";
        return;
    }

    if (alienPanzerung <= 0) {
        errorMessage.innerText = "Aliens wurde bereits besiegt!";
        return;
    }

    alienPanzerung -= damage;

    if (alienPanzerung < 0) {
        alienPanzerung = 0;
    }

    errorMessage.innerText = "";

    // alienPanzerung -= damage;
    predatorCoin += 10;

    renderStatusAlien();
    renderStatusPredator();
}


// Alien

let alienSpaceship = "Alien-Spaceship";
let alienPanzerung = 100;
let alienAttack = 10;
let alienCoin = 0;

function renderStatusAlienSpaceshipLog(){
    console.log("Name of Spaceship: " + alienSpaceship);
    console.log("Panzerung des Shuttle noch zu " + alienPanzerung + "% gegeben!");
    console.log("Dein Kontostand:" + alienCoin);
}
    
    
function predatorAttack() {
    if (predatorPanzerung <= 0) {
        showError("Der Predator wurde bereits zerstört!");
        return;
    }

    predatorPanzerung -= alienAttack;

    if (predatorPanzerung < 0) {
        predatorPanzerung = 0;
    }

    alienCoin += 10;

    if (predatorPanzerung <= 10 && predatorPanzerung > 0) {
        console.log("Shuttle is in Danger!");
    }

    if (predatorPanzerung <= 0) {
        console.log("Aliens Wins!");
    }

    showError("");
    renderStatusPredator();
    renderStatusAlien();
}


    if (predatorPanzerung > 0) {
        predatorPanzerung -= alienAttack;
        alienCoin += 10;

        console.log("Predator wurde angegriffen!");

        if (predatorPanzerung < 0) {
            predatorPanzerung = 0;
        }
    }

    if (predatorPanzerung <= 10 && predatorPanzerung > 0) {
        console.log("Shuttle is in Danger!");
    }

    if (predatorPanzerung <= 0) {
        predatorPanzerung = 0;
        console.log("Aliens Wins!");
    }

    renderStatusPredator();
    renderStatusAlien();


}

function renderStatusAlien() {
    let statusContainer = document.getElementById("renderSpaceshipStatusAlien");

    statusContainer.innerHTML = `
        <table>
            <tr>
                <h3>Status: Alien-Spaceship</h3>
            </tr>
            <tr>
                <td>Name des Raumschiffs</td>
                <td>${alienSpaceship}</td>
            </tr>
            <tr>
                <td>Panzerung</td>
                <td>${alienPanzerung}%</td>
            </tr>
            <tr>
                <td>Kontostand</td>
                <td>${alienCoin} Coins</td>
            </tr>
        </table>
    `;
}

// renderStatusAlien();

function addDamagePredator(){
    let errorMessage = document.getElementById("errorMessage");
    let yourDamage = document.getElementById("damageInputPredator");
    let damage = Number(yourDamage.value);
    
    if (damage < 10){
        document.getElementById("errorMessage").innerText = "Der Schaden muss mindestens 10 sein!";
        return;
    }

    if (predatorPanzerung <= 0) {
        errorMessage.innerText = "Predators wurde bereits besiegt!";
        return;
    }

    predatorPanzerung -= damage;

    if (predatorPanzerung < 0) {
        predatorPanzerung = 0;
    }

    errorMessage.innerText = "";
    // predatorPanzerung -= damage;
    alienCoin += 10;

    renderStatusPredator();
    renderStatusAlien();
}

// Reparaturkits

let repairKit = 10;
let repairKitBestand = 0;

function buyRepairKits() {
    let repairKitInput = document.getElementById("repairKitInput");
    let anzahl = Number(repairKitInput.value);

    if (!Number.isInteger(anzahl) || anzahl < 1) {
        showError("Bitte gib eine gültige Anzahl ein!");
        return;
    }

    let gesamtPreis = anzahl * repairKit;

    if (predatorCoin < gesamtPreis) {
        showError("Du hast nicht genügend Coins!");
        return;
    }

    predatorCoin -= gesamtPreis;
    repairKitBestand += anzahl;

    showError("");
    renderStatusPredator();
}


function useRepairKit() {
    if (repairKitBestand < 1) {
        showError("Du hast keine Reparaturkits!");
        return;
    }

    if (predatorPanzerung <= 0) {
        showError("Ein zerstörtes Raumschiff kann nicht repariert werden!");
        return;
    }

    repairKitBestand -= 1;
    predatorPanzerung += 20;

    if (predatorPanzerung > 100) {
        predatorPanzerung = 100;
    }

    showError("");
    renderStatusPredator();
}
