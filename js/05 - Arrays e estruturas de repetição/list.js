//imprima só os pares em uma lista

let num = [];

num.push(2);
num.push(4);
num.push(5);
num.push(8);
num.push(7);
num.push(6);
num.push(8);


for (let i = 0; i < num.length; i++) {
    const element = num[i];

    if(element%2==0)
    console.log(element)
    
}