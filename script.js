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


//---------------------carrusel-------------------------------//





