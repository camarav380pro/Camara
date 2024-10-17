// script.js
// Script para el navbar principal
const texts = [
    '"Envíos a todo el país"',
    '"Descuentos exclusivos"',
    '"+10.000 Clientes Satisfechos"',
    '"Producto de calidad"',
    '"Atención al cliente 24/7"'
];

let currentIndex = 0;
const textElement = document.getElementById('changingText');

function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
}

setInterval(changeText, 3000); // Cambia cada 3 segundos


//WhatsApp

// Obtener el ícono de WhatsApp
// const whatsappIcon = document.getElementById('whatsappIcon');


// Ir hacia arriba al hacer clic en el ícono
// whatsappIcon.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // Desplazamiento suave
//     });
// });


//icono para subir la pagina rapido 

// Función para volver al principio de la página
document.getElementById('scrollToTop').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace siga el enlace
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});


/* -----------------
ALERTA DE CRONOMETRO
--------------- ---*/
let lastScrollTop = 0; // Variable para almacenar la última posición del desplazamiento
const priceAlert = document.getElementById("priceAlert");

// Función para iniciar el cronómetro
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const timeLeft = midnight - now;

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    // Actualizar el contador cada segundo
    setInterval(() => {
        const now = new Date();
        const timeLeft = midnight - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Función para manejar el desplazamiento
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Se está desplazando hacia abajo
        priceAlert.style.display = "none"; // Ocultar el cuadro de alerta
    } else {
        // Se está desplazando hacia arriba
        priceAlert.style.display = "block"; // Mostrar el cuadro de alerta
    }

    lastScrollTop = scrollTop; // Actualizar la última posición del desplazamiento
}

// Iniciar el cronómetro y agregar el evento de desplazamiento
window.onload = () => {
    startCountdown();
    window.addEventListener("scroll", handleScroll); // Escuchar el evento de desplazamiento
};


// SCRIPT PARA QUE SE AGRANDEN LAS IMAGENES DE LOS PRODUCTOS
// Funcionalidad del carrusel
//  let currentImageIndex = 0;
//  const images = document.querySelectorAll('.carousel img');
//  const modal = document.getElementById('modal');
//  const modalImg = document.getElementById('modal-img');
//  const closeModal = document.getElementById('closeModal');

// Cambiar imágenes automáticamente cada 3 segundos
setInterval(() => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}, 3000);

// Mostrar la imagen actual
//  images.forEach((image, index) => {
//      if (index !== 0) {
//          image.style.display = 'none';
//      }

//      // Agrandar imagen al hacer clic
//      image.addEventListener('click', () => {
//          modal.classList.add('active');
//          modalImg.src = image.src;
//      });
//  });

// Cerrar modal al hacer clic en la "X"
//  closeModal.addEventListener('click', () => {
//      modal.classList.remove('active');
//  });

// También cerrar modal al hacer clic fuera de la imagen
//  modal.addEventListener('click', (e) => {
//      if (e.target === modal) {
//          modal.classList.remove('active');
//      }
//  });

// Funcionalidad del carrusel y modal
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('closeModal');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Mostrar imagen en modal al hacer clic
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        modalImg.src = image.src;
        modal.classList.add('active');
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Cambiar a la imagen anterior
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
});

// Cambiar a la imagen siguiente
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
});

// También cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// para las dos tarjetas

// Imágenes para el producto izquierdo
const leftImages = [
    'assets/img/cam1.jpeg',
    'assets/img/cam2.jpeg',
    'assets/img/cam3.jpeg',
    'assets/img/cam4.jpeg'

];
let leftIndex = 0;
const leftImageElement = document.getElementById('left-image');

// Imágenes para el producto derecho
const rightImages = [

    'assets/img/cam2.jpeg',
    'assets/img/cam4.jpeg',
    'assets/img/cam1.jpeg',
    'assets/img/cam3.jpeg'
];
let rightIndex = 0;
const rightImageElement = document.getElementById('right-image');

// Función para cambiar imágenes
function changeImages() {
    leftIndex = (leftIndex + 1) % leftImages.length;
    rightIndex = (rightIndex + 1) % rightImages.length;

    leftImageElement.src = leftImages[leftIndex];
    rightImageElement.src = rightImages[rightIndex];
}

// Cambiar imágenes cada 3 segundos
setInterval(changeImages, 3000);

// reloj


function updateCountdown() {
    const now = new Date(); // Obtiene la fecha y hora actual
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Define la medianoche del día siguiente
    const timeLeft = midnight - now; // Calcula el tiempo restante hasta la medianoche

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Segundos restantes

    // Actualiza el contenido de los elementos HTML con los valores correspondientes
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Llama a la función una vez para establecer el temporizador inmediatamente
updateCountdown();

// Llama a la función cada segundo para actualizar el temporizador
setInterval(updateCountdown, 1000);

// SCRIPT PARA PROVEEDORES


const container = document.querySelector('.container55');
const cardWidth = 300; // Ancho de cada tarjeta

function scrollLeft() {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
}

function scrollRight() {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
}

// Agregar event listeners para hacer que las flechas sean funcionales
document.querySelector('.arrow.left55').addEventListener('click', scrollLeft);
document.querySelector('.arrow.right55').addEventListener('click', scrollRight);

