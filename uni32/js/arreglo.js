function calcular() {
    let precios = [
        [120, 140, 180],
        [120, 240, 310],
        [240, 520, 890]
    ];
    let puesto = document.getElementById("puesto").selectedIndex;
    let nivel = document.getElementById("nivel").selectedIndex;
    let horas = parseFloat(document.getElementById("horas").value);
    let total = precios[puesto][nivel] * horas;
    document.getElementById("total").value = "$" + total;
    alert("Total a pagar: $" + total);
}
