/*
Utilizando il codice javascript precedente, e apportando migliorie ove necessario, andiamo a creare un form per il calcolo del prezzo del biglietto del treno.
*/

"use strict";

const km = document.getElementById('km-number'); // numero di km
const generateButton = document.getElementById('generate') // bottone per generare il biglietto
const annullaButton = document.getElementById('Annulla') // bottone per annullare il biglietto
let sectionBiglietto = document.getElementById('dr-biglietto'); // sezione che deve comparire al click
const nomeUtente = document.getElementById('nome-utente'); // aggiunta nome utente

generateButton.addEventListener('click', function () {

    document.getElementById('passeggero-output').innerHTML = nomeUtente.value;

    const carrozza = Math.floor(Math.random() * 14 + 1); // aggiunta numero carrozza
    document.getElementById('carrozza').innerHTML = carrozza;

    const codiceCp = Math.floor(Math.random() * 100000); // aggiunta codice biglietto
    document.getElementById('codice-cp').innerHTML = codiceCp;

    let prezzoBiglietto = km.value * 0.21;
    if (document.getElementById('eta').value === "Minorenne") { //caso minorenne
        prezzoBiglietto = prezzoBiglietto * 0.8;
        console.log('Il tuo biglietto scontato per minorenni costa: ', prezzoBiglietto);
        document.getElementById('offerta').innerHTML = "Offerta minorenni"
    }

    else if (document.getElementById('eta').value === "Over 65") { // caso over 65
        prezzoBiglietto = prezzoBiglietto * 0.6;
        console.log('Il tuo biglietto scontato per over 65 costa: ', prezzoBiglietto);
        document.getElementById('offerta').innerHTML = "Offerta over"
    }
    else { // caso base
        console.log('Il tuo biglietto costa: ', prezzoBiglietto);
        document.getElementById('offerta').innerHTML = "Offerta standard"
    }

    document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2) + "€";

    sectionBiglietto.classList.remove('d-none');
})

annullaButton.addEventListener('click', function () {
    sectionBiglietto.classList.add('d-none');
    km.value = '';
    nomeUtente.value = '';
})
