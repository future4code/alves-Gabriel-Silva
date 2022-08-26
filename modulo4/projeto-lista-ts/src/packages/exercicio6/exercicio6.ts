
type DadosCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: []
}
const clientes = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const clientesNegativos = (cliente: any):any =>{
    const negativos = cliente.filter((cliente: DadosCliente)=>{
        const valorInicial = 0
        const debito = cliente.debitos.reduce((valor1, valor2) => valor1 + valor2, valorInicial)
        if(cliente.saldoTotal < debito){
            return cliente
        }
    }).map((cliente:DadosCliente)=> {
        const valorInicial = 0
        return {
            cliente:cliente.cliente,
            saldoTotal: cliente.saldoTotal - cliente.debitos.reduce((valor1, valor2) => valor1 + valor2, valorInicial),
        }
    })
    return negativos
}
console.table(clientesNegativos(clientes))
