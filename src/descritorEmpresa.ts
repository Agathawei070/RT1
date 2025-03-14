import Empresa from "./empresa";

class Descritor {
  private empresa: Empresa;

  constructor(empresa: Empresa) {
    this.empresa = empresa;
  }

  descrever(): void {
    console.log(`Razão social: ${this.empresa.razaoSocial}`);
    console.log(`Nome fantasia:${this.empresa.nomeFantasia}`);
    console.log(`cnpj: ${this.empresa.cnpj}`);
    console.log("Endereço");
    console.log(`Rua: ${this.empresa.endereco.rua} Bairro: ${this.empresa.endereco.bairro} Cidade: ${this.empresa.endereco.cidade} numero: ${this.empresa.endereco.numero}`);
    console.log("→");
    console.log("funcionários:");
    
    this.empresa.funcionarios.forEach(funcionario => {
      console.log(`Nome: ${funcionario.nome}`);
      console.log(`matricula: ${funcionario.matricula}`);
      console.log(`cpf: ${funcionario.cpf}`);
      console.log(`Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} numero: ${funcionario.endereco.numero}`);
    });
  }
}

export default Descritor;
