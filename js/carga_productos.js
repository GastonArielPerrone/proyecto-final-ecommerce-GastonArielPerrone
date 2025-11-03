
export function cargar_productos(){
    return fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById('productos-container');
    const mensajeCargando = document.getElementById('mensaje-cargando');

    mensajeCargando.style.display = "none";

    productos.forEach(producto => {
      const card = document.createElement('article');
      card.classList.add("article__product");
      card.innerHTML = `<img src="${producto.image}" alt="${producto.title}" width="150" class="img__productos">
      <h3>${producto.title}</h3>
      <p>${producto.price}</p>
      <button data-id="${producto.id}">Añadir al carrito</button>`;

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('mensaje-cargando').textContent = "Ocurrió un error al obtener los productos: " + error.message;
  })
};