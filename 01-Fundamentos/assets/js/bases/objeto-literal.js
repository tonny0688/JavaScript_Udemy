let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: true,
    edad: 40,
    coords: {
        long: 98,
        lat: 44
    },
    trajes: [
        'Mark I', 'Mark V', 'HulkBuster'
    ],
    direccion: {
        zip: '1003 443',
        ubicacion: 'Malibu'
    }
};

console.log('Nombre ', personaje.nombre);
console.log('Vivo ', personaje.vivo);
console.log('Coordenadas ', personaje['coords']);
console.log('Latitud ', personaje['coords']['lat']);
console.log('Cantidad de Trajes ', personaje['trajes'].length);
console.log('Ultimo traje ', personaje.trajes[personaje.trajes.length - 1]);

//Mas detalles

//convertir objeto a array
const entriPares = Object.entries(personaje);
console.log(entriPares);

//bloquear objeto
Object.freeze(personaje);