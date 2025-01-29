document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        navigator.clipboard.writeText(input.value)
            .then(() => {
                showNotification('Correo copiado', 'success');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
                showNotification('Error al copiar el correo.', 'error');
            });
    });
});

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    notificationMessage.textContent = message;
    notification.className = 'notification ' + type + ' show';

    // Ocultar el modal después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}