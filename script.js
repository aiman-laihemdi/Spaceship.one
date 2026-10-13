// Predator vs Alien

// PREDATOR
let predatorSpaceship = "Predator-Spaceship";
let predatorPanzerung = 100;
let predatorCoin = 0;

// ALIEN
let alienSpaceship = "Alien-Spaceship";
let alienPanzerung = 100;
let alienCoin = 0;

// REPARATURKITS
let repairKit = 10;          // Preis pro Reparaturkit
let repairKitBestand = 0;    // Anzahl gekaufter Reparaturkits



// FEHLERMELDUNGEN
function showError(message) {
    document.getElementById("errorMessage").innerText = message;
}



// STATUS ANZEIGEN

function renderStatusPredator() {
    let statusContainer = document.getElementById(
        "renderSpaceshipStatusPredator"
    );

    let statusText = "Aktiv";

    if (predatorPanzerung <= 0) {
        statusText = "ZERSTÖRT";
    }

    statusContainer.innerHTML = `
        <table>
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
            <tr>
                <td>Reparaturkits</td>
                <td>${repairKitBestand}</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>${statusText}</td>
            </tr>
        </table>
    `;

    if (predatorPanzerung <= 0) {
        statusContainer.style.backgroundColor = "#ffcccc";
    } 
    
    else {
        statusContainer.style.backgroundColor = "";
    }
}


function renderStatusAlien() {
    let statusContainer = document.getElementById(
        "renderSpaceshipStatusAlien"
    );

    let statusText = "Aktiv";

    if (alienPanzerung <= 0) {
        statusText = "ZERSTÖRT";
    }

    statusContainer.innerHTML = `
        <table>
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
            <tr>
                <td>Status</td>
                <td>${statusText}</td>
            </tr>
        </table>
    `;

    if (alienPanzerung <= 0) {
        statusContainer.style.backgroundColor = "#ffcccc";
    } else {
        statusContainer.style.backgroundColor = "";
    }
}



// ALIEN SPACESHIP BESCHÄDIGEN

function addDamageAlien() {
    let damageInput = document.getElementById("damageInputAlien");
    let damage = Number(damageInput.value);

    if (!Number.isFinite(damage) || damage < 10) {
        showError("Der Schaden muss mindestens 10 betragen!");
        return;
    }

    if (alienPanzerung <= 0) {
        showError("Das Alien-Raumschiff wurde bereits zerstört!");
        return;
    }

    alienPanzerung -= damage;

    if (alienPanzerung < 0) {
        alienPanzerung = 0;
    }

    // Predator erhält 10 Coins für einen erfolgreichen Angriff.
    predatorCoin += 10;

    showError("");

    renderStatusAlien();
    renderStatusPredator();
}



// PREDATOR SPACESHIP BESCHÄDIGEN
function addDamagePredator() {
    let damageInput = document.getElementById("damageInputPredator");
    let damage = Number(damageInput.value);

    if (!Number.isFinite(damage) || damage < 10) {
        showError("Der Schaden muss mindestens 10 betragen!");
        return;
    }

    if (predatorPanzerung <= 0) {
        showError("Das Predator-Raumschiff wurde bereits zerstört!");
        return;
    }

    predatorPanzerung -= damage;

    if (predatorPanzerung < 0) {
        predatorPanzerung = 0;
    }

    // Alien erhält 10 Coins für einen erfolgreichen Angriff.
    alienCoin += 10;

    showError("");

    renderStatusPredator();
    renderStatusAlien();
}



// REPARATURKITS KAUFEN

function buyRepairKits() {
    let repairKitInput = document.getElementById("repairKitInput");
    let anzahl = Number(repairKitInput.value);

    if (!Number.isInteger(anzahl) || anzahl < 1) {
        showError("Bitte gib eine gültige Anzahl an Reparaturkits ein!");
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


// EIN REPARATURKIT BENUTZEN

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


// STATUS BEIM START ANZEIGEN

// renderStatusPredator();
// renderStatusAlien();

