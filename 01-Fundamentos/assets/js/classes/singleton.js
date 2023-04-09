class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    //Valida que haya una instancia ya creada, si es asi la sigue utilizando.
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;
    return this;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("BlackPanther");
const instancia3 = new Singleton("Spiderman");

console.log(`Nombre de la instancia1 es:  ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es:  ${instancia2.nombre}`);
console.log(`Nombre de la instancia3 es:  ${instancia3.nombre}`);
