/*
 * RETO 0. Hola, programa
 *
 * Descripción:
 * Crear una función que reciba un nombre y devuelva un saludo.
 *
 * Estrategia:
 * Recibo el texto, limpio los espacios y compruebo si realmente hay un nombre. Después construyo el saludo usando una plantilla de texto.
 *
 * Caso límite / mejora:
 * Una cadena vacía no debería producir un saludo con un espacio en blanco.
 */

function saludar(nombre: string): string {
  // trim() elimina espacios innecesarios al principio y al final.
  const nombreLimpio = nombre.trim();

  // Si no se recibió un nombre, devolvemos un mensaje controlado.
  if (nombreLimpio === "") {
    return "Hola, ¿cómo estás?";
  }

  // Interpolamos el nombre dentro del saludo.
  return `Hola, ${nombreLimpio}!`;
}

// Prueba 1
console.log(saludar("Daniel"));

// Prueba 2
console.log(saludar("Ana"));


/*
 * PRUEBAS
 * saludar("Daniel") devuelve "Hola, Daniel!".
 * saludar("Ana") devuelve "Hola, Ana!".
 */
