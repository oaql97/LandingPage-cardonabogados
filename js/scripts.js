document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.querySelector('.arrow');
    // Establece el estado inicial basado en la posición actual de desplazamiento
    arrow.style.display = window.scrollY > 100 ? 'none' : 'flex';
});

document.addEventListener('scroll', function() {
    var arrow = document.querySelector('.arrow');
    arrow.style.display = window.scrollY > 100 ? 'none' : 'flex';
});
