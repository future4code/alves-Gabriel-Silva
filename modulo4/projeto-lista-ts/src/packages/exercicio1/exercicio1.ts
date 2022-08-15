
const retornaFrase = (nome: string, nascimento: string): string => { 

    const data = nascimento.split("/")

    switch (data[1]){
        case "01" :
            data[1] = "janeiro"
        case "02" :
            data[1] = "fevereiro"
        case "03" :
            data[1] = "março"
        case "04" :
            data[1] = "abril"
        case "05" :
            data[1] = "maio"
        case "06" :
            data[1] = "junho"
        case "07" :
            data[1] = "julho"
        case "08" :
            data[1] = "agosto"
        case "09" :
            data[1] = "setembro"
        case "10" :
            data[1] = "outubro"
        case "11" :
            data[1] = "novembro"
        case "12" :
            data[1] = "dezembro"

    }
    const dia = data[0]
    const mes = data[1]
    const ano = data[2]
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}.` 
}
console.log(retornaFrase(process.argv[2], process.argv[3]))
