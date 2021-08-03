import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


// eles fazem parte da conta corrente onde foi feito os construtores
const cliente1 = new Cliente("Ricardo", 11122233390);


const contaCorrenteDoRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1002);

// console.log(conta);

