export function guardarCarrito(carrito){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}