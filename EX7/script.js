/* - As maçãs custam R$ 3,50 cada se forem compradas menos do que uma dúzia, e R$ 2,50 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas (considere que o usuário informará a quantidade),  calcule e escreva o valor total da compra. */

let quant = parseInt(prompt("Digite a quantidade de maças que deseja: "))
let p1 = 3.50
let p2 = 2.50

if(quant<12){
let valor1 = quant*p1
document.write("O valor total foi de: " + valor1)
}
else if(quant>12){
let valor2 = quant*p2
document.write("O valor total foi de: " + valor2)
}