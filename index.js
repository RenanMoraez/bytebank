import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";



const diretor = new Diretor("Renan", 10000, 11122233300);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 22233344455);
gerente.cadastrarSenha("123456789");

const cliente = new Cliente("Alina", 1222112312,"123" );



const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clientelogado = SistemaAutenticacao.login(cliente, "123");

console.log(gerenteEstaLogado, diretorEstaLogado, clientelogado);
