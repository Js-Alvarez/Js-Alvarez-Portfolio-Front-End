let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
    if (checked == true) {
        label_toggle.innerHTML = '&#9728;'; // Claro
        label_toggle.style.fontSize = '40px';  
        label_toggle.style.cursor = 'pointer';
    } else {
        label_toggle.innerHTML = '&#127771;'; // Oscuro
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel-contenedor');
    const proyectos = document.querySelectorAll('.proyecto');
    const anterior = document.querySelector('.carrusel-anterior');
    const siguiente = document.querySelector('.carrusel-siguiente');
    let contador = 0;

    function mostrarProyecto(index) {
        carrusel.style.transform = `translateX(${-index * 100}%)`;
    }

    anterior.addEventListener('click', () => {
        contador = (contador > 0) ? contador - 1 : proyectos.length - 1;
        mostrarProyecto(contador);
    });

    siguiente.addEventListener('click', () => {
        contador = (contador < proyectos.length - 1) ? contador + 1 : 0;
        mostrarProyecto(contador);
    });

    // Auto-play (optional)
    setInterval(() => {
        contador = (contador < proyectos.length - 1) ? contador + 1 : 0;
        mostrarProyecto(contador);
    }, 5000);
});




