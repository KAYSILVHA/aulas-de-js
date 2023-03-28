//objetos= condição dinâmica de chave e valor//

/*const pessoa = {
    nome: 'Kayra Silva',
    idade: 17,
    
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`); 
    }
};

console.log(kayra.nome);
console.log(kayra.idade);

kayra.altura = 1.69;
console.log(kayra);

delete kayra.idade;
console.log(kayra);
pessoa.descrever();

console.log(kayra);*/


//classes= definição do que deveria ser e instancia= é a ocorrencia descrição
/*
class Pessoa{
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`); 
    }
}

const vitor = new Pessoa();;
vitor.nome= 'vitor guerra' ;
vitor.idade= 24;

vitor.descrever();
*/
class Pessoa{
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`); 
    }
}

const vitor = new Pessoa('Vitor', 25);

console.log(vitor);