console.log("Esercizio Biglietti treno")

const nChilometri = parseInt(prompt("Inserire i chilometri che si desidera percorrere"));
if(isNaN(nChilometri)){
  alert("Testo non valido")
}
const etaDelPasseggero = parseInt(prompt("Inserire la propria età"));
if(isNaN(etaDelPasseggero)){
  alert("Testo non valido")
}

console.log("Chilometri che vogliono percorrere", nChilometri);
console.log("età del passeggero", etaDelPasseggero);

let prezzoBiglietto = nChilometri * 0.21;
console.log("Prezzo del biglietto", prezzoBiglietto);

let scontoMinori = prezzoBiglietto / 100 * 20;
console.log("Sconto minori", scontoMinori)

let scontoOver = prezzoBiglietto / 100 * 40
console.log("Sconto Over 65", scontoOver)

let prezzoTotale;
let prezzoTotaleOver;
if(etaDelPasseggero <= 17){
  prezzoTotale = prezzoBiglietto - scontoMinori
  alert("Hai diritto ad uno sconto del 20%")
  alert(prezzoTotale.toFixed(2))
  
} else if(etaDelPasseggero >=65){
  prezzoTotaleOver = prezzoBiglietto - scontoOver
  alert("Hai diritto ad uno sconto del 40%")
  alert(prezzoTotaleOver.toFixed(2))
} else{
  alert(prezzoBiglietto)
}




