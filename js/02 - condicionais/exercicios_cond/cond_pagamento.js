/*Condições de pagamento
1 - a vista no debito, recebe 10% desconto
2 - a vista dinheiro ou pix, recebe 15% desconto
3 - em duas vezes, preço da etiqueta sem juros
4 - acima de duas vezez, preço da etiqueta mais 10% JUROS
*/

function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * (juros/100)));
    
}
const precoEtiqueta = 100;
const formaDePagamento = 4;



    if(formaDePagamento === 1){
       console.log('Você optou por pagar ' + formaDePagamento +
       ', você vai pagar R$' + (aplicarDesconto(precoEtiqueta,10)));
    
    
    }else if(formaDePagamento === 2){
       console.log('Você optou por pagar ' + formaDePagamento +
       ', você vai pagar R$' + (aplicarDesconto(precoEtiqueta,15))) ;
    
        }else if(formaDePagamento === 3){
           console.log('Você optou por pagar ' + formaDePagamento +
           ', você vai pagar R$' + precoEtiqueta);
            
        }else if(formaDePagamento === 4){
           console.log('Você optou por pagar ' + formaDePagamento +
           ', você vai pagar R$' + (aplicarJuros(precoEtiqueta, 10)));
    
        }

   
      