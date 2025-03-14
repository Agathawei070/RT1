import { Empresa } from "./empresa";
import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { Telefone } from "./telefone";

let enderecoEmpresa = new Endereco(123, "Av. satelite", "Jardim", "São jose dos campos");
let telefoneFuncionario = new Telefone("011", "9-9999-9999");
let enderecoFuncionario = new Endereco(123, "Av. margarida", "Jardim industrial", "São jose dos campos");

let funcionario = new Funcionario("Agatha wei ", "12981613594", "999.999.999-99", enderecoFuncionario, telefoneFuncionario);
let empresa = new Empresa([funcionario], enderecoEmpresa, "WEI", "Mercado Online", "999-999-999-999-99");

console.log(empresa.toString());
