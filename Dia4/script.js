let data = [{
    "informacion_personal": {
    "nombre": "Juan Pérez",
    "edad": 30,
    "direccion": {
    "calle": "Calle Principal",
    "numero": 123,
    "ciudad": "Ciudad Ejemplo"
    },
    "contacto": {
    "correo": "juan.perez@example.com",
    "telefono": "+123456789"
    }
    },
    "historial_educativo": [
    {
    "nivel": "Secundaria",
    "institucion": "Instituto Secundario",
    "anio_inicio": 2000,
    "anio_fin": 2005
    },
    {
    "nivel": "Universidad",
    "institucion": "Universidad Ejemplar",
    "titulo": "Licenciatura en Ciencias",
    "anio_inicio": 2006,
    "anio_fin": 2010
    }
    ],
    "experiencia_laboral": [
    {
    "puesto": "Desarrollador de Software",
    "empresa": "Tech Solutions",
    "periodo": "2010-2015",
    "responsabilidades": [
    "Desarrollo de aplicaciones web",
    "Mantenimiento de bases de datos"
    ]
    },
    {
    "puesto": "Gerente de Proyectos",
    "empresa": "Proyectos Avanzados",
    "periodo": "2016-actualidad",
    "responsabilidades": [
    "Planificación y supervisión de proyectos",
    "Coordinación de equipos"
    ]
    }
    ]
    },
]


console.log(data)


var opcion = prompt("menu crud\n"+
            "1. crear\n"+
            "2. actaulizar\n"+
            "3. eliminar\n"+
            "4. leer\n"+
            "elige una opcion:\n")

if (opcion == 1) {
    let seccion = prompt("¿En qué sección deseas crear?\n 1. informacion_personal\n 2. historial_educativo\n 3. experiencia_laboral:")
    if (seccion == 1){

    var nueva_informacion_personal = {
    var new_nombre = prompt("nuevo nombre:");
    var newedad = prompt("edad:");
    var newdireccion = {
    var newcalle = prompt("calle:");
    "numero": 123,
    "ciudad": "Ciudad Ejemplo"
    },
    "contacto": {
    "correo": "juan.perez@example.com",
    "telefono": "+123456789"
    }
    },
    "historial_educativo": [
    {
    "nivel": "Secundaria",
    "institucion": "Instituto Secundario",
    "anio_inicio": 2000,
    "anio_fin": 2005
    },
    {
    "nivel": "Universidad",
    "institucion": "Universidad Ejemplar",
    "titulo": "Licenciatura en Ciencias",
    "anio_inicio": 2006,
    "anio_fin": 2010
    }
    ],
    "experiencia_laboral": [
    {
    "puesto": "Desarrollador de Software",
    "empresa": "Tech Solutions",
    "periodo": "2010-2015",
    "responsabilidades": [
    "Desarrollo de aplicaciones web",
    "Mantenimiento de bases de datos"
    ]
    },
    {
    "puesto": "Gerente de Proyectos",
    "empresa": "Proyectos Avanzados",
    "periodo": "2016-actualidad",
    "responsabilidades": [
    "Planificación y supervisión de proyectos",
    "Coordinación de equipos"
    ]} 
}
};

if (opcion == 2){
    let seccion = prompt("¿Qué sección deseas actualizar? \n 1. informacion_personal\n 2. historial_educativo\n 3. experiencia_laboral:")
    if (seccion === 1) {
        let campo = prompt("Ingrese el campo que desea actualizar:")
        let valor = prompt("Ingrese el nuevo valor para " + campo + ":")
        data.informacion_personal[campo] = valor
    } else if (seccion === 2 || seccion === 3) {
        let indice = parseInt(prompt("Ingrese el índice del elemento a actualizar:"))
        let campo = prompt("Ingrese el campo que desea actualizar:")
        let valor = prompt("Ingrese el nuevo valor para " + campo + ":")
        data[seccion][indice][campo] = valor
    }
}

if (opcion == 3){

}

if (opcion == 4){
    console.log(JSON.stringify(data, null, 2))
}