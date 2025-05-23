// Ejercicio 1: Array de alumnos distintos

let alumnos = [
    {
        nombre: "matias",
        apellido: "gonzalez",
        dni: 48945678,
        anio: 4,
        curso: "A",
        nota: 8,
    },
    {
        nombre: "martina",
        apellido: "lopez",
        dni: 48112345,
        anio: 4,
        curso: "A",
        nota: 9,
    },
    {
        nombre: "pedro",
        apellido: "martinez",
        dni: 48349678,
        anio: 5,
        curso: "A",
        nota: 7,
    },
    {
        nombre: "ana",
        apellido: "henriquez",
        dni: 48052678,
        anio: 4,
        curso: "B",
        nota: 5,
    },
    {
        nombre: "juan",
        apellido: "gomez",
        dni: 48110315,
        anio: 4,
        curso: "B",
        nota: 4,
    },
    {
        nombre: "martina",
        apellido: "diaz",
        dni: 48949478,
        anio: 5,
        curso: "A",
        nota: 5,
    },
    {
        nombre: "leonel",
        apellido: "rodriguez",
        dni: 48941178,
        anio: 3,
        curso: "B",
        nota: 9,
    },
    {
        nombre: "felipe",
        apellido: "romero",
        dni: 48969078,
        anio: 3,
        curso: "B",
        nota: 10,
    }
]

// Ejercicio 2: Capitalizar function

function Capitalizar(palabra) {
    let palabraCapitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    return palabraCapitalizada;
}

// Ejercicio 3: MostrarAlumnos function

function MostrarAlumnos(alumnos) {
    alumnos.forEach(alumno => {
        stringDni = alumno.dni.toString();
        stringDni = stringDni.slice(0, 2) + "." + stringDni.slice(2, 5) + "." + stringDni.slice(5, 8);
        console.log(`DNI: ${stringDni} \nNombre y apellido: ${alumno.nombre} ${alumno.apellido}\nCurso: ${alumno.anio}°${alumno.curso}\nNota: ${alumno.nota}\n`);
    });
}

// Ejercicio 4: Capitzalizar los nombres y apellidos de los alumnos

function CapitalizarAlumnos(alumnos) {
    alumnos.forEach(alumno => {
        alumno.nombre = Capitalizar(alumno.nombre);
        alumno.apellido = Capitalizar(alumno.apellido);
    });
}
CapitalizarAlumnos(alumnos);

// Ejercicio 5: Mostrar alumnos

MostrarAlumnos(alumnos);

// Ejercicio 6: Filtrar alumnos

function FiltrarAlumnosAprobados(alumnos) {
    let alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 6);
    console.log("Alumnos aprobados:\n");
    MostrarAlumnos(alumnosAprobados);
}

function FiltrarAlumnos4to(alumnos) {
    let alumnos4to = alumnos.filter(alumno => alumno.anio = 4);
    console.log("Alumnos de 4to año:\n");
    MostrarAlumnos(alumnos4to);
}

function FiltrarAlumnosCursoB(alumnos) {
    let alumnosCursoB = alumnos.filter(alumno => alumno.curso == "B");
    console.log("Alumnos del B:\n");
    MostrarAlumnos(alumnosCursoB);
}

FiltrarAlumnosAprobados(alumnos);
FiltrarAlumnos4to(alumnos);
FiltrarAlumnosCursoB(alumnos);