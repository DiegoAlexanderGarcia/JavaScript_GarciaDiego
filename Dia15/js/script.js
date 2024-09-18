class contUser extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = `
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Primer Apellidos</th>
                        <th scope="col">Segundo Apellidos</th>
                        <th scope="col">Cédula</th>
                    </tr>
                </thead>
                <tbody id="table-body"></tbody>
            </table>
        `;
        
        fetch('https://www.datos.gov.co/resource/9ssf-i6c5.json')
        .then(res => res.json())
        .then(data => {
            const tableBody = this.querySelector('#table-body');
            data.forEach(r => {
                tableBody.innerHTML += `
                <tr class="user-row">
                    <td class="nombre">${r.primernombre}</td>
                    <td class="apellidos">${r.primerapellido}</td>
                    <td class="apellidos2">${r.segundoapellido}</td>
                    <td class="cedula">${r.cedula}</td>
                </tr>
                `;
            });
            this.setupSearch();
        });
    }

    setupSearch() {
        document.getElementById("search-bar").addEventListener("input", e => {
            if (e.target.matches("#search-bar")) {
                document.querySelectorAll(".user-row").forEach(row => {
                    let nombre = row.querySelector(".nombre").textContent.toLowerCase();
                    let apellidos = row.querySelector(".apellidos").textContent.toLowerCase();
                    let apellidos2 = row.querySelector(".apellidos2").textContent.toLowerCase();
                    let cedula = row.querySelector(".cedula").textContent.toLowerCase();
                    let busqueda = e.target.value.toLowerCase();
                    
                    if (nombre.includes(busqueda) || 
                        apellidos.includes(busqueda) ||
                        apellidos2.includes(busqueda) || 
                        cedula.includes(busqueda)) {
                        row.classList.remove('filtro');
                    } else {
                        row.classList.add('filtro');
                    }
                });
            }
        });
    }
}

customElements.define('mi-tabla', contUser);