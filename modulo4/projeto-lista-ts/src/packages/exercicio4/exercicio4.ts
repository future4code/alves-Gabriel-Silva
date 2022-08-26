
const array = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

enum SETOR{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaboradores = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
}

const separaPorSetor = (array: any): Colaboradores[] =>{

   const novoArray = array.filter((item: Colaboradores)=>{
        if(item.setor === "marketing" && item.presencial === true){
            return item
        }
    })
    return novoArray
}

console.table(separaPorSetor(array)) 