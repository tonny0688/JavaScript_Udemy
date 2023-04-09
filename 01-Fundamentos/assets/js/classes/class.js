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

  //Se settea que el parametro sea en mayuscula
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

const spiderMan = new Persona();
const ironMan = new Persona("Tonny", "123", "Ninguna");
spiderMan.setComidaFavorita = `Pie de la tia May`;
spiderMan.getComidaFavorita;
console.log(spiderMan);
console.log(spiderMan.getComidaFavorita);
console.log(Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
/*console.log(ironMan);
ironMan.quienSoy();*/
