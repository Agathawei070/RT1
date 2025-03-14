"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor(empresa) {
        this.empresa = empresa;
    }
    Descritor.prototype.descrever = function () {
        console.log("Raz\u00E3o social: ".concat(this.empresa.razaoSocial));
        console.log("Nome fantasia:".concat(this.empresa.nomeFantasia));
        console.log("cnpj: ".concat(this.empresa.cnpj));
        console.log("Endereço");
        console.log("Rua: ".concat(this.empresa.endereco.rua, " Bairro: ").concat(this.empresa.endereco.bairro, " Cidade: ").concat(this.empresa.endereco.cidade, " numero: ").concat(this.empresa.endereco.numero));
        console.log("→");
        console.log("funcionários:");
        this.empresa.funcionarios.forEach(function (funcionario) {
            console.log("Nome: ".concat(funcionario.nome));
            console.log("matricula: ".concat(funcionario.matricula));
            console.log("cpf: ".concat(funcionario.cpf));
            console.log("Rua: ".concat(funcionario.endereco.rua, " Bairro: ").concat(funcionario.endereco.bairro, " Cidade: ").concat(funcionario.endereco.cidade, " numero: ").concat(funcionario.endereco.numero));
        });
    };
    return Descritor;
}());
exports.default = Descritor;
