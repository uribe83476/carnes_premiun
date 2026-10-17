/*
 * RETO 10. Mayor de una lista
 *
 * Descripción:
 * Recibir una lista de números y devolver el número mayor.
 *
 * Estrategia:
 * Parto del primer número como referencia y voy reemplazándolo cuando encuentro uno mayor.
 *
 * Caso límite / mejora:
 * Una lista vacía se rechaza mediante una cláusula de guarda porque no existe un valor que devolver.
 */

function encontrarMayor(numeros: number[]): number {
  // Una lista vacía no tiene un número mayor.
  if (numeros.length === 0) {
    throw new Error("La lista no puede estar vacía.");
  }

  // Tomamos el primer elemento como mayor provisional.
  let mayor = numeros[0];

  // Comparamos los demás elementos con el mayor actual.
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  return mayor;
}

// Prueba 1
console.log(encontrarMayor([4, 9, 2, 7]));

// Prueba 2
console.log(encontrarMayor([-10, -3, -8]));


/*
 * PRUEBAS
 * encontrarMayor([4, 9, 2, 7]) devuelve 9.
 * encontrarMayor([-10, -3, -8]) devuelve -3.
 */
