const retornaType = (parametro: any):any =>{
    return console.log(typeof parametro)
}

retornaType(process.argv[2])