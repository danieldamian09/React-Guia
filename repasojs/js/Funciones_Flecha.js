// funciones arrow

// cuando toma varios parametros la funcion, si utilizamos ()
let viajando = destino => `Viajando a la ciudad de ${destino}`;


let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);