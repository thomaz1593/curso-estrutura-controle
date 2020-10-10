function soBoaNotica(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soBoaNotica(8.1);
soBoaNotica(6.7);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("Se for verdade... " + valor);
  }
}

seForVerdadeEuFalo(); // falso
seForVerdadeEuFalo(null); // falso
seForVerdadeEuFalo(undefined); // falso
seForVerdadeEuFalo(NaN); // falso
seForVerdadeEuFalo(""); // falso
seForVerdadeEuFalo(0); // falso
seForVerdadeEuFalo(-1); // verdadeiro
seForVerdadeEuFalo(" "); // verdadeiro
seForVerdadeEuFalo("?"); // verdadeiro
seForVerdadeEuFalo([]); // verdadeiro
seForVerdadeEuFalo([1, 2]); // verdadeiro
seForVerdadeEuFalo({}); // verdadeiro
