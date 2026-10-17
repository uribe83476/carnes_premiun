/*
 * RETO 6. Contador de vocales
 *
 * Descripción:
 * Contar cuántas vocales aparecen en una frase.
 *
 * Estrategia:
 * Convierto el texto a minúsculas y recorro sus caracteres. Cada vez que encuentro una vocal aumento el acumulador.
 *
 * Caso límite / mejora:
 * Una frase vacía debe devolver cero. En esta versión se cuentan las cinco vocales básicas sin incluir tildes.
 */

function contarVocales(frase: string): number {
  // Pasamos todo a minúsculas para no diferenciar A de a.
  const texto = frase.toLowerCase();

  // Este contador acumulará la cantidad de vocales encontradas.
  let contador = 0;

  // Recorremos cada carácter de la frase.
  for (const caracter of texto) {
    // Verificamos si el carácter actual es una vocal.
    if ("aeiou".includes(caracter)) {
      contador++;
    }
  }

  return contador;
}

// Prueba 1
console.log(contarVocales("Hola mundo"));

// Prueba 2
console.log(contarVocales("TypeScript"));


/*
 * PRUEBAS
 * contarVocales("Hola mundo") devuelve 4.
 * contarVocales("TypeScript") devuelve 2.
 */
