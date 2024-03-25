# BIGLIETTO TRENO JS

## CONSEGNA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

## BONUS
> Nessun Bonus

## SVOLGIMENTO

### 1. Richiesta dati utente
- [X] Chiedere all'utente quanti kilometri dovrà percorrere
- [X] Chiedere all'utente quanti anni ha

### 2. Logica algoritmo
- [X] Calcolo prezzoBiglietto = a quanti kilometri l'utente deve percorrere * 0,   21cent al kilometro


- [X] Se (l'utente è minorenne allora avrà uno sconto del 20%)
    prezzoBiglietto = prezzo scontato per minori
Altrimenti (se l'utente è over 65 riceverà uno sconto del 40%)
    prezzoBiglietto = prezzo scontato per anziani
Altrimenti (l'utente pagherà il prezzo normale)
    prezzoBiglietto = prezzo di base

### 3. Output

- [X] Stampa risultato del biglietto

*Esempio*
```
| Base  | Minorenne | Over 65 |
| km10  | km10      | km 10   |
| 2.10€ | 1,68€     | 1,26€   |
``` 