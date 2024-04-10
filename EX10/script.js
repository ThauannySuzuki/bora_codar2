/* Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm).
Calcular e exibir o seguinte: Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor do seu perímetro. Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. Se o número de lados for igual a 5 escrever PENTÁGONO. Observação: Considere que o usuário só informará os valores 3, 4 ou 5. Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO. Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO. */

let numL = parseInt(prompt("Digite o número de lados do poligono: "))
let peri = parseFloat(prompt("Digite a medida do lado: "))

if(numL<3 || numL>5){
    alert("NÃO É UM POLÍGONO")
}
else if(numL==3){
    let peri1= peri*3
    alert("TRIANGULO. O perimetro do poligono é: " + peri1)

}
else if(numL==4){
    let peri2= peri*4
    alert("QUADRADO O perimetro do poligono é: " + peri2)

}
else if(numL==5){
    let peri3= peri*5
    alert("PENÁGONO O perimetro do poligono é: " + peri3)

}