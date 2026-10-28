 
function muerte() {
    arreglo = new Array(7);
    suma = 0;
    for (let i = 0; i < 7; i++) {
        let numero = prompt("Captura un número");
        arreglo[i] = parseFloat(numero);
        suma += arreglo[i];
    }
    alert("Números capturados: " + arreglo);
    alert("Suma: " + suma);
    let minimo = Math.min(...arreglo);
    let maximo = Math.max(...arreglo);
    alert("Mínimo: " + minimo);
    alert("Máximo: " + maximo);
    alert("Promedio: " + (suma / 7));
}
 

 
