//  Object Literal Enhacement (colcar valores juntos para formar un objeto)

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];


// forma anterior

// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }


// forma nueva

const metallica = {banda, genero, canciones};


console.log(metallica);