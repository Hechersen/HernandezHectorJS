// Variables

let nombre;
let promedio = 0;
let sumaNotas = 0;
let notaMasAlta = -Infinity;
let NotaMasBaja = Infinity;

// Funciones

function pedirNombre() {
    nombre = prompt("Ingrese su nombre");
    console.log("Bienvenido " + nombre);
}

function calcularPromedios() {

    let cantidadNotas;

    do {

        {

            // Pedimos la cantidad de calificaciones
            cantidadNotas = parseInt(prompt("Bienvenido " + nombre + " ingrese la cantidad de notas a promediar"));

            // Nos aseguramos que sea un número positivo

            if (cantidadNotas <= 0) {
                alert("Por favor ingrese un número válido");
            }
        }
    }

    while (cantidadNotas <= 0);

    // Pedimos que ingrese las calificaciones

    for (let i = 1; i <= cantidadNotas; i++) {
        nota = parseInt(prompt("Ingrese su calificación"));
        console.log(nota);
        sumaNotas += nota;

        // Notas más alta y más baja

        if (nota > notaMasAlta) {
            notaMasAlta = nota;
        }

        if (nota < NotaMasBaja) {
            NotaMasBaja = nota;
        }


    }

    // Calculamos el promedio

    if (cantidadNotas > 0) {
        promedio = sumaNotas / cantidadNotas;
        console.log("El promedio de tus calificaciones es de " + promedio);
        console.log("Tu nota mas alta fue un " + notaMasAlta);
        console.log("Tu nota mas baja fue un " + NotaMasBaja);
    }
}

// Llamado a las funciones

pedirNombre();
calcularPromedios();
