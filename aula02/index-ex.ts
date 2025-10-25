function normalizarTexto(texto: string):string{

    return texto.trim().toLowerCase();
}


// ----------------------------------------------------------------------------------------
console.log(normalizarTexto("Opa, estou fazendo TS"))
export {};

const nomeUsuario = prompt("Digite seu texto: ") 
if(nomeUsuario){
    console.log(normalizarTexto(nomeUsuario));
}

