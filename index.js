import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";


// eles fazem parte da conta corrente onde foi feito os construtores
const cliente1 = new Cliente("Ricardo", 11122233390);


const contaCorrenteDoRicardo = new Conta("corrente", 100, cliente1, 1001);
contaCorrenteDoRicardo.depositar(500);
contaCorrenteDoRicardo.sacar(100);

const contaPoupanca = new Conta("poupança", 50 , cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteDoRicardo);


