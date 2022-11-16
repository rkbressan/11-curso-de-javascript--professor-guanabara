//ARRAY = Variáveis Compostas
/*Um array, um vetor ou uma variável composta é uma variável que tem
vários elementos, cada elemento é composto pelo seu valor
e por uma chave de identificação
*/
//var simples só armazena um valor por vez, tipo x = 1
//var composta(arrays) podem armazenar vários valores

//Uma pizza de 6 fatias, seria:
let fatia1 = 0;
let fatia2 = 1;
let fatia3 = 2;
let fatia4 = 3;
let fatia5 = 4;
let fatia6 = 5;

//É muito importante lembrar que o primeiro número é ZERO
//pizza a = []
//Vamos chamar esse array de num.
let num = [5, 8, 2, 9, 3];
console.log(`O nosso array é ${num}.`);
//Se quiser acrescentar um valor:
num.push(7);
//Para saber o comprimento do array:
num.length;
console.log(`O vetor tem ${num.length} posições.`);
//Quando você usa o sort, ele coloca os elementos em ordem crescente
//2, 3, 5, 7, 8, 9
num.sort();
console.log(num);
//Mostrar um número específico:
console.log(num[0]);

//posicao começa com 0 e vai no máximo até o num.length e repete +1 até chegar
for (let posicao = 0; posicao < num.length; posicao++) {
  console.log(`A posição ${posicao} tem o valor ${num[posicao]}`);
}

//Também tem essa opção que dá o mesmo resultado:
//E vamos para o for in
//Em pt-BR: Para cada posição em num
for (let posicao in num) {
  console.log(`A posição ${posicao} tem o valor ${num[posicao]}`);
}

//Como buscar valores dentro de um vetor(array)
//indexOf (o Of sempre tem O maiúsculo)
//Ele vai procurar o valor 7 dentro do array
//Mas e se o número não estiver na lista?
let procurar = num.indexOf(0);
if (procurar == -1) {
  console.log("O valor não foi encontrado.");
} else {
  console.log(`O valor está na posição ${procurar}.`);
}
