/*Crie um objeto chamado perfilInstagramcom as seguintes propriedades: username, bio, seguidores (um número) e estaAtivo(0 ou 1).
❖
Exiba no console uma mensagem formatada utilizando templateliterals:
❖
O usuário @[username] possui [seguidores] seguidores.
❖
Em seguida, simule que o usuário ganhou 150 novos seguidores: atualize o valor da propriedade seguidores e exiba o objeto atualizado no console com um novo log. */

let perfilInstagram = {
    username: prompt("Digite o usurname."),
    bio: prompt("Digite a bio"),
    seguidores: Number(prompt("Digite o numero de seguidores")),
    estaAtivo: Number(prompt("Digite 0 para desativo ou 1 para ativo."))
}
console.log(`O usuário ${perfilInstagram.username} possui ${perfilInstagram.seguidores} seguidores.`)
perfilInstagram.seguidores = perfilInstagram.seguidores + 150
console.log(perfilInstagram)