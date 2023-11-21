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
})