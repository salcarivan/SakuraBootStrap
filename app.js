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

function estaAbiertoAhora() {
    const ahora = new Date();
    const dia = ahora.getDay(); // 0=Dom, 1=Lun...
    const hora = ahora.getHours() + ahora.getMinutes() / 60;
    // Horario: Lun cerrado; Mar-Jue 13-16 y 20-23.5; Vie-Sáb 13-16.5 y 20-24.5; Dom 13-23
    if (dia === 1) return false;
    if (dia >= 2 && dia <= 4) return (hora >= 13 && hora < 16) || (hora >= 20 && hora < 23.5);
    if (dia === 5 || dia === 6) return (hora >= 13 && hora < 16.5) || (hora >= 20 && hora < 24.5);
    if (dia === 0) return hora >= 13 && hora < 23;
    return false;
}

const badge = document.createElement('span');
badge.className = 'badge-estado ' + (estaAbiertoAhora() ? 'abierto' : 'cerrado');
badge.textContent = estaAbiertoAhora() ? '● Abierto ahora' : '● Cerrado ahora';
document.querySelector('.visitanos-card').prepend(badge);