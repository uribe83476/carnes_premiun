/*
 * RETO 4. Par o impar
 *
 * Descripción:
 * Indicar si un número entero es par o impar.
 *
 * Estrategia:
 * Uso el operador módulo. Un número par deja residuo cero al dividirse entre dos.
 *
 * Caso límite / mejora:
 * El cero también es par y los números negativos pueden comprobarse de la misma forma.
 */

function parOImpar(numero: number): string {
  // El operador % obtiene el residuo de una división.
  const residuo = numero % 2;

  // Si el residuo es cero, el número es divisible entre 2.
  if (residuo === 0) {
    return "Par";
  }

  return "Impar";
}

// Prueba 1
console.log(parOImpar(8));

// Prueba 2
console.log(parOImpar(7));


/*
 * PRUEBAS
 * parOImpar(8) devuelve "Par".
 * parOImpar(7) devuelve "Impar".
 */
