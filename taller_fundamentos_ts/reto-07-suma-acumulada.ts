/*
 * RETO 7. Suma acumulada
 *
 * Descripción:
 * Recibir una lista de números y calcular su suma sin usar una función de suma ya creada.
 *
 * Estrategia:
 * Uso un acumulador que comienza en cero y voy agregando cada elemento de la lista.
 *
 * Caso límite / mejora:
 * Una lista vacía devuelve cero, porque no hay valores que sumar.
 */

function sumarLista(numeros: number[]): number {
  // Comenzamos el acumulador en cero.
  let suma = 0;

  // Recorremos todos los números de la lista.
  for (const numero of numeros) {
    // Agregamos el número actual al acumulador.
    suma += numero;
  }

  return suma;
}

// Prueba 1
console.log(sumarLista([1, 2, 3, 4]));

// Prueba 2
console.log(sumarLista([10, -5, 2]));


/*
 * PRUEBAS
 * sumarLista([1, 2, 3, 4]) devuelve 10.
 * sumarLista([10, -5, 2]) devuelve 7.
 */
