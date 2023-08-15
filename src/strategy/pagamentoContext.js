const pagamentoContext = () => {
    let strategy;

    const setStrategy = (newStrategy) => strategy = newStrategy;
    const getStrategy = () => strategy;
    const execute = () => strategy.calcularDesconto();
    return {
        getStrategy,
        setStrategy
    }
}