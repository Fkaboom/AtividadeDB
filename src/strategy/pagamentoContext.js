const pagamentoContext = () => {
    let strategy;

    const setStrategy = (newStrategy) => strategy = newStrategy;
    const getStrategy = () => strategyMapper;
    return{
        getStrategy,
        setStrategy
    }
}