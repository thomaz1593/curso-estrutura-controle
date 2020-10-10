let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {
    console.log(`I = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
}

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 69
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}