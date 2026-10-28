function guardar() {
    let dia = document.getElementById("dia").selectedIndex;

    let hr = document.getElementById("hr").value;
    let evento = document.getElementById("evento").value;
    let desc = document.getElementById("desc").value;

    document.getElementById("hr" + dia).innerHTML = hr;
    document.getElementById("evento" + dia).innerHTML = evento;
    document.getElementById("desc" + dia).innerHTML = desc;
}
