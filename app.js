document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-filtro');
    const cards = document.querySelectorAll('.card-plato');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            // Activar botón
            botones.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            const categoria = boton.dataset.categoria;

            cards.forEach(card => {
                const coincide = categoria === 'todo' || card.dataset.categoria === categoria;
                card.classList.toggle('oculto', !coincide);
            });
        });
    });
});