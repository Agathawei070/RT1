"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
    }
    Empresa.prototype.toString = function () {
        var funcionariosStr = this.funcionarios.map(function (f) { return f.toString(); }).join("\n\n");
        return "Raz\u00E3o Social: ".concat(this.razaoSocial, "\nNome Fantasia: ").concat(this.nomeFantasia, "\nCNPJ: ").concat(this.cnpj, "\nEndereco:\n").concat(this.endereco.toString(), "\n\nFuncion\u00E1rios:\n").concat(funcionariosStr);
    };
    return Empresa;
}());
exports.Empresa = Empresa;
