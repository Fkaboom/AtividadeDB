const PagamentoContext = () => {
    let strategy;

    const setStrategy = (newStrategy) => {
        strategy = newStrategy;
    };

    const getStrategy = () => {
        return strategy;
    };

    const execute = () => {
        return strategy.calcularDesconto(valorTotal);
    };

    return {
        getStrategy,
        setStrategy,
        execute
    };
};

export { PagamentoContext };
