// Ejercicio 1: Array de alumnos distintos

let alumnos = [
    {
        nombre: "Matias",
        apellido: "Gonzalez",
        dni: 48945678,
        anio: 4,
        curso: "A",
        nota: 8,
    },
    {
        nombre: "Martina",
        apellido: "Lopez",
        dni: 48112345,
        anio: 4,
        curso: "A",
        nota: 9,
    },
    {
        nombre: "Pedro",
        apellido: "Martinez",
        dni: 48349678,
        anio: 5,
        curso: "A",
        nota: 7,
    },
    {
        nombre: "Ana",
        apellido: "Henriquez",
        dni: 48052678,
        anio: 4,
        curso: "B",
        nota: 5,
    },
    {
        nombre: "Juan",
        apellido: "Gomez",
        dni: 48110315,
        anio: 4,
        curso: "B",
        nota: 4,
    },
    {
        nombre: "Martina",
        apellido: "Diaz",
        dni: 48949478,
        anio: 5,
        curso: "A",
        nota: 5,
    },
    {
        nombre: "Leonel",
        apellido: "Rodriguez",
        dni: 48941178,
        anio: 3,
        curso: "B",
        nota: 9,
    },
    {
        nombre: "Felipe",
        apellido: "Romero",
        dni: 48969078,
        anio: 3,
        curso: "B",
        nota: 10,
    }
]

function Capitalizar(palabra) {
    let palabraCapitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    console.log(palabraCapitalizada);
    return palabraCapitalizada;
}

function MostrarAlumnos(alumnos) {
    alumnos.forEach(alumno => {
        console.log(`DNI: ${alumno.dni} \nNombre y apellido: ${alumno.nombre} ${alumno.apellido}\nCurso: ${alumno.anio}°${alumno.curso}\nNota: ${alumno.nota}\n`);
    });
}
MostrarAlumnos(alumnos);