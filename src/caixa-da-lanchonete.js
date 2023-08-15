class CaixaDaLanchonete {


    calcularValorDaCompra(metodoDePagamento, itens) {

        const valorTotal = itens
        if(itens !== null){
        for (const itemInfo of this.itens) {
            const [item, quantidade] = itemInfo.split(',');
            if (Preco.hasOwnProperty(item)) {
                total += Preco[item] * parseInt(quantidade);
            } else {
                console.log(`Item '${item}' não encontrado na lista de preços.`);
            }
        }
    }else{
        console.log("Não há itens no carrinho de compra!")
    }
        const context = pagamentoContext();
        const strategy = strategyMapper[metodoDePagamento()];
        context.setStrategy(strategy)
        const precoDesconto = context.execute();
        return precoDesconto;
    }

}

export { CaixaDaLanchonete };
