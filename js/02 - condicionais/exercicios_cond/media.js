/*Média
 */

const Nota1 = 5;
const Nota2 = 9;
const Nota3 = 7;

const media = (Nota1 + Nota2 + Nota3 )/3;


if(media < 5){
    console.log('Sua média foi de ' + media + ', infelizmente você foi reprovado!');
}else if(media >=5 && media<=7) {
    console.log('Sua média foi de ' + media + ', você ficou de recuperação!');
}else {
    console.log('Sua média foi de ' + media + ', parabéns você passou de semestre!');
}