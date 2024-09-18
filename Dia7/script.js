// Función para mostrar un héroe por ID
function mostrarHeroe(heroId) {
    const url = `https://superheroapi.com/api.php/1ae712cb59f766731bed8367c8d0340f/${heroId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const heroInfo = document.getElementById('heroInfo');

            // Muestra los datos del héroe sin hacer muchas verificaciones
            heroInfo.innerHTML += `
                <div class="hero-card">
                    <h2>${data.name || 'Nombre no disponible'}</h2>
                    <p class="nombreH"><strong>Nombre completo:</strong> ${data.biography['full-name']}</p>
                    <p><strong>Inteligencia:</strong> ${data.powerstats.intelligence}</p>
                    <p><strong>Fuerza:</strong> ${data.powerstats.strength}</p>
                    ${data.image.url ? `<img src="${data.image.url}" alt="${data.name}" width="200">` : '<p>Imagen no disponible</p>'}
                </div>
            `;
        });
}

// Función para mostrar varios héroes
function mostrarTodosLosHeroes() {
    const heroIds = [1, 2, 3, 4, 5]; // IDs de los héroes que quieres mostrar
    heroIds.forEach(heroId => mostrarHeroe(heroId)); // Muestra cada héroe por ID
}

// Muestra todos los héroes cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarTodosLosHeroes(); // Llamamos a la función que muestra todos los héroes
});

// Escucha el input del ID del héroe
document.getElementById("heroId").addEventListener("input", (e) => {
    const heroId = e.target.value; // Obtén el valor ingresado por el usuario

    if (heroId) { // Solo continúa si el input no está vacío
        const url = `https://superheroapi.com/api.php/1ae712cb59f766731bed8367c8d0340f/${heroId}`;

        // Borra el contenido anterior para mostrar solo el héroe buscado
        const heroInfo = document.getElementById('heroInfo');
        heroInfo.innerHTML = ''; // Limpia el área para mostrar el nuevo héroe

        fetch(url)
            .then(response => response.json())
            .then(data => {
                heroInfo.innerHTML = `
                    <div class="hero-card">
                        <h2>${data.name || 'Nombre no disponible'}</h2>
                        <p class="nombreH"><strong>Nombre completo:</strong> ${data.biography['full-name']}</p>
                        <p><strong>Inteligencia:</strong> ${data.powerstats.intelligence}</p>
                        <p><strong>Fuerza:</strong> ${data.powerstats.strength}</p>
                        ${data.image.url ? `<img src="${data.image.url}" alt="${data.name}" width="200">` : '<p>Imagen no disponible</p>'}
                    </div>
                `;
            });
    }
});
