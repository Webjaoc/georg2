
/*let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlides(step) {
  currentIndex = (currentIndex + step + totalSlides) % totalSlides; // Para moverse en bucle
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}*/

let indexValue = 1;
showimg(indexValue); // Inicializa el slider mostrando la primera imagen

// Evento para el botón de avanzar
document.getElementById("dcha").addEventListener("click", () => {
  showimg(indexValue += 1);
});

// Evento para el botón de retroceder
document.getElementById("izq").addEventListener("click", () => {
  showimg(indexValue -= 1);
});

// Agrega evento a cada imagen para hacer clic y mostrarla
let array = document.querySelectorAll(".slide");
array.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    showimg(indexValue = parseInt(e.target.id));
  });
});

// Función para mostrar las imágenes en el slider
function showimg(foto) {
  let i;
  const img = document.querySelectorAll(".slide");

  if (foto > img.length) {
    indexValue = 1; // Si llega al final, vuelve al principio
  }
  if (foto < 1) {
    indexValue = img.length; // Si llega al inicio, vuelve al final
  }

  // Oculta todas las imágenes
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  // Muestra la imagen actual
  img[indexValue - 1].style.display = "block";
}
// Cambiar las imágenes automáticamente cada 3 segundos
setInterval(() => {
  showimg(indexValue += 1); // Cambia a la siguiente imagen cada 3 segundos
}, 3000);








