//Armas

document.getElementById("armas").addEventListener("click",mostrarArmas)
var armas=document.getElementById("caja2");

function mostrarArmas() {
    document.getElementById("caja2").style.display="flex"
    document.getElementById("caja3").style.display="none"
    document.getElementById("caja4").style.display="none"

    armas.innerHTML=`<div id="inputCaja">
            <input class="form-control w-50" type="text" id="search1">
        </div>`
    fetch("https://valorant-api.com/v1/weapons")
    .then(res=>res.json())
    .then(arm=>{
        for (const i of arm.data) {
            armas.innerHTML+=` 
            
            <div class="card mb-3 box" style="width: 18rem;">
                <img src="${i.displayIcon}" class="card-img-top" alt="...">
                <div class="card-body content">
                    <h5 class="card-title">${i.displayName}</h5>
                    <h6 class="card-title">${i.shopData.category}</h6>
                </div>
            </div>     
            `
            searchAgentes()
        }
        function searchAgentes(){
            
            document.getElementById("search1").addEventListener("input", (e)=>{
                let SearchArma = e.target.value;

                let SearchList = arm.data
                SearchList.forEach(ListSearch =>{
                    let displayName = ListSearch.displayName
                    if (SearchArma == displayName){
                        armas.innerHTML=`<div id="inputCaja">
                            <input class="form-control w-50" type="text" id="search1">
                        </div>`
                        armas.innerHTML += `
                        <div class="card" style="width: 25rem;" >
                            <img src="${ListSearch.displayIcon}" class="card-img-top" alt="...">
                            <h3>${ListSearch.displayName}</h3>  
                        </div>
                        `
                    } 
                });
                
            });
        }
    })
}


//agentes
document.getElementById("agentes").addEventListener("click", mostrarAgentes);

function mostrarAgentes() {
    // Ocultar otras secciones y mostrar la de agentes
    document.getElementById("caja2").style.display = "none";
    document.getElementById("caja3").style.display = "none";
    document.getElementById("caja4").style.display = "flex";
    document.getElementById("agentes").innerHTML = "AGENTES";

    fetch("https://valorant-api.com/v1/agents")
        .then(res => res.json())
        .then(data => {
            if (!data || !data.data) {
                throw new Error("Datos de agentes no encontrados");
            }

            const agentes = document.getElementById("caja4");

            // Mantener el input de búsqueda y solo limpiar los agentes
            agentes.innerHTML = `
                <div id="inputCaja">
                    <input class="form-control w-50" type="text" id="search3" placeholder="Buscar agente...">
                </div>
            `;

            // Filtramos solo los agentes que tienen `fullPortrait`
            const filteredAgents = data.data.filter(agent => agent.fullPortrait);

            // Generar HTML para cada agente con imagen disponible
            const cards = filteredAgents.map(agent => `
                <div class="card" style="width: 18rem;">
                    <img src="${agent.fullPortrait}" class="card-img-top" alt="${agent.displayName}">
                    <h4 class="card-title1">${agent.displayName || 'Nombre no disponible'}</h4>
                    <h6 class="card-title2">${agent.role?.displayName || 'Rol no disponible'}</h6>
                </div>
            `).join('');

            agentes.innerHTML += cards; // Agregar las tarjetas sin borrar el input

            // Aseguramos que el input de búsqueda está disponible después de cargar los agentes
            const searchInput = document.getElementById("search3");
            if (searchInput) {
                searchInput.addEventListener("input", e => {
                    const searchTerm = e.target.value.toLowerCase();
                    const filteredSearchAgents = filteredAgents.filter(agent => 
                        agent.displayName.toLowerCase().includes(searchTerm)
                    );

                    const filteredCards = filteredSearchAgents.map(agent => `
                        <div class="card" style="width: 25rem;">
                            <img class="card2" src="${agent.fullPortrait}" class="card-img-top" alt="${agent.displayName}">
                            <h4 class="card-title11">${agent.displayName || 'Nombre no disponible'}</h4>
                            <h6 class="card-title22">${agent.role?.displayName || 'Rol no disponible'}</h6>
                        </div>
                    `).join('');

                    agentes.innerHTML = `
                        <div id="inputCaja">
                            <input class="form-control w-50" type="text" id="search3" placeholder="Buscar agente...">
                        </div>
                    ` + filteredCards;

                    // Vuelve a agregar el evento al input tras el filtrado
                    document.getElementById("search3").addEventListener("input", e => searchInput.dispatchEvent(new Event('input')));
                });
            } else {
                console.error("El elemento de búsqueda no está disponible");
            }
        })
        .catch(error => {
            console.error("Error fetching agents:", error);
            document.getElementById("caja4").innerHTML = "Error al cargar agentes.";
        });
}

//Mapas
var CajaMap = document.getElementById("flexmaps");
let EndPointMap = "https://valorant-api.com/v1/maps"

function BtnMaps(){
    document.getElementById("mapas").addEventListener("click", ()=>{
        CallMaps(EndPointMap)
    });
};


function CallMaps(Api){

    document.getElementById("caja2").style.display="none"
    document.getElementById("caja3").style.display="flex"
    document.getElementById("caja4").style.display="none"
    fetch(Api)
    .then(Res => Res.json())
    .then(Maps =>{
        let MapList = Maps.data

        CajaMap.innerHTML = ``
        MapList.forEach(ListMap => {
            CajaMap.innerHTML += `
            <div class="card" style="width: 25rem;" >
                <img src="${ListMap.splash}" class="card-img-top" alt="...">
                <h4>${ListMap.displayName}</h4>
            </div>
            `
        });

        function SearchMap(){
            document.getElementById("search2").addEventListener("input", (e)=>{
                let Search = e.target.value;

                let SearchList = Maps.data

                SearchList.forEach(ListSearch =>{
                    let NameMap = ListSearch.displayName
                    if (Search == NameMap){
                        CajaMap.innerHTML = `
                        <div class="card" style="width: 25rem;" >
                            <img src="${ListSearch.splash}" class="card-img-top" alt="...">
                            <h3>${ListSearch.displayName}</h3>
                        </div>
                        `
                        console.log(ListSearch.displayName)
                    
                    } 
                });
                
            });
            
        };
        SearchMap()
    });
};

BtnMaps()