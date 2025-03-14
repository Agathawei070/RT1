"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var descritorEmpresa_1 = __importDefault(require("./descritorEmpresa"));
var empresa_1 = __importDefault(require("./empresa"));
var endereco_1 = __importDefault(require("./endereco"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var enderecoEmpresa = new endereco_1.default(123, "Av. Satélite", "Jardim", "São José dos Campos");
var telefoneFuncionario = new telefone_1.default("011", "9-9999-9999");
var enderecoFuncionario = new endereco_1.default(456, "Av. Margarida", "Jardim Industrial", "São José dos Campos");
var funcionario = new funcionario_1.default("Agatha Wei", "A12345", "999.999.999-99", enderecoFuncionario, telefoneFuncionario);
var empresa = new empresa_1.default("WEI LTDA", "WEI", "999-999-999-999-99", enderecoEmpresa, [funcionario]);
var descritor = new descritorEmpresa_1.default(empresa);
descritor.descrever();
