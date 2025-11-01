import { agregarAlCarrito } from "./agregar_al_carrito.js";

export function cargarEventosAgregar(){
    const botones = document.querySelectorAll('#productos-container button');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            agregarAlCarrito(boton.getAttribute('data-id'));
        })
    })
}