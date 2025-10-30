export async function cargar_productos(){
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(productos => console.log(productos));
}