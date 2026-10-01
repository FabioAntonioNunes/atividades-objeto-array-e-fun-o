/*Crie um objeto chamado celular com as propriedades: marca, modelo, nivelBateria(ex: 85), espacoLivreGB(ex: 32)
❖
Utilize o for...in para ler os valores e substituir os valores atuais do objeto.
❖
Utilize outro for...in para imprimir no console os dados atualizados. */

celular = {
    marca: prompt("Digite a marca."),
    modelo: prompt("Digite o modelo."),
    nivelBateria: prompt("Digite o nível da Bateria."),
    espacoLivreGB: prompt("Digite o espaçoLibreGB.")
}
for(let prop in celular){
  celular[prop] = prompt("Digite o novo " + prop) //Observe o [] para mudar dinamicamente, e não procurar propriedade prop.
}
for(let prop in celular){
  console.log(celular[prop])
}