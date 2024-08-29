document.getElementById("boton").addEventListener("click",obtenerJson);

    function obtenerJson(){
        fetch(`https://superheroapi.com/api.php/1ae712cb59f766731bed8367c8d0340f/70`)
        .then(res=>res.json)
    }