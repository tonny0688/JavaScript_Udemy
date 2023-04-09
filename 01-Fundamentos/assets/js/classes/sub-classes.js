class Persona {
  static _conteo = 0;
  static get conteo() {
    return `cantidad de instancias ${Persona._conteo}`;
  }

  // no se puede hacer referencia a las propiedades de la clase porque no estan instanciadas
  static mensaje() {
    console.log(`soy un mensaje estatico`);
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin Código",
    frase = "Sin Frase"
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;

    Persona._conteo += 1;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `la comida favorita de ${this.nombre} es ${this.comida}.`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, mi código es ${this.codigo}`);
  }
}

class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase); //llamada al constructor de la clase padre
    this.clan = "Avengers";
  }

  quienSoy() {
    super.quienSoy();
  }
}

const spiderMan = new Heroe("Tonny", "123", "Ninguna");

console.log(spiderMan);
