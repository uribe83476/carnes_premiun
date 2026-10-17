/*
 * RETO 9. Promedio y aproximación
 *
 * Descripción:
 * Recibir una lista de notas, calcular el promedio y determinar si se alcanza una nota mínima de aprobación de 3.0.
 *
 * Estrategia:
 * Primero verifico que exista al menos una nota. Luego acumulo, divido por la cantidad de elementos y comparo el resultado con 3.0.
 *
 * Caso límite / mejora:
 * Una lista vacía debe generar un error controlado en lugar de intentar dividir entre cero.
 */

type ResultadoPromedio = {
  promedio: number;
  aprobado: boolean;
};

function calcularPromedio(notas: number[]): ResultadoPromedio {
  // No podemos calcular un promedio si no existen notas.
  if (notas.length === 0) {
    throw new Error("La lista de notas no puede estar vacía.");
  }

  // Acumulamos todas las notas.
  let suma = 0;

  for (const nota of notas) {
    suma += nota;
  }

  // Dividimos la suma entre la cantidad de notas.
  const promedio = suma / notas.length;

  // Redondeamos a dos decimales para mostrar un resultado más claro.
  const promedioRedondeado = Math.round(promedio * 100) / 100;

  // La nota mínima de aprobación es 3.0.
  const aprobado = promedioRedondeado >= 3;

  return {
    promedio: promedioRedondeado,
    aprobado
  };
}

// Prueba 1
console.log(calcularPromedio([4, 3, 5]));

// Prueba 2
console.log(calcularPromedio([2, 2.5, 3]));


/*
 * PRUEBAS
 * calcularPromedio([4, 3, 5]) devuelve promedio 4 y aprobado true.
 * calcularPromedio([2, 2.5, 3]) devuelve aproximadamente 2.5 y aprobado false.
 */
