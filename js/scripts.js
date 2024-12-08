document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.querySelector('.arrow');
    var container = document.querySelector('.container');

    // Establece el estado inicial de la flecha
    arrow.style.display = window.scrollY > 100 ? 'none' : 'flex';

    // Evento de clic en la flecha
    arrow.addEventListener('click', function() {
        // Scroll hacia el contenedor
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('scroll', function() {
    var arrow = document.querySelector('.arrow');
    arrow.style.display = window.scrollY > 100 ? 'none' : 'flex';
});

document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('.footer');
    var logoContainer = document.querySelector('.logo-container');

    // Muestra el footer solo cuando el usuario hace scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Aparece después de 50px de desplazamiento
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });
});
