function oNumeroEParOuImpar(numero) {
  if (numero % 2 == 0) {
    return "par.";
  } else {
    return "ímpar.";
  }
}
//Para a função funcionar precisa do let abaixo
let resultado = oNumeroEParOuImpar(11);
console.log(`Esse número é ${resultado}`);
//ou:
console.log(oNumeroEParOuImpar(20));
