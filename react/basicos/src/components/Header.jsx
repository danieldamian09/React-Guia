import React from 'react';

function Header ({titulo}) {

    // console.log(props)

    // const edad = 18;

    // let mensaje;
    
    // if (edad >= 18) {

    //     mensaje = 'Eres mayor de edad';
        
    // } else {
    //     mensaje = 'Eres menor de edad'
    // }

    return(
        // <h1>Titulo desde el Header</h1>
        // <h1>{mensaje}</h1>
        <h1 className="encabezado"> {titulo} </h1>
    )
}

export default Header;