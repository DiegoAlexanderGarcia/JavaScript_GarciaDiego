//class crearboton extends HTMLElement {
//    constructor(){
//        super();
//        this.textContent = '!haz click aqui';
//        this.addEventListener('click',()=> alert('hiciste click'));
//    }
//}
//customElements.define('mi-boton', crearboton);


//class crearBotonShadow extends HTMLElement{
//    constructor(){
//        super();
//        let miShadow = this.attachShadow({mode:'open'});
//        miShadow.innerHTML = `
//        <button>soy un boton</button>
//        `
//    }
//}
//customElements.define('boton-shadow',crearBotonShadow);


class crearHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML=`
        <header>
        <h1>Live User Filter</h1>
        <p>Search by name and/or location</p>
        <input type="text" placeholder="Search" id="search-bar">
    </header>
        `
    }
}

customElements.define('mi-header',crearHeader);

class contUser extends HTMLElement {
    constructor() {
        super();
        fetch("https://66e45accd2405277ed1404b3.mockapi.io/Live_User_Filter_Js/api/v1/informacionAlamacenada")
        .then(res=> res.json())
        
        .then(data =>{
            data.forEach(user => {
            this.innerHTML +=`
                <div class="user-card">
                <img src="${user.avatar || '/storage/Montserrat-VariableFont_wght.ttf.url'}" alt="Perfil ${user.name || 'Usuario'}" class="profile-img">
                <div class="user-info">
                    <h2 class="username">${user.name_full || 'Usuario sin nombre'}</h2>
                    <p class="description">${user.description || 'Ubicación desconocida'}</p>
                </div>
            </div>
                `
        });
        })
}}
customElements.define('mi-main', contUser)

