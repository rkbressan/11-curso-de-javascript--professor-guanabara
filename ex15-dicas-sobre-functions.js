//EXEMPLOS DE SOMA:
function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(2, 5));
//Primeiro exemplo finalizado.
function soma(n1 = 3, n2 = 5) {
  return n1 + n2;
}
console.log(soma());
//Segundo exemplo finalizado.

let teste = function (x) {
  return x * 2;
};
console.log(teste(5));
//Terceiro exemplo finalizado.

//Calcular o fatorial de um número:
//Se o número for 5: 5x4x3x2x1 = (?)
function fatorial(ex4) {
  let varfatorial = 1;
  for (let y = ex4; y > 1; y--) {
    varfatorial *= y;
  }
  return varfatorial;
}
console.log(fatorial(5));
//Quarto exemplo finalizado.
