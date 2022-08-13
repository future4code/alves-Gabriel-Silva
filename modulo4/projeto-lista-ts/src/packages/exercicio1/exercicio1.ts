
const retornaFrase = (nome: string, nascimento: string): string => { 

    const data = nascimento.split("/")

    switch (data[1]){
        case "01" || "1":
            data[1] = "janeiro"
        case "02" || "2":
            data[1] = "fevereiro"
        case "03" || "3":
            data[1] = "março"
        case "04" || "4":
            data[1] = "abril"
        case "05" || "5":
            data[1] = "maio"
        case "06" || "6":
            data[1] = "junho"
        case "07" || "7":
            data[1] = "julho"
        case "08" || "8":
            data[1] = "agosto"
        case "09" || "9":
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
console.log(process.argv[2])
