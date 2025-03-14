import Endereco from "./endereco";
import Funcionario from "./funcionario";

class Empresa {
  razaoSocial: string;  // Adicionado
  nomeFantasia: string; // Alterado de "nome" para "nomeFantasia"
  cnpj: string;
  endereco: Endereco;
  funcionarios: Funcionario[];

  constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionarios: Funcionario[]) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.funcionarios = funcionarios;
  }
}

export default Empresa;

