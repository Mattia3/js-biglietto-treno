console.log("Esercizio Biglietti treno")

let nChilometri = prompt("Inserire i chilometri che si desidera percorrere");
const etaDelPasseggero = prompt("Inserire la propria età");

console.log("Chilometri che vogliono percorrere", nChilometri);
console.log("età del passeggero", etaDelPasseggero);

let prezzoBiglietto = nChilometri * 0.21;
console.log("Prezzo del biglietto", prezzoBiglietto);
prezzoBiglietto = prezzoBiglietto.toFixed(2)

let scontoMinori = prezzoBiglietto / 100 * 20;
scontoMinori = scontoMinori.toFixed(2)
console.log("Sconto minori", scontoMinori)

let scontoOver = prezzoBiglietto / 100 * 40
scontoOver = scontoOver.toFixed(2)
console.log("Sconto Over 65", scontoOver)


if(etaDelPasseggero <= 17){
  alert("Hai diritto ad uno sconto del 20%")
  alert(prezzoBiglietto - scontoMinori)
} else if(etaDelPasseggero >=65){
  alert("Hai diritto ad uno sconto del 40%")
  alert(prezzoBiglietto - scontoOver)
}

