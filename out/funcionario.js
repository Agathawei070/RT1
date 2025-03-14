"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    Funcionario.prototype.toString = function () {
        return "Nome: ".concat(this.nome, "\nMatricula: ").concat(this.matricula, "\nCPF: ").concat(this.cpf, "\n").concat(this.endereco.toString());
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
