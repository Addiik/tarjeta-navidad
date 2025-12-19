// 1. Seleccionamos los elementos necesarios
var modal = document.getElementById("miModal");
var boton = document.getElementById("btnRegalo");

// Al dar clic en el botón, se abre la tarjeta
boton.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

// Al dar clic FUERA del contenido (en el fondo oscuro), se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}