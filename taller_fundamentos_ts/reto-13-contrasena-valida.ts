/*
 * RETO 13. Contraseña válida
 *
 * Descripción:
 * Determinar si un texto tiene al menos ocho caracteres, una mayúscula y un número.
 *
 * Estrategia:
 * Separé las condiciones en variables con nombres claros. Esto permite entender qué requisito se cumple o cuál falta sin esconder toda la lógica en una sola condición.
 *
 * Caso límite / mejora:
 * Una contraseña corta, sin mayúscula o sin número debe marcarse como inválida. Esta validación es básica y no pretende ser un sistema de seguridad completo.
 */

type ResultadoContrasena = {
  valida: boolean;
  tieneLongitud: boolean;
  tieneMayuscula: boolean;
  tieneNumero: boolean;
};

function validarContrasena(contrasena: string): ResultadoContrasena {
  // Comprobamos cada condición por separado para que sea fácil de leer.
  const tieneLongitud = contrasena.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);

  // La contraseña solamente es válida si cumple las tres condiciones.
  const valida = tieneLongitud && tieneMayuscula && tieneNumero;

  return {
    valida,
    tieneLongitud,
    tieneMayuscula,
    tieneNumero
  };
}

// Prueba 1
console.log(validarContrasena("Clave123"));

// Prueba 2
console.log(validarContrasena("clave"));


/*
 * PRUEBAS
 * validarContrasena("Clave123") devuelve valida: true.
 * validarContrasena("clave") devuelve valida: false.
 */
