
type Usuario = {
    name: string, 
    email: string, 
    role: string
}

const usuarios = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const retornaADMs = (usuarios:Array<Usuario>): string[] =>{
    const adms = usuarios.filter((usuario: Usuario)=>{
        if(usuario.role === "admin"){
            return usuario.email
        }
    })
   .map((usuario: Usuario)=> usuario.email)
    return adms
}

console.table(retornaADMs(usuarios))