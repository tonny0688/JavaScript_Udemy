let juegos = ['uno', 'dos', 'tres', 'cuatro'];
// console.log(juegos.length);
// console.log(juegos[juegos.length - 1]);
let primero = console.log(juegos[0]);
let ultimo = console.log(juegos[juegos.length - 1]);

juegos.forEach((x,y,z) => {
    console.log({x,y,z})
});

juegos.push('Sonic');
console.log(juegos.length, juegos);

juegos.unshift('Pac-Man');

console.log(juegos.length, juegos);

juegos.pop()
console.log(juegos.length, juegos);

juegos.splice(0,3);
console.log(juegos);

let indiceDos = juegos.indexOf('cuatro')
console.log(indiceDos);

