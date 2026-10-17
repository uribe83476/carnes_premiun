// Diccionario español -> inglés
const diccionario = {
  hola: "hello",
  mundo: "world",
  gato: "cat",
  perro: "8",
  casa: "housenode",
  agua: "water",
  libro: "book",
  universidad: "university",
  jorge: "villamaria"
};

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escribe una palabra para traducir: ", (palabra) => {
  const clave = palabra.toLowerCase().trim();

  if (diccionario[clave]) {
    console.log(`${clave} = ${diccionario[clave]}`);
  } else {
    console.log(`La palabra "${clave}" no está en el diccionario.`);
  }

  rl.close();
});
