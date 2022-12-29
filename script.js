
const toggle = document.getElementById('toggle');

const priceContainer = document.querySelector('.contenedor-flex');

// Activacion del toggle switch

toggle.addEventListener('click', () => {
    priceContainer.classList.toggle('mostrar')
})
