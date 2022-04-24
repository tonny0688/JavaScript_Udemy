const crearPersona = (nombre, apellido) => ({ nombre,apellido })
const persona = crearPersona('Tonny', 'Diaz');

console.log(persona);
//-----------------------------

function imprimeArgumentos(){
    console.log(arguments)
}

//Crear un arreglo de argumentos
const imprimeArgumentos2 = (edad, ...Args) => {
    // console.log({edad, Args})
    return Args;
}

imprimeArgumentos(1,2,'Tonny',false);

//---------------------------------------
const [casado, numero, nombre, vivo] = imprimeArgumentos2(4,6,'PRueba',true);
console.log({casado, numero, nombre, vivo});

const {apellido:nuevoApellido} = crearPersona('Anthony', 'Sanchez')
console.log({nuevoApellido});

//destructuracion

const tony = {
    nombre:'Tony Stark',
    codeName:'IronMan',
    vivo:true,
    edad:46,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 13, trajes}) => {
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);
}

imprimePropiedades(tony);




