import { actualizarContador } from "./actualizar_contador.js";
import { cargar_productos } from "./carga_productos.js";
import { cargarEventosAgregar } from "./cargar_evento.js";
import { guardarCarrito } from "./guardar_carrito.js";
import { cargarProductosAgregados } from "./cargar_productos_agregados.js";

document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    
    if (window.location.pathname.includes('productos.html')) {
        cargar_productos().then(() => {
            cargarEventosAgregar();
        });
    }

    if (window.location.pathname.includes('carrito.html')) {
        cargarProductosAgregados();
    }

    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            guardarCarrito([]);
            actualizarContador();
            cargarProductosAgregados();
            alert('El carrito se ha vaciado');
        });
    }
});