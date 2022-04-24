function acceso(){
    var contador=0;
    var edad = prompt("Ingrese su edad: ");
            var estatura = prompt("Ingrese su estatura: ");
            if (edad >= 13 && estatura >= 1.2) {
                alert("Entra")
                contador++;
                alert("Entrantes " + contador.toString())
            }
            else
            {
                alert("No cumple con los requisitos");
            }
}

