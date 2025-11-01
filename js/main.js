import { actualizarContador } from "./actualizar_contador.js";
import { cargar_productos } from "./carga_productos.js";
import { cargarEventosAgregar } from "./cargar_evento.js";
import { guardarCarrito } from "./guardar_carrito.js";

document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    
    cargar_productos().then(() => {
        cargarEventosAgregar();
    });

    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    vaciarCarritoBtn.addEventListener('click', () => {
        guardarCarrito([]);
        actualizarContador();
        alert('El carrito se ha vaciado');
    });
});