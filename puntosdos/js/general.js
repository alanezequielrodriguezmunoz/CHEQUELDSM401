document.addEventListener("DOMContentLoaded", function () {

    const formularios = document.querySelectorAll("form");

    formularios.forEach(function (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            const datos = new FormData(formulario);

            datos.forEach(function (valor, nombre) {
                localStorage.setItem(nombre, valor);
            });

            alert("Información guardada");

        });

    });

});