
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

const definindoGenero = ( nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number ): Filme =>{
    return {
        nome:nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao
    }
}
const verificaGenero = (genero:string):GENERO =>{
    switch (genero){
        case "acao" :
            return GENERO.ACAO
        case "drama" :
            return GENERO.DRAMA
        case "comedia" :
            return GENERO.COMEDIA
            case "romance" :
            return GENERO.ROMANCE
            case "terror" :
            return GENERO.TERROR
    }
}

console.table(definindoGenero(process.argv[2], parseInt(process.argv[3]), verificaGenero(process.argv[4]), parseInt(process.argv[5])))