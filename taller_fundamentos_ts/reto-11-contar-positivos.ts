/*
 * RETO 11. Contar positivos
 *
 * Descripción:
 * Recibir una lista de números y contar cuántos son mayores que cero.
 *
 * Estrategia:
 * Recorro la lista y aumento el contador solamente cuando el número es estrictamente mayor que cero.
 *
 * Caso límite / mejora:
 * El cero no es positivo, por lo que no debe aumentar el contador.
 */

function contarPositivos(numeros: number[]): number {
  // El contador empieza en cero.
  let contador = 0;

  // Revisamos cada número de la lista.
  for (const numero of numeros) {
    // Solamente los valores mayores que cero cuentan como positivos.
    if (numero > 0) {
      contador++;
    }
  }

  return contador;
}

// Prueba 1
console.log(contarPositivos([1, -2, 3, 0, 5]));

// Prueba 2
console.log(contarPositivos([-4, -1, 0]));


/*
 * PRUEBAS
 * contarPositivos([1, -2, 3, 0, 5]) devuelve 3.
 * contarPositivos([-4, -1, 0]) devuelve 0.
 */
