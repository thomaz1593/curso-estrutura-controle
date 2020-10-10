function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Fim da execução");

// EXEMPLO DO DO/WHILE

// let opcao = -1;

// do {
//   opcao = getInteiroAleatorioEntre(-1, 10);
//   console.log(`Opção escolhida foi ${opcao}.`);
// } while (opcao != -1);

// console.log("Fim da execução");
