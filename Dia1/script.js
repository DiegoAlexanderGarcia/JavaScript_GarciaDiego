function edad(a){
    return console.log(2024-a)
}
console.log("naciste en") 
edad(26)

function fahreheit(a){
    return console.log(32+(9*a/5))
}
fahreheit(18)

function descuentos(a){
    var b 
    if (a<=20) {
        var b = "30%"
    } 
    else if (a<=50) {
        var b = "10%"
    }
    else {
        var b = "no tienes desacuento"
    }
    return b
}
console.log(descuentos(10))