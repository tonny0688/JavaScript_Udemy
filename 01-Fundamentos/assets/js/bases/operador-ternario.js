
const dia = 4; 
const horaActual = 12;

let horaApertura;
let horaCierre;
let mensaje; //abierto o cerrado, abrimos a las xx

//if(dia === 0 || dia === 6)
// if([0,6].includes(dia))
// {
//     horaApertura = 9;
//     mensaje = 'hoy abrimos a las 9 am';
// }
// else{
//     horaApertura = 11;
//     mensaje = 'hoy abrimos a las 11 am';
// };

horaApertura = ([0,6].includes(dia) ? 9 : 11);
mensaje = (horaActual >= horaApertura ? `Estamos abiertos` : `Abrimos a las ${horaApertura}`)
console.log(mensaje);

// if (horaActual >= horaApertura && horaActual <= horaActual)
// {
//     mensaje = 'Estamos abiertos';
// }
// else
// {
//     mensaje = `Estamos cerrados ${horaApertura}`;
// }

// console.log(mensaje);
