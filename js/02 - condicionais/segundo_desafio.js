const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmporLitros = 10;
const distanciaKm = 100;
const tipoCombustivel= 'Etanol';

const litrosConsumidos = distanciaKm / kmporLitros;

if(tipoCombustivel==='Etanol'){
    console.log(litrosConsumidos*precoEtanol.toFixed(2));
}else{
    console.log(litrosConsumidos*precoGasolina.toFixed(2));
}