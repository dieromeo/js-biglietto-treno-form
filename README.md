# Form biglietto del treno.

Utilizando il codice javascript precedente, e apportando migliorie ove necessario, andiamo a creare un form per il calcolo del prezzo del biglietto del treno.

MILESTONE 1:

Andiamo ad inserire un input numerico per il numero di km ed un tag select per selezionare la fascia di età dell'utente. Andranno poi salvati all'interno delle rispettive variabili, effettuando modifiche per l'età, essendo in origini non di tipo number.

Aggiungiamo alla fine un bottone al cui click, tramite javascript avviene il calcolo del prezzo, e viene mostrato in console.

MILESTONE 2:

Creiamo e stilizziamo il form aggiungendo:

1) un campo input dove inserire il nome del passeggiero, da mostrare poi sul biglietto. Andrà salvato su una variabile, tramite elementValue.
2) un div inizialmente nascosto (visibilty none), con all'interno le informazioni del biglietto quali:

    - il nome del passeggero da inserire tramite .innerHtml, usando come paramentro il valore inserito nel campo input.
    - l'offerta, corrispondente al nome dlla variabile dello sconto applicato.
    - il numero di carrozza, random, fino a 15.
    - codice random a 5 cifre del biglietto
    - prezzo del biglietto

3) un bottone annulla

Al click del bottone genera il div contenente il biglietto dovrà divenatre visibile, ed al click di annulla riprendere il suo display none.