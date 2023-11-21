// PREZZO BIGLIETTO
let cost = 0.21;

let price;

// BUTTON
let button_genera = document.getElementById("button_genera");

// RECUPERARE VALORI DI UN INPUT
button_genera.addEventListener("click", function(){
    let nome_e_cognome = document.getElementById("nome_e_cognome").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;

    console.log(nome_e_cognome);
    console.log(km);
    console.log(eta);

    // CALCOLO DEL PREZZO
    if (eta == "min") {
        let sconto = cost * 0.2 * km;
        price = cost * km - sconto;
        document.getElementById("nome").innerText = nome_e_cognome;
        document.getElementById("offerta").innerText = "Biglietto Sconto Minori";
        document.getElementById("carrozza").innerText = 2;
        document.getElementById("codice_cp").innerText = 92800;
        document.getElementById("costo_biglietto").innerText = `${price} \u20ac`;
    }

    else if (eta == "over") {
        sconto = cost * 0.4 * km;
        price = cost * km - sconto;
        document.getElementById("nome").innerText = nome_e_cognome;
        document.getElementById("offerta").innerText = "Biglietto Sconto Over 65";
        document.getElementById("carrozza").innerText = 7;
        document.getElementById("codice_cp").innerText = 92855;
        document.getElementById("costo_biglietto").innerText = `${price} \u20ac`;
    }

    else {
        price = cost * km;
        document.getElementById("nome").innerText = nome_e_cognome;
        document.getElementById("offerta").innerText = "Biglietto Standard";
        document.getElementById("carrozza").innerText = 5;
        document.getElementById("codice_cp").innerText = 92911;
        document.getElementById("costo_biglietto").innerText = `${price} \u20ac`;
    }

    // PREZZO DEL BIGLIETTO IN CONSOLE.LOG
    price = price.toFixed(2);
    console.log(price);
})