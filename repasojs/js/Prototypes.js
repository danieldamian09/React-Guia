// function mostrarInformacionTarea(tarea, prioridad) {
//     return `la tarea ${tarea} tiene una prioridad de ${prioridad}`;
// }

const persona = {
    nombre: 'Humberto',
    profesion: 'Desarrollador Web',
    edad: 37
}

console.log(persona);
// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion)
// console.log(mostrarCliente)

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// agregar prototype a tarea fuera de la funcion
Tarea.prototype.mostrarInformacionTarea = function () {
    return `la tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}



const tarea1 = new Tarea('Aprender React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());


const tarea2 = new Tarea('Pasear al perro', 'Media');
console.log(tarea2.mostrarInformacionTarea());




// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)
// console.log(mostrarInfo);
