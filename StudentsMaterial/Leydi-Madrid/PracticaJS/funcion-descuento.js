function calcularDescuento (precio, descuentoPorcentaje) {
    const descuento = (precio * descuentoPorcentaje) / 100
    const precioConDescuento = precio - descuento

    return precioConDescuento
}

const precioOriginal = 1000
const porcentajeDescuento = 30
const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento)

console.log(precioFinal);