// Exercício 1:

// a) Não seria possível pois não há um método para isso.

// b) Apenas uma vez.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    introduceYourself() {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

//   const gabriel = new User("01", "gabriel@gmail.com", "gabriel", "123456")

// Exercício 2:

// a) Uma única vez.

// b) Uma vez, porque está sendo usando essa clase como extenção ou referência. 

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const teste = new Customer("02", "teste@gmail.com", "teste", "0t2e7s5t4e3", "0019282783727")

//   Exercício 3:

console.log("teste: ", teste)

//   a) Se dou o console.log em td a instância cosigo ver a senha, se tento acessá-la como propriedade não consigo.

// Exercício 4:

console.log(teste.introduceYourself())

// Exercício 5:

const teste2 = new Customer("02", "teste2@gmail.com", "teste2", "0t2e7s5t4e3", "0019282783727")

console.log(teste2.introduceYourself())


// Polimorfismo:

// Exercício 1:

// a) Imprimi todas.

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const interfaceTeste: Client = {
    name: "AstroDev",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2
    }
}
console.log(interfaceTeste.registrationNumber)

// Exercício 2:

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

//   a) Diz que Não é possível criar uma instância de uma classe abstrata.

// b) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// Exercício 3:

// a) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// b) Porque ela pode limitar o acesso aos dados enquanto a interface não.

// c) Porque não há nescessidade de criar uma intância dela, ela serve para representar
//    valores de várias classes distintas com dados em comum.

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
}

const casa = new Residence(2, "898282892")

const loja = new Commerce(87, "27624544")

const fabrica = new Industry(55, "7285235")

console.log(casa.getCep(), loja.getCep(), fabrica.getCep())


//   Exercício 4:

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    getCpf(): string {
        return this.cpf;
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}


// Exercício 5:

class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  }

//   Exercício 6:

class IndustrialClinet extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }