
function alumnos() {
    let nombres = new Array(10);
    for (let i = 0; i < 10; i++) {
        nombres[i] = prompt("Captura el nombre del alumno " + (i + 1));
    }
    alert("Alumnos iniciales:\n" + nombres.join("\n"));
    let nombre = prompt("Captura el nombre del alumno que quieres eliminar");
    let posicion = nombres.indexOf(nombre);
    nombres.splice(posicion, 1);
    alert("Alumnos finales:\n" + nombres.join("\n"));
}
