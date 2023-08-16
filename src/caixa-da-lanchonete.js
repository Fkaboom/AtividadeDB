import { PrecoItens } from './preco.js';
import { PagamentoContext } from './strategy/pagamentoContext.js';
import {StrategyMapper} from './strategy/strategyMapper.js'

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length === 0) {
      console.log("Não há itens no carrinho de compra!");
      return 0;
    }

    const precos = new PrecoItens(); 
    const valorTotal = itens
      .map(itemInfo => {
        const [item, quantidade] = itemInfo.split(',');
        const precoItem = precos.getPreco(item);
        if (precoItem !== undefined) {
          return precoItem * parseInt(quantidade);
        } else {
          console.log(`Item '${item}' não encontrado na lista de preços.`);
          return 0;
        }
      })
      .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

      const context = new PagamentoContext(); 
      const strategy = StrategyMapper[metodoDePagamento];
      context.setStrategy(strategy)
      const precoDesconto = context.execute(valorTotal);
      return precoDesconto;
  }
}
const caixa = new CaixaDaLanchonete();
const precoDesconto = caixa.calcularValorDaCompra('credito', ['cafe,1', 'chantily,1']);

console.log(`Preço com desconto: R$ ${precoDesconto}`);
