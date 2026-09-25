const anio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const enlaceExterno = document.getElementById("enlaceExterno");
const btnDestacar = document.getElementById("btnDestacar");
const caja = document.getElementById("caja");
const btnOcultar = document.getElementById("btnOcultar");
const promocion = document.getElementById("promocion");
const btnColor = document.getElementById("btnColor");
btnOcultar.textContent = "Ocultar";

//Mision 1
anio.textContent = new Date().getFullYear();

//Mision 2
titulo.textContent = "MobilStore";
subtitulo.textContent = `${anio.textContent} Conecta con lo que necesitas`;

//Mision 3
enlaceExterno.setAttribute("href", "https://www.apple.com");
enlaceExterno.setAttribute("rel", "noopener");
enlaceExterno.setAttribute("target", "_blank");
enlaceExterno.setAttribute("title", "Visita el sitio oficial de Apple Colombia");
enlaceExterno.textContent = "Ver sitio oficial";

//Mision 4
function actualizarContador() {
    const lista = document.getElementById("lista");
    const cantidad = lista.querySelectorAll("li").length;
    const contador = document.getElementById("contador");

    if (cantidad === 0) {
        contador.textContent = "Aun no hay elementos registrados.";
    } else if (cantidad === 1) {
        contador.textContent = "Hay 1 elemento registrado";
    } else {
        contador.textContent = `Hay ${cantidad} elementos registrados`;
    }
}
actualizarContador();

function actualizarContadorDos() {
    const tabla = document.getElementById("tabla");
    const cantidad = tabla.querySelectorAll("tbody tr").length;
    const contadorDos = document.getElementById("contadorDos");

    if (cantidad === 0) {
        contadorDos.textContent = "Aun no hay elementos registrados.";
    } else if (cantidad === 1) {
        contadorDos.textContent = "Hay 1 elemento registrado";
    } else {
        contadorDos.textContent = `Hay ${cantidad} elementos registrados.`;
    }
}
actualizarContadorDos();

//Mision 5
function btnDestacado() {
    caja.classList.toggle("destacada");
}
btnDestacar.addEventListener("click", btnDestacado);

//Mision 6
function ocultarPormocion() {
    promocion.classList.toggle("ocultar");
    
    if(promocion.classList.contains("ocultar")) {
        btnOcultar.textContent = "Mostrar";
    } else {
        btnOcultar.textContent = "Ocultar";
    }
}
btnOcultar.addEventListener("click", ocultarPormocion);

//Mision 7
function cambiarColor() {
    caja.classList.toggle("color");
    if (caja.classList.contains("color")) {
        caja.style.color = "white";
    } else {
        caja.style.color = "";
    }
}
btnColor.addEventListener("click", cambiarColor);