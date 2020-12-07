export class Cliente {
    codigo:number;
    nome:string;
    endereco:string;
}

export class Produto{
    codigo:number;
    valor:number;
    nome:string;
}

export class Lancamento {
    codigo:number;
    descricao:string;
    valor:number;
    observacao:string;
    status:number;
    tipo:number;
    data:Date;
    dataVencimento:Date;
}

export class Venda {
    codigo : number;
    cliente = new Cliente();
    produto = new Produto();
    vendaData:Date;
    quantidade:number;
    valor:number;

}