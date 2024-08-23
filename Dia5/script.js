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

console.log(data)

function addProduct() {
            var id = prompt("ID:")
            var names = prompt("nombre producto:")
            var category = prompt("categoria producto:")
            var price = prompt("precio producto:")
            var quantityInStock = prompt("cantidad:")
            var supplierId = prompt("supplierId:")
            
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

var opcion = prompt("Inventory System\n"+
                    "1. Gestión de productos\n"+
                    "2. Gestión de Proveedores\n"+
                    "3. Gestión de Pedidos\n"+
                    "4. Gestión de existencias\n"+
                    "5. Informes\n"+
                    "6. Búsqueda y Filtrado\n"+
                    "7. Integridad y validación de datos\n")

if (opcion = 1){
    var selec = prompt("Gestión de productos\n"+
                        "1. añadir nuevo producto\n"+
                        "2. mostrar stock\n"+
                        "3. actualizar un nuevo producto\n"+
                        "4. eliminar producto del stock\n")
        if (selec = 1){
            addProduct()
        }

        if (selec = 2){
            console.log(data.products)
        }
}