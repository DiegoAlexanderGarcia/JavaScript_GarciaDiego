document.getElementById("boton").addEventListener("click",obtenerJson);

    function obtenerJson(){
        fetch('data.json')
        .then(respuesta=>respuesta.json())
        .then(data=>{
            for (i in data[0].products){
                document.getElementById('info').innerHTML+=
                `
                <p>id:${data[0].products[i]["id"]}</p>
                <p>Nombre:${data[0].products[i]["name"]}</p>
                <p>Categoria:${data[0].products[i]["category"]}</p>
                <p>precio:${data[0].products[i]["price"]}</p>
                <p>cantidad en stock:${data[0].products[i]["quantityInStock"]}</p>
                `
            }
        })
        }

fetch(`data.json`)
.then(respuesta=>respuesta.json())
.then(data=>{
    var productos = data[0].productos

    document.getElementById("boton1").addEventListener("click",(e)=>{

        cajaadd.innerHTML=`
        <form id=agregar>
            <input type=text id=input1 placeholder=id>
            <input type=text id=input2 placeholder=name>
            <input type=text id=input3 placeholder=category>
            <input type=text id=input4 placeholder=price>
            <input type=text id=input5 placeholder=quantityInStock>
            <input type=text id=input6 placeholder=supplierId>
        </form>
        `
        document.getElementById("Add").addEventListener("submit",function(event){
            event.preventDefault()

            let id=document.getElementById("input1").value
            let name=document.getElementById("input2").value
            let category=document.getElementById("input3").value
            let price=document.getElementById("input4").value
            let quantityInStock=document.getElementById("input5").value
            let supplierId=document.getElementById("input6").value

            productos.push({
                "id": id,
                "name": name,
                "category": category,
                "price": price,
                "quantityInStock": quantityInStock,
                "supplierId": supplierId
            })
        })
        
    })
})