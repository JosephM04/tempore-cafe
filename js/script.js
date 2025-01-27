"use strict";

const header = document.querySelector('.header');
const presentacionTitulo = document.querySelector('.presentacion-titulo');
const desplegarMenu = document.querySelector('.desplegar-menu');
const navMenu = document.querySelector('.nav-menu');

window.onload = function() {
    presentacionTitulo.style.opacity = 0.15;
}

// configuracion para desplegar menu

// Al hacer click en el boton aparece el menu de los links
desplegarMenu.addEventListener ("click", () => {
    navMenu.classList.toggle('show');
});

let prevScrollPos = window.scrollY;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    //comprueba si el usuario ha hecho scroll por algunos pixeles

    if(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 1) {
        header.classList.remove("show");
    
        // Al hacer scroll hacia abajo se desaparece el menu desplegable
        navMenu.classList.remove('show');
        
    } else { 
        if (prevScrollPos < currentScrollPos && currentScrollPos - prevScrollPos > 1) {
            header.classList.add("show");
            // De igual forma, si se hace scroll hacia arriba tambien desaparece el menu desplegable pero se mantiene el header
            navMenu.classList.remove('show');
        }
    }

    prevScrollPos = currentScrollPos;
}

