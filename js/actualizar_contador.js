import { obtenerCarrito } from "./obtener_carrito.js";

export function actualizarContador(){
    const contadorCarrito = document.getElementById('contador-carrito');
    const carrito = obtenerCarrito();
    contadorCarrito.textContent = `Productos en carrito: ${carrito.length}`;
}