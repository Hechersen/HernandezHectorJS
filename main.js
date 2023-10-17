// Funciones

function pedirNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese su nombre");
    } while (!nombre);
    console.log("Bienvenido " + nombre);
    return nombre;
}

function calcularPromedios() {

    let promedio = 0;
    let sumaNotas = 0;
    let notaMasAlta = -Infinity;
    let notaMasBaja = Infinity;
    let cantidadNotas;

    do {

        // Pedimos la cantidad de calificaciones

        cantidadNotas = parseInt(prompt("Bienvenido " + nombre + " ingrese la cantidad de notas a promediar"));

        // Nos aseguramos que sea un número positivo

        if (cantidadNotas <= 0 || (isNaN(cantidadNotas))) {
            alert("Por favor ingrese un número válido");
        }
    }

    while (cantidadNotas <= 0 || (isNaN(cantidadNotas)));

    // Pedimos que ingrese las calificaciones

    for (let i = 1; i <= cantidadNotas; i++) {
        let nota
        do {
            nota = parseInt(prompt("Ingrese su calificación"));

            if (nota <= 0 || (isNaN(nota))) {
                alert("Por favor ingrese una calificación válida");
            }
        }
        while (nota <= 0 || (isNaN(nota)));

        sumaNotas += nota;
        console.log(nota);

        // Nota más alta y más baja

        if (nota > notaMasAlta) {
            notaMasAlta = nota;
        }

        if (nota < notaMasBaja) {
            notaMasBaja = nota;
        }
    }

    // Calculamos el promedio

    if (cantidadNotas > 0) {
        promedio = sumaNotas / cantidadNotas;
        console.log("El promedio de tus calificaciones es de " + promedio);
        console.log("Tu nota mas alta fue un " + notaMasAlta);
        console.log("Tu nota mas baja fue un " + notaMasBaja);
    }

    let pedirOtroPromedio = prompt("Desea calcular otro promedio? Ingrese 'Sí' para consultar o cualquier otra cosa para salir del programa");

    if (pedirOtroPromedio === "Sí") {
        pedirNombre();
        calcularPromedios();
    } else {
        console.log("Gracias por usar nuestro programa. Hasta luego!");
    }
}

// Llamado a las funciones

let nombre = pedirNombre();
calcularPromedios();

