function letraE() {
    let anchos = [4, 1, 4, 1, 4];
    let dibujo = "";
    for (let fila = 0; fila < anchos.length; fila++) {
        for (let col = 0; col < anchos[fila]; col++) {
            dibujo += "X ";
        }
        dibujo += "\n";
    }
    document.getElementById("salida").innerHTML = dibujo;
}
