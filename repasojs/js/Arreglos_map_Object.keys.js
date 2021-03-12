// Arreglos y .map

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

console.log(carrito);

// para imprimir el carrito en nuestro documento html

const appContenedor = document.querySelector('#app');
appContenedor.innerHTML = carrito;


// <--------------------------- For Each ---------------------------------------------->

// es el ideal cuando tengo que mostar en el HTML

let html2 = '';

carrito.forEach(producto => {
    html2 += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html2;

// <--------------------------- Object Keys ---------------------------------------------->

const auto = {
    marca: 'Ford',
    modelo: 'Mustang',
    color: 'Negro',
    edicion: 94
}

console.log(auto);
console.log(Object.keys(auto));

