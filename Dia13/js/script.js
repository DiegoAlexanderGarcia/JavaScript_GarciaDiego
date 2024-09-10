

const cartas = document.querySelector(`.jugador`);

async function fetchData() {
    const res = await fetch('https://deckofcardsapi.com/api/deck/t54c5obqg1bb/draw/?count=1')
    data = res.json();
    return data;
}

function displayCard(card){
    cartas.innerHTML=``;
    card.forEach(cap =>{
        const capDiv = document. createElement(`Div`);
        if (cap.status ==="ready"){
            capDiv.classList.add(`capsulanegativa`);
            capDiv.innerHTML =`<img src="${cards.images.svg}" alt="">`
        }
        cartas.appendChild(capDiv)
    });
}
document.querySelectorAll('jugar').forEach(button=>{
    button.addEventListener('click',);
});