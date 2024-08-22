var n = prompt("Ingrese los números:");
var k = prompt("Ingrese el número de repeticiones:");
num = "";
k = parseInt(k);

for (let i = 0; i < k; i++) {
    num += n;
}

console.log(num)

function SuperDigit(n, k){
    n = n.toString();
    k = parseInt(k);

    if (n.length === 1 && k === 1){
        return parseInt(n);
    }

    var sum = 0
    for (let digit of n){
        sum += parseInt(digit);
    }

    sum *= k;
    console.log(sum);
    
    return SuperDigit(sum.toString(),1);
}

var resultado = SuperDigit(n,k);
console.log("El superdigito final es:", resultado);