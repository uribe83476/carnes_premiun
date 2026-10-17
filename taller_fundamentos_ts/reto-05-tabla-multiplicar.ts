/*
 * RETO 5. Tabla de multiplicar
 *
 * Descripción:
 * Generar la tabla de multiplicar de un número desde 1 hasta 10.
 *
 * Estrategia:
 * Uso un ciclo for porque conocemos de antemano que necesitamos exactamente diez multiplicaciones.
 *
 * Caso límite / mejora:
 * El número puede ser cero o negativo; la estructura del ciclo sigue funcionando sin cambios.
 */

function tablaMultiplicar(numero: number): string[] {
  // Aquí guardaremos cada resultado de la tabla.
  const resultados: string[] = [];

  // El ciclo empieza en 1 y termina en 10.
  for (let i = 1; i <= 10; i++) {
    // Calculamos la multiplicación actual.
    const resultado = numero * i;

    // Guardamos cada línea como texto.
    resultados.push(`${numero} x ${i} = ${resultado}`);
  }

  return resultados;
}

// Prueba 1
console.log(tablaMultiplicar(5));

// Prueba 2
console.log(tablaMultiplicar(10));


/*
 * PRUEBAS
 * tablaMultiplicar(5) genera diez operaciones desde 5 x 1 hasta 5 x 10.
 * tablaMultiplicar(10) genera la tabla del 10.
 */
