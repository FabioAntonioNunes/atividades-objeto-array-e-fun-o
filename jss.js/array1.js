/*Faça a leitura de 7 valores reais e armazene em um vetor. Use um laço de repetição para somar todos os valores do arraye calcular o total das compras. Se o valor total for maior que R$ 300,00, aplique um desconto de 10% no total final e exiba a mensagem com o valor recalculado.*/

function leituraVetor(){
    vetor = []
    for(i = 0; i < 7; i++){
    vetor.push(Number(prompt("Digite o número.")))
    }
    somarCompras(vetor)
}
function somarCompras(vetor){
    let soma = 0
    for(let compra of vetor){
        soma = soma + compra
    }
    aplicarDesconto(soma)

}
function aplicarDesconto(soma){
    let valorFinal
        if(soma > 300){
            valorFinal = soma - soma * 0.10
            alert("O valor recalculado é " + valorFinal)
        }
        else{
            alert("O valor é" + soma)
        }
}
leituraVetor()