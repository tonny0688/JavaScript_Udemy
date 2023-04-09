//Declaración de objeto
const anthony = {
  nombre: "Anthony",
  edad: 30,
  //Referencia al mismo objeto.
  imprimir() {
    console.log(`Nombre es ${this.nombre}`);
  },
};

//Declaración de objeto de forma antigua
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre es ${this.nombre}, la edad es ${this.edad}`);
  };
}

const Tonny = new Persona("Anthony", 33);
const Melissa = new Persona("Melissa", 28);
Tonny.imprimir();
Melissa.imprimir();
//

//console.log(anthony.imprimir());
