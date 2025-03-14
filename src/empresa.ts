import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";

export class Empresa {
    constructor(
        public funcionarios: Funcionario[],
        public endereco: Endereco,
        public razaoSocial: string,
        public nomeFantasia: string,
        public cnpj: string
    ) {}

    public toString(): string {
        let funcionariosStr = this.funcionarios.map(f => f.toString()).join("\n\n");
        return `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\nCNPJ: ${this.cnpj}\nEndereco:\n${this.endereco.toString()}\n\nFuncionários:\n${funcionariosStr}`;
    }
}
