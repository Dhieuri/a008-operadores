let num1 = prompt("Insira um numero")   
let num2 = prompt("Insira um segundo numero")
let resultado   

resultado = num1 > num2 
console.log("O primeiro numero é maior que segundo?", resultado)

resultado = num1 === num2
console.log("O primeiro numero é igual ao segundo?", resultado)


resultado = num1 % num2 === 0 
console.log("O primeiro numero é divisível pelo segundo?", resultado)

resultado = num2 % num1 === 0 
console.log("O segundo numero é divisível pelo primeiro?", resultado)
