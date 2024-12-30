"use strict";

const header = document.querySelector('.header');
const presentacionTitulo = document.querySelector('.presentacion-titulo');

window.onload = function() {
    presentacionTitulo.style.opacity = 0.15;
}

let prevScrollPos = window.scrollY;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    //comprueba si el usuario ha hecho scroll por algunos pixeles

    if(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 1) {
        header.classList.remove("show");
    } else { 
        if (prevScrollPos < currentScrollPos && currentScrollPos - prevScrollPos > 1) {
            header.classList.add("show");
        }
    }

    prevScrollPos = currentScrollPos;
}

