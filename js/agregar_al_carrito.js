import { obtenerCarrito } from './obtener_carrito.js'
import { actualizarContador } from './actualizar_contador.js';
import { guardarCarrito } from './guardar_carrito.js';

export function agregarAlCarrito(id){
    let carrito = obtenerCarrito();
    carrito.push(id)

    guardarCarrito(carrito);
    actualizarContador();

    alert('Producto agregado al carrito');
};