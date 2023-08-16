class PrecoItens {
    constructor() {
      this.precos = {
        "cafe": 3,
        "chantily": 1.50,
        "suco": 6.20,
        "sanduiche": 6.50,
        "queijo": 2.00,
        "salgado": 7.25,
        "combo1": 9.50,
        "combo2": 7.50
      };
    }
  
    getPreco(item) {
      return this.precos[item];
    }
  }
  
  export { PrecoItens };
  