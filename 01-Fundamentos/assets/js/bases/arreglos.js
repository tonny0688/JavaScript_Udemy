const arr = new Array(10);
console.log(arr);

const arr2 = [];

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono trigger'];
console.log(videoJuegos);
console.log('Primer Juego:' + videoJuegos[0]);

let juegos = [
    true,
    123,
    'prueba',
    1 + 2,
    function(){},
    ()=>{},
    {a: 'tonny'},
    ['X', 'Megaman', 'Zero', 'Dr. Light',['doctor willie', 'otro']]
];

console.log(juegos);

console.log('Tarea: ' + juegos[7][4][1]);