import { Cliente } from "./Cliente.js";

export class ContaCorrente {

  static numeroDeContas = 0;

  sacar(valor) { //função = metodo
    taxa = 1.1 * valor;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }

  }

  depositar(valor) { // função = método

    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {

    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

  }
}
