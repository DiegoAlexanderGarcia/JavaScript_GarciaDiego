var n = prompt("numeros")
var k = prompt("repeticones")

num = ""

for (let index = 0; index < k; index++) {
    num += n;    
}

console.log(num)

var a = 0

for (const i of num){
    a += Number (i) 
}

console.log(a)



