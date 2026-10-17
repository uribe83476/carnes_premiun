/*
 * RETO 12. Factorial seguro
 *
 * Descripción:
 * Calcular el factorial de un número entero no negativo y rechazar valores inválidos.
 *
 * Estrategia:
 * Uso una cláusula de guarda para rechazar decimales y números negativos. Después utilizo un acumulador multiplicativo.
 *
 * Caso límite / mejora:
 * El cero es un caso importante porque 0! = 1. También se rechazan valores como -2 o 3.5.
 */

function factorial(numero: number): number {
  // El factorial solamente está definido aquí para enteros no negativos.
  if (!Number.isInteger(numero) || numero < 0) {
    throw new Error("El número debe ser un entero no negativo.");
  }

  // El factorial de 0 es 1.
  let resultado = 1;

  // Multiplicamos desde 2 hasta el número recibido.
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

// Prueba 1
console.log(factorial(5));

// Prueba 2
console.log(factorial(0));


/*
 * PRUEBAS
 * factorial(5) devuelve 120.
 * factorial(0) devuelve 1.
 */
