import React from 'react';

const Producto = ({producto}) => {

    // para extraer los valores del objeto producto que viene de .map en el padre
    const {id, nombre, precio} = producto;

    // agregar producto al carrito
    const seleccionarProducto = id => {
        console.log('comprando ....', id);
    }


    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button
                type='button'
                onClick={ () => seleccionarProducto(id) }
            >
                Comprar
            </button>
        </div>
     );
}
 
export default Producto;