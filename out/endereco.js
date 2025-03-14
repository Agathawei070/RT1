"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.toString = function () {
        return "Rua: ".concat(this.rua, " Bairro: ").concat(this.bairro, " Cidade: ").concat(this.cidade, " Numero: ").concat(this.numero);
    };
    return Endereco;
}());
exports.Endereco = Endereco;
