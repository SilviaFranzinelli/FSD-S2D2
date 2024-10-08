/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let l = 9
let m = 4
if (l > m) {
  console.log("il numero maggiore è", l)
}
if (l < m) {
  console.log("il numero maggiore è", m)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let a = 20
let b = 5
if (a !== b) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("divisibile per 5", 20 % 5 === 0)

/* dalla soluzione
let z2 = 15

if (z2 % 5 === 0) {
  console.log('divisibile per 5')
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let c = 16
let d = 8
if (c === 8 || d === 8 || c + d === 8 || c - d === 8) {
  console.log("verificato")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 70
if (totalShoppingCart > 50 ) {
  console.log("spedizione gratuita")
}
if (totalShoppingCart < 50) {
  console.log("spedizione a 10€")
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*nope*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x1 = 31
let x2 = 88
let x3 = 45

if (x1 >= x2) {
  if (x2 >= x3) {
    console.log(x1,x2,x3)
  } else {
    if (x3 >= x2) {
      console.log(x1,x3,x2)
    }
  }
} else {
  if (x3 >= x1){
    console.log(x3,x1,x2)
  } else {
    if (x2 >= x1) {
      console.log(x3,x2,x1)
    } else {
      if (x2 >= x3) {
        console.log(x2,x3,x1)
      } else {
        if (x1 >= x3) {
          console.log(x2,x1,x3)
        }
      }
  } 
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let g = 12

if (typeof g === "number") {
  console.log("è un numero")
} else  {
  console.log("non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

*/

let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    }
  if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop(2)
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri = [1,2,3,4,5,6,7,8,9,10]
console.log(numeri)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.splice(9, 9, 100)
/* numeri.pop(10)
numeri.push(100)
*/
