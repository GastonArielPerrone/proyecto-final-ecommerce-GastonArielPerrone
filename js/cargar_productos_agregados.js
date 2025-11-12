import { obtenerCarrito } from "./obtener_carrito.js";
import { eliminarProducto } from "./eliminar_producto.js";

export function cargarProductosAgregados() {
    const carrito = obtenerCarrito();
    const contenedor_carrito = document.getElementById('carrito-container');
    const mensajeCargando = document.getElementById('mensaje-cargando');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    if (carrito.length === 0) {
        vaciarCarritoBtn.style.display = 'none';
    } else {
        vaciarCarritoBtn.style.display = 'block';
    }

    fetch('../js/productos.json')
        .then(response => response.json())
        .then(productos => {
            if (mensajeCargando) {
                mensajeCargando.style.display = 'none';
            }

            contenedor_carrito.innerHTML = '';
            const productosEnCarrito = productos.filter(producto => carrito.map(id => String(id)).includes(String(producto.id)));

            productosEnCarrito.forEach(producto => {
                const card = document.createElement('article');
                card.classList.add("article__product");
                card.innerHTML = `<img src="${producto.img}" alt="${producto.titulo}" class="img__productos">
                <h3>${producto.titulo}</h3>
                <p> U$D ${producto.precio}</p>
                <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>`;

                contenedor_carrito.appendChild(card);
            });

            const botonesEliminar = document.querySelectorAll('.eliminar-producto');
            botonesEliminar.forEach(boton => {
                boton.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    eliminarProducto(id);
                    cargarProductosAgregados();
                });
            });
        })
        .catch(error => {
            if (mensajeCargando) {
                mensajeCargando.textContent = "Ocurrió un error al obtener los productos: " + error.message;
            }
        });
}