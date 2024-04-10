/* Escreva um programa para ler o número de gols marcados pelo Corinthians e o número de gols marcados pelo Palmeiras em um final da Libertadores. Exibir o nome do vencedor. Caso não haja vencedor deverá ser exibida a palavra EMPATE.
 */

let corinthians = parseInt(prompt("Quantos gols o corinthians fez?"))
let palmeiras = parseInt(prompt("Quantos gols o Palmerias fez?"))

if(corinthians>palmeiras){
    document.write("CORINTHIANS CAMPEÃO DA LIBERTADORES")
}
else if(palmeiras>corinthians){
    document.write("PALMEIRAS CAMPEÃO DA LIBERTADORES")
}
else if(palmeiras==corinthians){
    document.write("EMPATE")
}
