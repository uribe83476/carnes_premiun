/*
 * RETO 8. FizzBuzz
 *
 * Descripción:
 * Recorrer del 1 al 100 y mostrar Fizz para múltiplos de 3, Buzz para múltiplos de 5 y FizzBuzz para ambos.
 *
 * Estrategia:
 * Recorro los números con un ciclo. Primero reviso el caso combinado de 3 y 5 para evitar que se ejecute solamente una de las dos condiciones.
 *
 * Caso límite / mejora:
 * El 15 es un caso límite importante porque es divisible entre 3 y 5 al mismo tiempo.
 */

function fizzBuzz(): string[] {
  // Aquí guardaremos los resultados del recorrido.
  const resultados: string[] = [];

  // Recorremos los números desde 1 hasta 100.
  for (let numero = 1; numero <= 100; numero++) {
    // Este caso debe comprobarse primero porque cumple las dos condiciones.
    if (numero % 3 === 0 && numero % 5 === 0) {
      resultados.push("FizzBuzz");
    } else if (numero % 3 === 0) {
      resultados.push("Fizz");
    } else if (numero % 5 === 0) {
      resultados.push("Buzz");
    } else {
      resultados.push(String(numero));
    }
  }

  return resultados;
}

// Prueba 1
console.log(fizzBuzz().slice(0, 15));

// Prueba 2
console.log(fizzBuzz().slice(14, 16));


/*
 * PRUEBAS
 * La posición correspondiente al número 3 produce "Fizz".
 * La posición correspondiente al número 15 produce "FizzBuzz".
 */
