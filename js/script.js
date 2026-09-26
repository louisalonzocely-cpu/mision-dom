// Obtiene los elementos principales del documento.
const anio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const enlaceExterno = document.getElementById("enlaceExterno");
const btnDestacar = document.getElementById("btnDestacar");
const caja = document.getElementById("caja");
const btnOcultar = document.getElementById("btnOcultar");
const promocion = document.getElementById("promocion");
const btnColor = document.getElementById("btnColor");
const campoMensaje = document.getElementById("campoMensaje");
const contadorLetras = document.getElementById("contadorLetras");
const formulario = document.getElementById("formulario");
const campoNombre = document.getElementById("campoNombre");
const avisoForm = document.getElementById("avisoForm");
const btnTema = document.getElementById("btnTema");
const textoTema = document.getElementById("textoTema");
// Inicializa el botón que oculta la promoción.
btnOcultar.textContent = "Ocultar";

// Misión 1: muestra el año actual en el pie de página.
anio.textContent = new Date().getFullYear();

// Misión 2: muestra el nombre de la tienda y su mensaje principal.
titulo.textContent = "MobilStore";
subtitulo.textContent = `${anio.textContent} Conecta con lo que necesitas`;

// Misión 3: configura el enlace externo hacia el sitio oficial.
enlaceExterno.setAttribute("href", "https://www.apple.com");
enlaceExterno.setAttribute("rel", "noopener");
enlaceExterno.setAttribute("target", "_blank");
enlaceExterno.setAttribute("title", "Visita el sitio oficial de Apple Colombia");
enlaceExterno.textContent = "Ver sitio oficial";

// Misión 4: cuenta los productos de la lista y actualiza su mensaje.
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
// Ejecuta el contador al cargar la página.
actualizarContador();

// Cuenta los productos de la tabla y actualiza su mensaje.
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
// Ejecuta el contador de la tabla al cargar la página.
actualizarContadorDos();

// Misión 5: destaca u oculta el estilo de la caja.
function btnDestacado() {
    caja.classList.toggle("destacada");
}
// Activa el destacado al hacer clic.
btnDestacar.addEventListener("click", btnDestacado);

// Misión 6: muestra u oculta la promoción y actualiza el botón.
function ocultarPormocion() {
    promocion.classList.toggle("ocultar");
    
    if(promocion.classList.contains("ocultar")) {
        btnOcultar.textContent = "Mostrar";
    } else {
        btnOcultar.textContent = "Ocultar";
    }
}
// Activa la visibilidad de la promoción al hacer clic.
btnOcultar.addEventListener("click", ocultarPormocion);

// Misión 7: alterna el color de la caja.
function cambiarColor() {
    caja.classList.toggle("color");
    if (caja.classList.contains("color")) {
        caja.style.color = "white";
    } else {
        caja.style.color = "";
    }
}
// Activa el cambio de color al hacer clic.
btnColor.addEventListener("click", cambiarColor);

// Misión 8: prepara los elementos y el formato de la tabla.
const cuerpoTabla = document.querySelector("#tabla tbody");
const formularioProductos = document.getElementById("formularioProductos");
const campoModelo = document.getElementById("campoModelo");
const campoGama = document.getElementById("campoGama");
const campoPrecio = document.getElementById("campoPrecio");
const campoEstado = document.getElementById("campoEstado");
const btnQuitar = document.getElementById("btnQuitar");
const btnVaciar = document.getElementById("btnVaciar");
const avisoTabla = document.getElementById("avisoTabla");
const formatoPrecio = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});

// Aplica colores alternativos a las filas de la tabla.
function pintarFilasTabla() {
    cuerpoTabla.querySelectorAll("tr").forEach((fila, indice) => {
        fila.style.backgroundColor = indice % 2 === 1 ? "var(--borde)" : "";
    });
}

// Misión 12: marca la fila seleccionada y desmarca las demás.
function seleccionarFila(evento) {
    // Recorre todas las filas y quita la clase de la selección anterior.
    cuerpoTabla.querySelectorAll("tr").forEach((fila) => {
        fila.classList.remove("fila-marcada");
    });

    // Agrega la clase únicamente a la fila que recibió el clic.
    evento.currentTarget.classList.add("fila-marcada");
}

// Conecta el clic de una fila con la función que la selecciona.
function activarFila(fila) {
    fila.addEventListener("click", seleccionarFila);
}

// Recorre las filas existentes y les agrega su listener de selección.
function activarFilasTabla() {
    cuerpoTabla.querySelectorAll("tr").forEach((fila) => {
        activarFila(fila);
    });
}

//Mision 13
function actualizarContadorLetras() {
    const cantidad = campoMensaje.value.length;
    contadorLetras.textContent = `${cantidad} caracteres`;
}

campoMensaje.addEventListener("input", actualizarContadorLetras);
actualizarContador();

//Mision 14
function validarFormulario(evento) {
    evento.preventDefault();
    const nombre = campoNombre.value.trim();
    const mensaje = campoMensaje.value.trim();

    avisoForm.classList.remove("error", "ok");

    if (!nombre) {
        avisoForm.textContent = "Escribe tu nombre.";
        avisoForm.classList.add("error");
        campoNombre.focus();
        return;
    }

    if (mensaje.length < 10) {
        avisoForm.textContent = "El mensaje debe tener al menos 10 caractares.";
        avisoForm.classList.add("error");
        campoMensaje.focus();
        return;
    }

    avisoForm.textContent = `¡Gracias, ${nombre}! Recibimos tu solicitud.`;
    avisoForm.classList.add("ok");
    formulario.reset();
    actualizarContadorLetras();
}

formulario.addEventListener("submit", validarFormulario);

//Mision 15
function cambiarTema() {
    const oscuro = document.body.classList.toggle("tema-oscuro");
    textoTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
    btnTema.setAttribute("aria-pressed", oscuro);
}

btnTema.addEventListener("click", cambiarTema);

// Muestra un mensaje de éxito o error junto a la tabla.
function mostrarAvisoTabla(mensaje, tipo) {
    avisoTabla.textContent = mensaje;
    avisoTabla.className = `aviso ${tipo}`;
}

// Valida el formulario y agrega un producto como una fila nueva.
function agregarProducto(evento) {
    evento.preventDefault();

    const modelo = campoModelo.value.trim();
    campoModelo.setCustomValidity(modelo ? "" : "Ingresa el modelo del producto.");

    if (!campoModelo.checkValidity()) {
        campoModelo.reportValidity();
        return;
    }

    const fila = document.createElement("tr");
    const valores = [
        modelo,
        campoGama.value,
        formatoPrecio.format(campoPrecio.valueAsNumber),
        campoEstado.value
    ];

    valores.forEach((valor) => {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
    });

    cuerpoTabla.appendChild(fila);
    activarFila(fila);
    formularioProductos.reset();
    actualizarContadorDos();
    pintarFilasTabla();
    mostrarAvisoTabla(`${modelo} se agregó al catálogo.`, "exito");
    campoModelo.focus();
}

// Elimina la última fila agregada a la tabla.
function quitarUltimoProducto() {
    const ultimaFila = cuerpoTabla.lastElementChild;

    if (!ultimaFila) {
        mostrarAvisoTabla("No hay productos para quitar.", "error");
        return;
    }

    const modelo = ultimaFila.firstElementChild.textContent;
    ultimaFila.remove();
    actualizarContadorDos();
    pintarFilasTabla();
    mostrarAvisoTabla(`${modelo} se quitó del catálogo.`, "exito");
}

// Elimina todas las filas de la tabla.
function vaciarCatalogo() {
    if (!cuerpoTabla.children.length) {
        mostrarAvisoTabla("El catálogo de la tabla ya está vacío.", "error");
        return;
    }

    cuerpoTabla.replaceChildren();
    actualizarContadorDos();
    mostrarAvisoTabla("Se vació el catálogo de la tabla.", "exito");
    campoModelo.focus();
}

// Conecta las acciones del formulario y los botones de la tabla.
formularioProductos.addEventListener("submit", agregarProducto);
btnQuitar.addEventListener("click", quitarUltimoProducto);
btnVaciar.addEventListener("click", vaciarCatalogo);
campoModelo.addEventListener("input", () => campoModelo.setCustomValidity(""));

// Aplica el color inicial de las filas existentes.
pintarFilasTabla();
// Activa el clic de las filas existentes.
activarFilasTabla();
