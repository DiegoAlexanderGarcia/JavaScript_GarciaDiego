//{
//    "cedula": "40356455",
//    "primernombre": "BERNARDA",
//    "primerapellido": "TORRES",
//    "segundoapellido": "SILVA"
//  },


class contUser extends HTMLElement {
    constructor() {
        super();

        fetch('https://www.datos.gov.co/resource/9ssf-i6c5.json')
        .then(res=>res.json())
        .then(data=>{
            data.forEach(r => {
                this.innerHTML +=`
                <div id="contenido">
                <h1 id="Nombre">${r.primernombre}</h1>
                <h2 id="Apellido">${r.primerapellido}</h2>
                <h3 id="SegundoA">${r.segundoapellido}</h3>
                <p id="cedula">${r.cedula}</p>
            </div>
                `
            });
        })

    }}
customElements.define('mi-main', contUser)