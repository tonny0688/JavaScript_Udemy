function saludar(){
console.log('funcion estandar');
return 1;
}

const saludar2 = function(){
    console.log('funcion anonima')
}

function saludarParametro(nombre){
    console.log('hola ' + nombre);
}

const saludar2conParametro = function(nombre){
    console.log('funcion anonima con parametro ' + nombre);
}

const saludarFlecha = () => {
    console.log('Funcion de flecha');
}


const saludarFlechaArgumentos = (nombre, edad, direccion) => {
    console.log('Funcion de flecha con Args: ' + nombre + ' '+ edad + ' '+ direccion);
}

saludar();
saludar2();
saludarParametro('Tonny');
saludar2conParametro('diaz');
saludarFlecha();
saludarFlechaArgumentos('tonny', 33, 'aserri');

//retornos

function sumar(a,b){
    return a + b;
}

const sumar2 = (a, b) => a + b;

function aleatorio() {
    return Math.random();
}

//Funcion de flecha con una sola linea y return
const aleatorio2 = () => Math.random();

const multiplica = (numero) => {
    let multiplica = numero * numero;
    return multiplica;
}

console.log(sumar(1,2));
console.log(sumar2(1,4));
console.log(aleatorio());
console.log(aleatorio2());
console.log(multiplica(3));