/*
Utilizando il codice javascript precedente, e apportando migliorie ove necessario, andiamo a creare un form per il calcolo del prezzo del biglietto del treno.
*/

"use strict";


const generateButton = document.getElementById('generate')

generateButton.addEventListener('click', function () {
    const km = document.getElementById('km-number').value;
    console.log(km);
    var prezzoBiglietto = km * 0.21;
    if (document.getElementById('eta').value === "Minorenne") {
        prezzoBiglietto = prezzoBiglietto * 0.8;
        console.log('Il tuo biglietto scontato per minorenni costa: ', prezzoBiglietto.toFixed(2));
    }

    else if (document.getElementById('eta').value === "Over 65") {
        prezzoBiglietto = prezzoBiglietto * 0.6;
        console.log('Il tuo biglietto scontato per over 65 costa: ', prezzoBiglietto.toFixed(2));
    }
    else {
        console.log('Il tuo biglietto costa: ', prezzoBiglietto.toFixed(2));
    }
})

/* 
if (isNaN(km)) { // verificare che sia un numero
    alert("Inserire un numero! Ricaricare la pagina");
}

console.log(km);

const etaUtente = parseInt(prompt("Inserisci la tua età"));

if (isNaN(etaUtente)) { // verificare che sia un numero
    alert("Inserire un numero! Ricaricare la pagina");
}

console.log(etaUtente);



### Calcolo prezzo

Definire un a variabile che calcoli il prezzo del biglietto moltiplicando i km inseriti dall'utente per il prezzo al km (0,21€).

var prezzoBiglietto = km * 0.21;
console.log(prezzoBiglietto + '€');


### Funzione sconto

In una fuzione calcolare il prezzo aggiornato del biglietto a seconda dell'età nel seguente modo:
- Se l'età è minore di 18 
    - allora il prezzo è scontato del 20%.
- Se l'età e maggiore o uguale a 65
    - allora il prezo scontato è del 40%.
- Altrimenti non viene effettuato nessuno sconto.

if (etaUtente < 18) { //caso minorenne
    prezzoBiglietto = prezzoBiglietto * 0.8;
    console.log('Il tuo biglietto scontato per minorenni costa: ', prezzoBiglietto.toFixed(2));
}
else if (etaUtente >= 65) { //caso over 65
    prezzoBiglietto = prezzoBiglietto * 0.6;
    console.log('Il tuo biglietto scontato per over 65 costa: ', prezzoBiglietto.toFixed(2));
}
else {
    console.log('Il tuo biglietto costa: ', prezzoBiglietto.toFixed(2));
}


Indicare il prezzo finale con al massimo due numeri decimali. 

MILESTONE 1:

Andiamo ad inserire un input numerico per il numero di km ed un tag select per selezionare la fascia di età dell'utente. Andranno poi salvati all'interno delle rispettive variabili, effettuando modifiche per l'età, essendo in origini non di tipo number.

Aggiungiamo alla fine un bottone al cui click, tramite javascript avviene il calcolo del prezzo, e viene mostrato in console.

    MILESTONE 2:

Creiamo e stilizziamo il form aggiungendo:

1) un campo input dove inserire il nome del passeggiero, da mostrare poi sul biglietto.Andrà salvato su una variabile, tramite elementValue.
2) un div inizialmente nascosto(visibilty none), con all'interno le informazioni del biglietto quali:

    - il nome del passeggero da inserire tramite.innerHtml, usando come paramentro il valore inserito nel campo input.
    - l'offerta, corrispondente al nome dlla variabile dello sconto applicato.
    - il numero di carrozza, random, fino a 15.
        - codice random a 5 cifre del biglietto
            - prezzo del biglietto

3) un bottone annulla

Al click del bottone genera il div contenente il biglietto dovrà divenatre visibile, ed al click di annulla riprendere il suo display none.*/
