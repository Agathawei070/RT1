import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

let enderecoEmpresa = new Endereco(123, "Av. Satélite", "Jardim", "São José dos Campos");
let telefoneFuncionario = new Telefone("011", "9-9999-9999");  
let enderecoFuncionario = new Endereco( 456, "Av. Margarida", "Jardim Industrial", "São José dos Campos");
  
let funcionario = new Funcionario("Agatha Wei", "A12345", "999.999.999-99", enderecoFuncionario, telefoneFuncionario);
let empresa = new Empresa("WEI LTDA", "WEI", "999-999-999-999-99", enderecoEmpresa, [funcionario]);
  

let descritor = new Descritor(empresa);
descritor.descrever();