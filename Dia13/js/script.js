let deckId = "";

//Función para un nuevo mazo de cartas
async function getNewDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    deckId = data.deck_id; // Guarda el ID del mazo
}

// Para almacenar las cartas
let player1Card, player2Card;

//Función sacar cartas
async function drawPlayer1Card() {
    if (deckId) {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const data = await response.json();
        
        if (data.cards.length === 1) {
            player1Card = data.cards[0];
            displayPlayer1Card(player1Card);
            if (player2Card) {
                determineWinner(player1Card, player2Card);
            }
        } else {
            alert('No quedan más cartas en el mazo.');
        }
    } else {
        alert('Por favor, recarga el mazo primero.');
    }
}

async function drawPlayer2Card() {
    if (deckId) {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const data = await response.json();
        
        if (data.cards.length === 1) {
            player2Card = data.cards[0];
            displayPlayer2Card(player2Card);
            if (player1Card) {
                determineWinner(player1Card, player2Card);
            }
        } else {
            alert('No quedan más cartas en el mazo.');
        }
    } else {
        alert('Por favor, recarga el mazo primero.');
    }
}

//Función mostrar carta del jugador 1
function displayPlayer1Card(card) {
    document.getElementById('player1-card').innerHTML = `<img src="${card.image}" alt="${card.value} de ${card.suit}">`;
}

//Función mostrar carta del jugador 2
function displayPlayer2Card(card) {
    document.getElementById('player2-card').innerHTML = `<img src="${card.image}" alt="${card.value} de ${card.suit}">`;
}

//Función mostrar el ganador
function determineWinner(card1, card2) {
    const cardValueOrder = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'JACK': 11, 'QUEEN': 12, 'KING': 13, 'ACE': 14
    };

    const value1 = cardValueOrder[card1.value];
    const value2 = cardValueOrder[card2.value];

    let resultText = "";
    if (value1 > value2) {
        resultText = "¡Jugador 1 gana!";
    } else if (value2 > value1) {
        resultText = "¡Jugador 2 gana!";
    } else {
        resultText = "¡Empate!";
    }
    document.getElementById('result').innerText = resultText;

    //Reiniciar cartas
    player1Card = null;
    player2Card = null;
}

//Event listeners para los botones de los jugadores
document.getElementById('player1-button').addEventListener('click', drawPlayer1Card);
document.getElementById('player2-button').addEventListener('click', drawPlayer2Card);

//Inicializar el juego
getNewDeck();
