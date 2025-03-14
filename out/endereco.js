"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(numero, rua, bairro, cidade) {
        this.numero = numero; // Atribuindo o valor ao novo atributo
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.toString = function () {
        return "Rua: ".concat(this.rua, ", N\u00FAmero: ").concat(this.numero, ", Bairro: ").concat(this.bairro, ", Cidade: ").concat(this.cidade);
    };
    return Endereco;
}());
exports.default = Endereco;
