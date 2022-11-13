

/* Conta em JavaScript de consumo de combustivel */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmporlitros = 10;
const distanciakm = 100;


// Agora, escolhemos o tipo de combustivel: 
const tipoCombustivel = 'Gasolina';

const litrosconsumidos = distanciakm / kmporlitros;

if (tipoCombustivel === 'Etanol') { //Leia isto como: 'Se nao for etanol ... '
    const ValorGasto = litrosconsumidos * precoEtanol;
    console.log(ValorGasto);

} else{                             //Leia isto como: 'Mas se nao for etanol ... '
    const ValorGasto = litrosconsumidos * precoGasolina;
    console.log(ValorGasto);

}





