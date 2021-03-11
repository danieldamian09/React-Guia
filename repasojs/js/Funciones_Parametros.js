// parametros por default en las funciones declaradas

function actividad(nombre = 'Humberto', actividad = 'Estudiando PHP') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'aprender Javascript');
actividad('Pedro', 'Creando un sitio web');
actividad();
actividad('luis');


// parametros por default en las funciones expresadas

const actividad2 = function (nombre = 'Humberto', actividad = 'Estudiando PHP') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad2('Manuel', 'practicando react');