import { obtenerCarrito } from "./obtener_carrito.js";

export function actualizarContador(){
    const contadorCarrito = document.getElementById('carrito');
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        contadorCarrito.textContent = '';
    } else {
        contadorCarrito.textContent = ` ${carrito.length}`;
    }
}