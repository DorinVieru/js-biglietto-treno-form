// PREZZO BIGLIETTO
let cost = 0.21;
console.log(cost);

let price;

// BUTTON
let button_genera = document.getElementById("button_genera");

// RECUPERARE VALORI DI UN INPUT
button_genera.addEventListener("click", function(){
    let nome_e_cognome = document.getElementById("nome_e_cognome").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    let offerta;
    let carrozza;
    let codice_cp;

    console.log(nome_e_cognome);
    console.log(km);
    console.log(eta);

    // CALCOLO DEL PREZZO
    if (eta == "min") {
        let sconto = cost * 0.2 * km;
        price = cost * km - sconto;
        offerta = "Biglietto Sconto Minori";
        carrozza = 2;
        codice_cp = 92800;
    }

    else if (eta == "over") {
        sconto = cost * 0.4 * km;
        price = cost * km - sconto;
        offerta = "Biglietto Sconto Over 65";
        carrozza = 7;
        codice_cp = 92850;
    }

    else {
        price = cost * km;
        offerta = "Biglietto Sconto Standard";
        carrozza = 5;
        codice_cp = 92911;
    }

    // PREZZO DEL BIGLIETTO IN CONSOLE.LOG
    price = price.toFixed(2);
    console.log(price);

    document.getElementById("nome").innerText = nome_e_cognome;
    document.getElementById("offerta").innerText = offerta;
    document.getElementById("carrozza").innerText = carrozza;
    document.getElementById("codice_cp").innerText = codice_cp;
    document.getElementById("costo_biglietto").innerText = `${price} \u20ac`;
})