import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
      // aca agregamos el estado inicial
      { id: 1, nombre: 'Camisa ReatcJs', precio: 50 },
      { id: 2, nombre: 'Camisa VueJs', precio: 50 },
      { id: 3, nombre: 'Camisa NodeJs', precio: 50 },
      { id: 4, nombre: 'Camisa AngularJs', precio: 50 },
  ]);



  // Obtener Fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo = "Tienda Virtual"
        // numero= {20}
      />

      <h2>Lista de Productos</h2>
      {productos.map(producto => (
        <Producto
          key = {producto.id}
          producto = {producto}
        />
      ))}

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  )
}

export default App;
