import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Funcionario {
    constructor(
        public nome: string,
        public matricula: string,
        public cpf: string,
        public endereco: Endereco,
        public telefone: Telefone
    ) {}

    public toString(): string {
        return `Nome: ${this.nome}\nMatricula: ${this.matricula}\nCPF: ${this.cpf}\n${this.endereco.toString()}`;
    }
}
