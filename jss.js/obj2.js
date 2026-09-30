/*Crie um objeto pet com as propriedades nome, especie, racae idade.
❖
Faça uma função ou trecho de código que adicione uma nova propriedade vacinado (boolean) ao objeto pet após a sua criação.
❖
Remova a propriedade racado objeto utilizando o operador delete.
❖
Exiba o objeto final no console. */

let pet = {
    nome: prompt("Digite o nome."),
    especie: prompt("Digite a espécie."),
    raca: prompt("Digite a raça."),
    idade: prompt("Digite a idade.")
}
maisProps(pet)
function maisProps(pet){
    pet.vacinado = Boolean(Number(prompt("Digite 0 para não vacinado e 1 para vacinado.")))
    delete(pet.raca)
    objetoFinal(pet)
}
function objetoFinal(pet){
    console.log(pet)
}

