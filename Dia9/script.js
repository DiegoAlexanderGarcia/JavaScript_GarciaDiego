let currentPokemonId = null; // Variable global para controlar el ID actual

// Función para obtener el Pokémon por nombre o ID
function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            // Actualizar la imagen del Pokémon con el GIF o imagen estática
            const gif = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
            document.getElementById('pokemon-image').src = gif || data.sprites.front_default;

            // Mostrar nombre y ID del Pokémon
            document.getElementById('pokemon-name').textContent = `Nombre: ${data.name}`;
            document.getElementById('pokemon-id').textContent = `ID: ${data.id} `;

            // Actualizar la variable global con el ID actual
            currentPokemonId = data.id;
        })
        .catch(error => {
            alert(error);
            document.getElementById('pokemon-image').src = '';
            document.getElementById('pokemon-name').textContent = '';
            document.getElementById('pokemon-id').textContent = '';
        });
}

// Evento para detectar cuando se presiona Enter en el campo de texto
document.getElementById('pokemonInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('pokemonInput').value.toLowerCase();
        getPokemon(input);  // Realiza la búsqueda cuando se presiona "Enter"
    }
});

// Función para el botón "Next" (siguiente Pokémon)
document.getElementById('nextButton').addEventListener('click', function() {
    if (currentPokemonId !== null) {  // Asegurarse de que ya haya un Pokémon buscado
        currentPokemonId++;  // Incrementar el ID
        getPokemon(currentPokemonId);  // Obtener el siguiente Pokémon
    }
});

// Función para el botón "Pre" (anterior Pokémon)
document.getElementById('prevButton').addEventListener('click', function() {
    if (currentPokemonId > 1) {  // Asegurarse de que no vaya a ID menor que 1
        currentPokemonId--;  // Decrementar el ID
        getPokemon(currentPokemonId);  // Obtener el Pokémon anterior
    }
});
