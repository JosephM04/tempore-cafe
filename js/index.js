const videoPresentacion = document.querySelector('.video-presentacion');

videoPresentacion.addEventListener("pause", () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      videoPresentacion.play(); // Reanudar la reproducción si no está en pantalla completa
    }
  });