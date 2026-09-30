/*Crie um arraye faça a leitura com as temperaturas registradas em uma semana. Posteriormente, imprima no console a média de temperatura daquela semana e a temperatura máxima e mínima. */

function temperaturasDaSemana(){
    let vetor = []
    let dia
    for(let i = 0; i < 7; i++){
        switch (i) {
        case 0:
        dia = "o domingo"
        break;

        case 1:
        dia = "a segunda"
        break;

        case 2:
        dia = "a terça"
        break;

        case 3:
        dia = "a quarta"
        break;

        case 4:
        dia = "a quinta"
        break;

        case 5:
        dia = "a sexta"
        break;

        case 6:
        dia = "o sábado"
        break;
    }
        let objeto = {
                temperatura: Number(prompt("Digite o valor da temperatura d" + dia + ".")),
                dia: dia
    }
    vetor.push(objeto) 
}
    processamento(vetor)
}
function processamento(temperaturas){
    let tmenor = Infinity
    let tmaior = -Infinity
    let media = 0
    let diatmenor
    let diatmaior
    for(let t of temperaturas){
        media = media + t.temperatura / 7
        if(t.temperatura < tmenor){
            tmenor = t.temperatura
            diatmenor = t.dia
        }
        if(t.temperatura > tmaior){
            tmaior = t.temperatura
            diatmaior = t.dia
        }
    }
    fim(media, tmenor, tmaior, diatmenor, diatmaior)
}
function fim(media, tmenor, tmaior, diatmenor, diatmaior){
    alert(`A média dessa semana foi de ${media.toFixed(1)}°C, a temperatura mínima foi de ${tmenor}°C e aconteceu n${diatmenor} e a temperura máxima foi ${tmaior}°C e aconteceu n${diatmaior}.`)
}
temperaturasDaSemana()