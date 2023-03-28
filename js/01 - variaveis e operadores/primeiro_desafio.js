const precoCombustivel = 5.79;
const kmporLitros = 10;
const distanciaKm = 100;

const GastoViagem = precoCombustivel*(distanciaKm/kmporLitros);

console.log('O gasto da viagem foi de R$' + GastoViagem.toFixed(2));