
/*algoritmo para calcular e adequar preço pela forma de pagamento
1 - debito tem 10% desc
2 -dinheiro pix, 15% desc
3 - 2x, preço normal sem juros
4- mais parcelas, 10% juros


Aqui, vamos organizar as formas de pagamento por numeros. E abaixo, vamos escolher a forma de pagamento pelo numero. 
*/

const precoEtiqueta = 100;
const formadePagamento = 4 ;

if ( formadePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta*0.1) );
} else if (formadePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta*0.15) );
}else if (formadePagamento ===3) {
    console.log(precoEtiqueta);
} else {
    console.log (precoEtiqueta + (precoEtiqueta*0.1));
}
