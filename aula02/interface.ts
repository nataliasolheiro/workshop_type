interface Pessoa{
    nome: string,
    idade: number,
    dataNascimento: string,
    profissao?: string // a interrogação tira a obrigatoriedade da resposta

    saudar(texto: string): void

}

interface Funcionario extends Pessoa{
    cargo: string
    salario: number
}

const usuario: Pessoa[] = [{
    nome: "Natalia",
    idade: 33,
    dataNascimento: "30/12/1992",
    profissao: "dev",

    saudar(texto: string):void{
        console.log(`${texto}, ${this.nome}`)
    }
}];

const novoFunc: Funcionario = {
nome: "Leandro",
cargo: "Dev Senior",
idade: 26,
dataNascimento: "30/12",
salario: 20.000,
saudar(texto:string) {
    console.log("Opa")
},

}

interface Contato{
    tipo:"email" | "Instagram" | "telefone"
    valor: string
}

interface Usuario{
    nome: string,
    idade:number,
    dataNascimento: "16/06",
    
}

usuario.saudar("Olá, seja bem vindo")


