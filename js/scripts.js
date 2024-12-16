document.addEventListener('DOMContentLoaded', function () {
    var arrow = document.querySelector('.arrow');
    var miniMenuSection = document.getElementById('mini-menu-section');

    // Establece el estado inicial de la flecha
    toggleArrowVisibility();

    // Evento de clic en la flecha
    arrow.addEventListener('click', function () {
        // Scroll hacia el mini menú
        if (miniMenuSection) {
            miniMenuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Evento para ocultar la flecha al hacer scroll
    document.addEventListener('scroll', toggleArrowVisibility);

    // Función para alternar la visibilidad de la flecha
    function toggleArrowVisibility() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var miniMenuTop = miniMenuSection.offsetTop;

        if (scrollTop >= miniMenuTop - 100) {
            // Oculta la flecha si el scroll llega cerca del mini menú
            arrow.style.display = 'none';
        } else {
            // Muestra la flecha si está antes del mini menú
            arrow.style.display = 'flex';
        }
    }
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
