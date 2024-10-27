        // JavaScript para manejar las secciones activas
        const controls = document.querySelectorAll('.control');
        const sections = document.querySelectorAll('.section');

        controls.forEach(control => {
            control.addEventListener('click', () => {
                // Remover la clase activa de todos los botones y secciones
                controls.forEach(btn => btn.classList.remove('active-btn'));
                sections.forEach(section => section.classList.remove('active-section'));

                // Agregar clase activa al botón y a la sección correspondiente
                control.classList.add('active-btn');
                document.getElementById(control.dataset.id).classList.add('active-section');
            });
        });