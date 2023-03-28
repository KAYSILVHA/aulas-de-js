class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);

    }
    classificarImc(){
       const imc = this.calcularImc();
       if (imc < 18.5) {
        return 'Seu IMC é de ' + imc + ', você está abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu IMC é de ' + imc + ', você está com peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Seu IMC é de ' + imc + ', você está acima do peso';
    }else if (imc >= 30 && imc < 40) {
        return 'Seu IMC é de ' + imc + ', você está obeso';
    }else {
        return 'Seu IMC é de ' + imc + ', você está com obesidade grave';
    }
    
}

    }

const jose = new Pessoa('José',70,1.75);
console.log(jose.classificarImc());
