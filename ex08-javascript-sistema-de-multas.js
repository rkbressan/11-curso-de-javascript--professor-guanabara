//Aula sobre condições
//Desvio condicional é quando tem dois caminhos (if, else)
console.log("O console funcionou corretamente");
let velocidade = 80;
console.log(`A velocidade do seu carro é ${velocidade}Km/h`);

//É uma condição simples, porque não tem else
if (velocidade > 60) {
  console.log("Você ultrapassou a velocidade permitida, MULTADO!");
}

console.log("Dirija sempre usando cinto de segurança");

let país = "EUA";
if (país == "Brasil") {
  console.log("Você é Brasileiro");
} else {
  console.log("Você é Estrangeiro");
}
