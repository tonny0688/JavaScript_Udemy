

let a = 10;
let b = a;

a = 30;

console.log({a,b});

//Objetos son enviados por referencia, solo los primitivos son por valor
let juan = ({nombre: 'juan'});
//Operador spread ...
let ana = {...juan};
ana.nombre = 'ana';

console.log({juan, ana});

//

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona; 
} 

let peter = {nombre: 'Peter'};
let tony = cambiaNombre({...peter});

console.log({peter, tony});

//

const frutas = ['Manzana', 'Fresa','Sandia'];
//Destructurelo y cree un nuevo objeto con la info del anterior.
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');


otrasFrutas.push('Melon');

console.table({frutas,otrasFrutas});