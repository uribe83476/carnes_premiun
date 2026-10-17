/*
 * RETO 1. Conversor de temperatura
 *
 * Descripción:
 * Convertir una temperatura en grados Celsius a Fahrenheit y Kelvin.
 *
 * Estrategia:
 * Uso las dos fórmulas de conversión y devuelvo los resultados juntos para que la función sea fácil de reutilizar.
 *
 * Caso límite / mejora:
 * El punto de congelación del agua, 0 °C, permite comprobar que las fórmulas están funcionando correctamente.
 */

type Temperaturas = {
  fahrenheit: number;
  kelvin: number;
};

function convertirTemperatura(celsius: number): Temperaturas {
  // Fórmula para convertir Celsius a Fahrenheit.
  const fahrenheit = (celsius * 9) / 5 + 32;

  // Para Kelvin solamente sumamos 273.15.
  const kelvin = celsius + 273.15;

  // Devolvemos las dos conversiones agrupadas en un objeto.
  return { fahrenheit, kelvin };
}

// Prueba 1
console.log(convertirTemperatura(0));

// Prueba 2
console.log(convertirTemperatura(25));


/*
 * PRUEBAS
 * convertirTemperatura(0) devuelve 32 °F y 273.15 K.
 * convertirTemperatura(25) devuelve 77 °F y 298.15 K.
 */
