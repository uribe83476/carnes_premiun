const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    let serie = [0, 1];
    let i = 2;
    while (i < n) {
        serie.push(serie[i - 1] + serie[i - 2]);
        i++;
    }
    return serie.slice(0, n);
}

rl.question("Ingrese la cantidad de valores de fibonacci: ", (n) => {
    console.log(fibonacci(Number(n)));
    rl.close();
});