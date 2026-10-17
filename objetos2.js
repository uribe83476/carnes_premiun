class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(${this.nombre} hace un sonido);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log(${this.nombre} dice: ¡Guau!);
    }
}

const perro = new Perro("Firulais");

perro.hablar(); // Firulais hace un sonido
perro.ladrar(); // Firulais dice: ¡Guau!