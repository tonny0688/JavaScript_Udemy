
//funcion de flecha
const regresaTrue = () => {
    console.log('Regresa true');
    return true;

}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('not o la negacion')
console.log(true);
console.log(!true);

console.log(!regresaFalse());

console.warn('And')

console.log(regresaFalse() && regresaTrue()); //False, evalua el true y continua.

console.warn('OR')
console.log(true || false);

console.log(regresaTrue() && regresaFalse());//True, evalua el true y continua.



