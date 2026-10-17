/*
 * RETO 2. Mayor de dos
 *
 * Descripción:
 * Recibir dos números y determinar cuál es mayor o si son iguales.
 *
 * Estrategia:
 * Comparo primero la igualdad y después verifico cuál número es mayor. El último retorno cubre el caso contrario.
 *
 * Caso límite / mejora:
 * Los números iguales son un caso importante porque no existe un número mayor.
 */

function compararNumeros(a: number, b: number): string {
  // Primero revisamos el caso de igualdad.
  if (a === b) {
    return "Los números son iguales.";
  }

  // Si a es mayor que b, indicamos que a es el mayor.
  if (a > b) {
    return `${a} es mayor que ${b}.`;
  }

  // Si no ocurrió ninguno de los casos anteriores, b es mayor.
  return `${b} es mayor que ${a}.`;
}

// Prueba 1
console.log(compararNumeros(10, 7));

// Prueba 2
console.log(compararNumeros(5, 5));


/*
 * PRUEBAS
 * compararNumeros(10, 7) indica que 10 es mayor.
 * compararNumeros(5, 5) indica que son iguales.
 */
