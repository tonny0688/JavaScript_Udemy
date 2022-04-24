const superHeroes = ['Batman','SuperMan', 'Mujer Maravilla', 'AquaMan'];

console.warn('For Tradicional')

for (let i = 0; i < superHeroes.length; i++) {
    console.log(superHeroes[i]);
    
}

console.warn('For In')

for(let i in superHeroes){
    console.log(superHeroes[i]);
}

console.warn('For Of')

for(let heroe of superHeroes){
    console.log(heroe)
}