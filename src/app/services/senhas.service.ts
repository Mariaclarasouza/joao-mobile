import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  // Variáveis públicas para armazenar contagens de senhas
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  constructor() { }

  // Método para incrementar a contagem de senhas gerais
  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  // Método para incrementar a contagem de senhas prioritárias
  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  // Método para incrementar a contagem de senhas de exame
  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }
}
