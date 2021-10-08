console.log("Esercizio Biglietti treno")

let nChilometri = prompt("Inserire i chilometri che si desidera percorrere");
const etaDelPasseggero = prompt("Inserire la propria età");

console.log("Chilometri che vogliono percorrere", nChilometri);
console.log("età del passeggero", etaDelPasseggero);


const prezzoBiglietto = Math.min(nChilometri * 0.21);
console.log("Prezzo del biglietto", prezzoBiglietto);

const scontoMinori = Math.min(prezzoBiglietto / 100 * 20)
Math.min(scontoMinori - prezzoBiglietto)  
console.log("Sconto minori", scontoMinori)

const scontoOver = Math.min(prezzoBiglietto / 100 * 40)
Math.min(scontoOver - prezzoBiglietto)  
console.log("Sconto Over 65", scontoOver)

if(etaDelPasseggero <= 17){
  
}
