export type User ={
    nome: string,
    CPF: number,
    nascimento: string,
    saldo: number,
    extrato: [
        {
            valor: number,
            data: string,
            descricao: string
        }
    ]
}

export const users:User[] = [
    {
        nome: "Gabriel",
        CPF: 1,
        nascimento: "10/10/1990",
        saldo: 10.35,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
    },
]