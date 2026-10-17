class Producto {
  private precio: number;

  constructor(
    public nombre: string,
    precioInicial: number,
  ) {
    if (precioInicial < 0) {
      throw new Error("El precio no puede ser negativo");
    }

    this.precio = precioInicial;
  }

  aplicarDescuento(porcentaje: number): void {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("El descuento debe estar entre 0 y 100");
    }

    this.precio *= 1 - porcentaje / 100;
  }

  precioActual(): number {
    return this.precio;
  }
}

const cuaderno = new Producto("Cuaderno", 12000);
const marcador = new Producto("Marcador", 6000);

cuaderno.aplicarDescuento(10);
console.log(cuaderno.precioActual()); // 10800
console.log(marcador.precioActual()); // 6000