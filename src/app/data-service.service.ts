import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public numeros!: number[]

  constructor() {
    this.numeros = []
  }

  public addNumeros() {
    let novoNumero = this.gerarNumerosAleatorios(1, 100);
    this.numeros.push(novoNumero);
  }

  public getValoresAleatorios() {
    return this.numeros
  }

  public gerarNumerosAleatorios(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
