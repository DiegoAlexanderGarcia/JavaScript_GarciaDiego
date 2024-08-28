let data = {
    "products": [
    {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
    }
    ],
    "suppliers": [
    {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
        "phone": "123-456-7890",
        "email": "sales@techsupplies.com",
        "address": "123 Tech Lane, Silicon Valley, CA"
        }
    }
    ],
    "orders": [
    {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-08-23",
        "status": "Delivered"
    }
    ]
}

function cargarProduct(){
    console.log(fetch('data'))
}

function addProduct() {
    var id = parseInt(prompt("ID:"))
    var names = prompt("nombre producto:")
    var category = prompt("categoria producto:")
    var price = parseFloat(prompt("precio producto:"))
    var quantityInStock = parseInt(prompt("cantidad:"))
    var supplierId = parseInt(prompt("supplierId:"))
    
    data.products.push({
        "id": id,
        "name": names,
        "category": category,
        "price": price,
        "quantityInStock": quantityInStock,
        "supplierId": supplierId
    })
    console.log(data)
}

function viewProducts(){
    console.log(data.products)
}

function updateProduct(id, newDetails) {
    let productIndex = data.products.findIndex(product => product.id === id)
    if (productIndex !== -1) {
        data.products[productIndex] = {...data.products[productIndex], ...newDetails}
        console.log("Producto actualizado:", data.products[productIndex])
    } else {
        console.log("Producto no encontrado")
    }
}

function deleteProduct(id) {
    let productIndex = data.products.findIndex(product => product.id === id)
    if (productIndex !== -1) {
        data.products.splice(productIndex, 1)
        console.log("Producto eliminado")
    } else {
        console.log("Producto no encontrado")
    }
}

function mainMenu() {
    while (true) {
        var opcion = prompt("Inventory System\n"+
                            "1. Gestión de productos\n"+
                            "2. Gestión de Proveedores\n"+
                            "3. Gestión de Pedidos\n"+
                            "4. Gestión de existencias\n"+
                            "5. Informes\n"+
                            "6. Búsqueda y Filtrado\n"+
                            "7. Integridad y validación de datos\n"+
                            "8. Salir\n")

        switch (opcion) {
            case "1":
                productMenu()
                break
            case "2":
                // Implementa la gestión de proveedores
                break
            case "3":
                // Implementa la gestión de pedidos
                break
            case "4":
                // Implementa la gestión de existencias
                break
            case "5":
                // Implementa los informes
                break
            case "6":
                // Implementa la búsqueda y filtrado
                break
            case "7":
                // Implementa la integridad y validación de datos
                break
            case "8":
                console.log("Gracias por usar el sistema. ¡Hasta luego!")
                return
            default:
                console.log("Opción no válida. Por favor, intente de nuevo.")
        }
    }
}

function productMenu() {
    while (true) {
        var selec = prompt("Gestión de productos\n"+
                            "1. Añadir nuevo producto\n"+
                            "2. Mostrar stock\n"+
                            "3. Actualizar un producto\n"+
                            "4. Eliminar producto del stock\n"+
                            "5. Volver al menú principal\n")
        
        switch (selec) {
            case "1":
                addProduct()
                break
            case "2":
                viewProducts()
                break
            case "3":
                var id = parseInt(prompt("ID del producto a actualizar:"))
                var newDetails = {
                    name: prompt("Nuevo nombre (deja en blanco para no cambiar):"),
                    category: prompt("Nueva categoría (deja en blanco para no cambiar):"),
                    price: parseFloat(prompt("Nuevo precio (deja en blanco para no cambiar):")),
                    quantityInStock: parseInt(prompt("Nueva cantidad (deja en blanco para no cambiar):")),
                    supplierId: parseInt(prompt("Nuevo supplierId (deja en blanco para no cambiar):"))
                }
                Object.keys(newDetails).forEach(key => newDetails[key] === "" && delete newDetails[key])
                updateProduct(id, newDetails)
                break
            case "4":
                var id = parseInt(prompt("ID del producto a eliminar:"))
                deleteProduct(id)
                break
            case "5":
                return
            default:
                console.log("Opción no válida. Por favor, intente de nuevo.")
        }
    }
}

mainMenu()