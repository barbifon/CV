let infopersonal = document.getElementById("infopersonal")
let experiencia = document.getElementById("experiencia")
let educacion = document.getElementById("educacion")
let intereses = document.getElementById("intereses")
let carta = document.getElementById("carta")

function mostrarInfoPersonal() {
    infopersonal.style.display = "block"
    experiencia.style.display = "none"
    educacion.style.display = "none"
    intereses.style.display = "none"
    carta.style.display = "none"
}

function mostrarExperiencia() {
    infopersonal.style.display = "none"
    experiencia.style.display = "block"
    educacion.style.display = "none"
    intereses.style.display = "none"
    carta.style.display = "none"
}

function mostrarEducacion() {
    infopersonal.style.display = "none"
    experiencia.style.display = "none"
    if (window.innerWidth > 930) {
        educacion.style.display = "grid"
    } else {
        educacion.style.display = "block"
    }
    intereses.style.display = "none"
    carta.style.display = "none"
}

function mostrarIntereses() {
    infopersonal.style.display = "none"
    experiencia.style.display = "none"
    educacion.style.display = "none"
    if (window.innerWidth > 930) {
        intereses.style.display = "flex"
    } else {
        intereses.style.display = "block"
    }
    carta.style.display = "none"
}

function mostrarCarta() {
    infopersonal.style.display = "none"
    experiencia.style.display = "none"
    educacion.style.display = "none"
    intereses.style.display = "none"
    carta.style.display = "block"
}