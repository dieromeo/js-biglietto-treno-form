/*
Utilizando il codice javascript precedente, e apportando migliorie ove necessario, andiamo a creare un form per il calcolo del prezzo del biglietto del treno.
*/

"use strict";


const generateButton = document.getElementById('generate') // bottone per generare il biglietto
const annullaButton = document.getElementById('Annulla') // bottone per annullare il biglietto
var sectionBiglietto = document.getElementById('dr-biglietto'); // sezione che deve comparire al click

generateButton.addEventListener('click', function () {
    const km = document.getElementById('km-number').value; // numero di km
    const nomeUtente = document.getElementById('nome-utente').value; // aggiunta nome utente
    document.getElementById('passeggero-output').innerHTML = nomeUtente;
    const carrozza = Math.floor(Math.random() * 14 + 1); // aggiunta numero carrozza
    document.getElementById('carrozza').innerHTML = carrozza;
    const codiceCp = Math.floor(Math.random() * 100000); // aggiunta codice biglietto
    document.getElementById('codice-cp').innerHTML = codiceCp;
    var prezzoBiglietto = km * 0.21;
    if (document.getElementById('eta').value === "Minorenne") { //caso minorenne
        prezzoBiglietto = prezzoBiglietto * 0.8;
        console.log('Il tuo biglietto scontato per minorenni costa: ', prezzoBiglietto.toFixed(2));
    }

    else if (document.getElementById('eta').value === "Over 65") { // caso over 65
        prezzoBiglietto = prezzoBiglietto * 0.6;
        console.log('Il tuo biglietto scontato per over 65 costa: ', prezzoBiglietto.toFixed(2));
    }
    else { // caso base
        console.log('Il tuo biglietto costa: ', prezzoBiglietto.toFixed(2));
    }

    document.getElementById('prezzo').innerHTML = prezzoBiglietto;

    sectionBiglietto.classList.remove('d-none');
})

annullaButton.addEventListener('click', function () {
    sectionBiglietto.classList.add('d-none');
})
