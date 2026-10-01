/*Um grupo de teatro chega a cidade de Patrocínio e faz uma breve pesquisa sobre a sua audiência baseada no preço de seu ingresso. A conclusão é que: caso o ingresso seja vendido a R$10,00, o público alvo será de 200 pessoas. A pesquisa também revelou que, a cada R$1,00 mais barato, a audiência aumenta em 52 pessoas. Considerando que o grupo deve pagar no total uma despesa de R$300,00 pelo aluguel do espaço, faça um programa que calcule qual é o melhor valor para venda de ingresso desse circo (o que gera um maior lucro).
Ao final, o algoritmo deve mostrar:
❖
O melhor preço de vendas para o ingresso.
❖
O número de pessoas que compõe a audiência.
❖
O lucro esperado com a realização do evento. */

function lucro() {
    let maiorLucro = -Infinity
    let iDoMaiorLucro
    let audienciaDoMaiorLucro
    for(let i = 10; i >= 0; i--){
    let lucro = (i)*(200 + 52 * (10 - i)) - 300// i é o preço de cada ingresso.
    if(lucro > maiorLucro){
        maiorLucro = lucro
        iDoMaiorLucro = i
        audienciaDoMaiorLucro = 200 + 52 * (10 - i)
    }
}
fim(maiorLucro, iDoMaiorLucro, audienciaDoMaiorLucro)
}
function fim(maiorLucro, iDoMaiorLucro, audienciaDoMaiorLucro){
    alert("O melhor preço de vendas foi R$" + iDoMaiorLucro + ", o número de pessoas que compõem essa audiência é de " + audienciaDoMaiorLucro + " pessoas e o lucro esperado é de R$" + maiorLucro + ".")
}
lucro()
