class Persona {
  //constructor alternativo utilizando desestructuracion de objeto.
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info; ${this.nombre},${this.apellido},${this.pais} `);
  }
}

const nombre1 = "tonny",
  apellido1 = "diaz",
  pais1 = "costa rica";

const tonny = {
  nombre: "Tonny",
  apellido: "Diaz",
  pais: "Costa Rica",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(tonny);

console.log(persona1);
console.log(persona2);
