const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Cambiar el texto del botón según el tema
    if (document.body.classList.contains('dark-mode')) {
        console.log("Modo oscuro activo");
    } else {
        console.log("Modo claro activado");
    }
});

// Establecer el tema por defecto
document.body.classList.add('light-mode');
