let a = 4;

if (a >= 10) {
    console.log('A es mayor que 10');
} else {
    console.log('A es menor que 10');
}

let dia = new Date();
//tener cuidado de no usar el = ya que seria una asignacion, el === es para que sea igual al tipo
console.log(dia);
if (dia === 1)
{
console.log('hoy es lunes');
}else if (dia === 2){
    console.log('hoy es martes');
} 
else {
    console.log('no es ni lunes, ni martes');
}

function diaSemana(numeroDia){
    const arregloDias = ['domingo','lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    let dia = arregloDias[numeroDia];
    return dia;
}

const arregloDias2 = ['domingo','lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

let letraDia = diaSemana(10);
console.log(letraDia || 'No definido el dia');

console.log(arregloDias2[3] || 'No definido el dia');

console.log('Fin');