const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu nombre? ", (nombre) => {
  rl.question("¿Cuál es tu edad? ", (edad) => {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
    rl.close();
  });
});
