// Crie um array que contenha 3 folhas
// Adicione 4 frutas com o métodos .push(<nomeFruta>)
// remova 1 fruta .pop()
// faça um loop for que remova todas as frutas
// verifique, se todas as frutas foram removidas
// imprima "Nenhuma fruta encontrada"
const frutas = ['jaca', 'cupuaçu', 'maracujá']
console.log(frutas)
frutas.push('uva')
frutas.push('melancia')
frutas.push('banana')
frutas.push('taperebá')
console.log(frutas)
// console.log(frutas)
console.log(frutas.length) // comprimento desse array
while (frutas.length > 0) {
    frutas.pop()
    if(frutas.length == 0){
        console.log("Não há frutas para vender!!!")
    }
}
console.log(frutas)
console.log(frutas.length)