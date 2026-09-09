let videoteca = 'video'

export function alugarFilme (nomeFilme, dataAluguel, preco) {
    return `filme ${nomeFilme} foi alugado na data: ${dataAluguel} por: ${preco}`
    }


export function devolverFilme (nomeFilme, dataEntrega) {
    return `filme ${nomeFilme} devolveu o filme na data: ${dataEntrega}`
    }