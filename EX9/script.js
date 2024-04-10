/*  Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. */

let n1 = parseInt(prompt("Digite um número: "))
let n2 = parseInt(prompt("Digite um número: "))
let adi = n1+n2
let sub = n1-n2
let div = n1/n2
let multi = n1*n2
 document.write("A adição dos valores é: " + adi + "<br />")
 document.write("A subtração dos valores é: " + sub + "<br />")
 document.write("A divisão dos valores é: " + div + "<br />")
 document.write("A multiplicação dos valores é: " + multi + "<br />")