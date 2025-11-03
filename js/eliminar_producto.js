import { obtenerCarrito } from './obtener_carrito.js';
import { actualizarContador } from './actualizar_contador.js';
import { guardarCarrito } from './guardar_carrito.js';

export function eliminarProducto(id){
    let carrito = obtenerCarrito();
    carrito = carrito.filter(productoId => productoId != id);

    guardarCarrito(carrito);
    actualizarContador();
};