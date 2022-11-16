//Colocar uma função dentro de uma variável
//console.log(typeof amigo); Mostra que o amigo é um objeto
let amigo = {
  nome: "Ricardo",
  sexo: "M",
  peso: 75.4,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};
amigo.engordar(1);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
//Exercício finalizado.
