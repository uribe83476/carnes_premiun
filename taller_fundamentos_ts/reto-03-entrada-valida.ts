/*
 * RETO 3. Entrada válida
 *
 * Descripción:
 * Recibir una edad y decidir si una persona puede entrar a una actividad. Para este ejercicio se toma como edad mínima 18 años.
 *
 * Estrategia:
 * Uso una condición que primero descarta un dato inválido y después comprueba la edad mínima.
 *
 * Caso límite / mejora:
 * Una edad negativa debe rechazarse. También es importante probar exactamente 18 años.
 */

function puedeEntrar(edad: number): boolean {
  // Rechazamos edades negativas porque no tienen sentido en este contexto.
  if (edad < 0) {
    return false;
  }

  // La actividad permite la entrada desde los 18 años.
  return edad >= 18;
}

// Prueba 1
console.log(puedeEntrar(20));

// Prueba 2
console.log(puedeEntrar(16));


/*
 * PRUEBAS
 * puedeEntrar(20) devuelve true.
 * puedeEntrar(16) devuelve false.
 */
