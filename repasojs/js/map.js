// <--------------------------- map ---------------------------------------------------->

// el map conserva el arreglo original y devuelve un nuevo arreglo

let carrito2 = ['Producto 4', 'Producto 5', 'Producto 6'];
console.log(carrito2);

let carrito3 = carrito2.map(producto => {
    return `El producto es ` + producto;
})

console.log(carrito3);

