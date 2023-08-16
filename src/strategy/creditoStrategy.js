const CreditoStrategy = (valorTotal) => {
    
    
    const calcularDesconto = () => {
        const precoDesconto = valorTotal * 1.3;
        return precoDesconto;
    }
    return {
        calcularDesconto,
        
    };
};
export { CreditoStrategy };
