const nombreProducto = "cuaderno";
const precioProducto = 12000;
const cantidadProducto = true;

type ProductoDatos = {
    nombre: string;
    precio: number;
    cantidad: boolean;
}
const cuaderno: ProductoDatos = {
    nombre: "cuaderno",
    precio: 12000,
    cantidad: true
}

class Producto {
    private precio: number;
    public nombre: string;
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        if (precio < 0) {
            console.log("El precio no puede ser negativo");
        }
        this.precio = precio;
    }

    getPrecio(): number {
        return this.precio;
    }

}

const cuaderno2 = new Producto("cuaderno", 12000);
console.log(cuaderno2.nombre); // "cuaderno"
console.log(cuaderno2.getPrecio()); // 12000
const cuaderno3 = new Producto("cuaderno", -12000); // Error: El precio no puede ser negativo
console.log(cuaderno3); // "cuaderno"
console.log(cuaderno2);