let estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
    materias: ["Matemáticas", "Física", "Programación"]
};
for (let clave in estudiante) {
    console.log(clave + ": " + estudiante[clave]);
}