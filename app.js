let vcontrol = "s";
let vcontador = 1;
let vnota = 0;
let arrayNotas = [];
let arrayAlumnos = [];


function fcargardatos() {
    vcontrol = prompt("Bienvenido al programa de notas, ingrese s para cargar datos o n para salir");
    while (vcontrol == "s") {
        //mientras el usuario coloque s, seguira ejecutando el programa     
        //bloque de procedimiento  
        //primer elemento de los array en posicion 0
        vnota = Number(prompt("Ingrese la nota del alumno :" + (vcontador)));
        if (vnota > 10) {
            alert("La nota no puede ser mayor a 10");
        } else if (vnota >= 0 && vnota != null) {
            arrayNotas.push(vnota);
            console.log("Nota ingresada con exito: " + vnota);
        }
        arrayAlumnos.push(String(prompt("Ingrese el nombre del alumno: " + (vcontador))));
        console.log("Nombre ingresado con exito: " + arrayAlumnos[vcontador - 1]);
        //fin bloque procedimiento
        vcontador++;
        vcontrol = prompt("Desea continuar? s/n");
    }
    document.write("<h1>Gracias por utilizar la plataforma, hasta luego</h1>");
}

function fpromedio() {
    let vpromedio = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        vpromedio = vpromedio + arrayNotas[i];
    }
    vpromedio = vpromedio / arrayNotas.length;
    console.log("El promedio de las notas es: " + vpromedio);
    return vpromedio;
}

function fnotamasalta() {
    var vnotamasalta = Math.max(...arrayNotas);
    var vialnota = arrayNotas.indexOf(Number(vnotamasalta));
    var valumnonotamasalta = arrayAlumnos[vialnota];
    console.log("La nota mas alta es " + vnotamasalta + " y el alumno es " + valumnonotamasalta);
}

function fcantidadalumnos() {
    console.log("La cantidad de alumnos es: " + arrayAlumnos.length);
}

function faprobaron() {
    let vaprobados = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        if (arrayNotas[i] >= 6) {
            //alumno aprobado
            vaprobados++;
        }
    }
    console.log("La cantidad de alumnos aprobados es: " + vaprobados);
}

function freprobaron() {
    let vreprobados = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        if (arrayNotas[i] < 6) {
            vreprobados++;
        }
    }
    console.log("La cantidad de alumnos reprobados es: " + vreprobados);
}

function fapp() {
    alert("TP2 Funciones-Arrays- Simulador de Notas");
    console.log("Bienvenido al programa de notas");
    fcargardatos();
    fcantidadalumnos();
    fpromedio();
    faprobaron();
    freprobaron();
    fnotamasalta();
    document.write("<h1>Gracias por utilizar la plataforma, hasta luego</h1>");
    console.log("Gracias por utilizar la plataforma, hasta luego");
}
fapp();