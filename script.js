/* =====================================================
   MOSTRAR SECCIONES
===================================================== */

function mostrarSeccion(id) {

    // Ocultar todas las secciones
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.style.display = "none";
    });

    // Mostrar la sección seleccionada
    const seleccionada = document.getElementById(id);

    if (seleccionada) {

        seleccionada.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Cerrar todos los menús
    cerrarMenus();

}


/* =====================================================
   MENÚ PRINCIPAL
===================================================== */

function abrirMenu(event) {

    event.preventDefault();
    event.stopPropagation();

    const menu = event.currentTarget.closest(".menu");
    const dropdown = menu.querySelector(".dropdown");

    // Cerrar otros menús
    document.querySelectorAll(".dropdown").forEach(function(menu) {

        if (menu !== dropdown) {
            menu.classList.remove("mostrar");
        }

    });

    dropdown.classList.toggle("mostrar");
}


/* =====================================================
   SUBMENÚ
===================================================== */

function abrirSubmenu(event) {

    event.preventDefault();
    event.stopPropagation();

    const item = event.currentTarget.closest(".submenu-item");
    const submenu = item.querySelector(".subdropdown");

    // Cerrar otros submenús
    document.querySelectorAll(".subdropdown").forEach(function(menu) {

        if (menu !== submenu) {
            menu.classList.remove("mostrar");
        }

    });

    submenu.classList.toggle("mostrar");
}


/* =====================================================
   CERRAR MENÚS
===================================================== */

function cerrarMenus() {

    document.querySelectorAll(".dropdown").forEach(function(menu) {
        menu.classList.remove("mostrar");
    });

    document.querySelectorAll(".subdropdown").forEach(function(menu) {
        menu.classList.remove("mostrar");
    });

}


/* =====================================================
   CERRAR AL HACER CLIC FUERA
===================================================== */

document.addEventListener("click", function(event) {

    if (!event.target.closest(".menu")) {
        cerrarMenus();
    }

});


/* =====================================================
   JUEGO DEL ABECEDARIO
===================================================== */

const letras = [
    "A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","Ñ","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z"
];

function nuevaLetra() {

    const posicion = Math.floor(Math.random() * letras.length);

    const letra = letras[posicion];

    document.getElementById("letraJuego").textContent = letra;

    document.getElementById("resultadoLetra").textContent =
        "🤟 Busca y practica la seña correspondiente a la letra " + letra + ".";
}


/* =====================================================
   JUEGO DE NÚMEROS
===================================================== */

function nuevoNumero() {

    const numero = Math.floor(Math.random() * 10) + 1;

    document.getElementById("numeroJuego").textContent = numero;

    document.getElementById("resultadoNumero").textContent =
        "🤟 Ahora practica el número " + numero + " en Lengua de Señas.";
}


/* =====================================================
   JUEGO DE COLORES
===================================================== */

function colorJuego() {

    const colores = [
        "ROJO",
        "AZUL",
        "VERDE",
        "AMARILLO",
        "NARANJA",
        "MORADO"
    ];

    const posicion =
        Math.floor(Math.random() * colores.length);

    document.getElementById("resultadoColor").textContent =
        "🎨 Practica la seña del color: " + colores[posicion];
}


/* =====================================================
   JUEGO DE SALUDOS
===================================================== */

function saludoJuego() {

    const saludos = [
        "Hola 👋",
        "Buenos días 🌞",
        "Buenas noches 🌙",
        "Gracias 🙏",
        "Adiós 👋"
    ];

    const posicion =
        Math.floor(Math.random() * saludos.length);

    document.getElementById("resultadoSaludo").textContent =
        "🤟 Practica: " + saludos[posicion];
}


/* =====================================================
   JUEGO DE FAMILIA
===================================================== */

function familiaJuego() {

    const palabras = [
        "Mamá 👩",
        "Papá 👨",
        "Hermano 👦",
        "Hermana 👧",
        "Abuela 👵",
        "Abuelo 👴"
    ];

    const posicion =
        Math.floor(Math.random() * palabras.length);

    document.getElementById("resultadoFamilia").textContent =
        "👨‍👩‍👧 Practica: " + palabras[posicion];
}


/* =====================================================
   JUEGO DE EMOCIONES
===================================================== */

function emocionJuego() {

    const emociones = [
        "Feliz 😀",
        "Triste 😢",
        "Enojado 😡",
        "Miedo 😨",
        "Amor ❤️"
    ];

    const posicion =
        Math.floor(Math.random() * emociones.length);

    document.getElementById("resultadoEmocion").textContent =
        "😊 Practica la emoción: " + emociones[posicion];
}


/* =====================================================
   JUEGO DE ESCUELA
===================================================== */

function escuelaJuego() {

    const palabras = [
        "Escuela 🏫",
        "Profesor 👨‍🏫",
        "Estudiante 🧑‍🎓",
        "Libro 📚",
        "Cuaderno 📓",
        "Lápiz ✏️"
    ];

    const posicion =
        Math.floor(Math.random() * palabras.length);

    document.getElementById("resultadoEscuela").textContent =
        "🏫 Practica: " + palabras[posicion];
}


/* =====================================================
   JUEGO DE FRASES
===================================================== */

function frasesJuego() {

    const frases = [
        "Hola 👋",
        "¿Cómo estás? 😊",
        "Gracias 🙏",
        "Por favor 🤲",
        "Hasta luego 👋"
    ];

    const posicion =
        Math.floor(Math.random() * frases.length);

    document.getElementById("resultadoFrase").textContent =
        "💬 Practica esta frase: " + frases[posicion];
}


/* =====================================================
   FORMULARIO
===================================================== */

function enviarFormulario(event) {

    event.preventDefault();

    document.getElementById("mensajeFormulario").textContent =
        "✅ ¡Gracias por comunicarte con nosotros!";

    event.target.reset();
}


/* =====================================================
   INICIAR EN INICIO
===================================================== */

window.addEventListener("load", function() {

    mostrarSeccion("inicio");

});
/* =====================================================
   ✍️ TÍTULO QUE SE ESCRIBE LETRA POR LETRA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const titulo = document.querySelector(".inicio .hero-text h1");

    if (!titulo) return;

    const texto = titulo.textContent;

    titulo.textContent = "";
    titulo.style.visibility = "visible";

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            titulo.textContent += texto.charAt(i);

            i++;

            setTimeout(escribir, 100);

        }

    }

    escribir();

});