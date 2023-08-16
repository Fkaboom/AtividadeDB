function DinheiroStrategy  (valorTotal) {
    
    const calcularDesconto = () => {
        const precoDesconto = valorTotal * 0.5;
        return precoDesconto;
    }
    return {
        calcularDesconto
    };
};
export { DinheiroStrategy };
