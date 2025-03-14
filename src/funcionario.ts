import Endereco from "./endereco";
import Telefone from "./telefone";

class Funcionario {
  nome: string;
  matricula: string;  // Adicionado
  cpf: string;
  endereco: Endereco;
  telefone: Telefone;

  constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone) {
    this.nome = nome;
    this.matricula = matricula;  // Atribuindo o valor ao novo atributo
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}

export default Funcionario;
