class Endereco {
    numero: number;  // Adicionado
    rua: string;
    bairro: string;
    cidade: string;
  
    constructor(numero: number, rua: string, bairro: string, cidade: string) {
      this.numero = numero;  // Atribuindo o valor ao novo atributo
      this.rua = rua;
      this.bairro = bairro;
      this.cidade = cidade;
    }
  
    toString(): string {
      return `Rua: ${this.rua}, Número: ${this.numero}, Bairro: ${this.bairro}, Cidade: ${this.cidade}`;
    }
  }
  
  export default Endereco;
  