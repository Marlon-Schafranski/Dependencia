import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent {
  numerosAleatorios: number[] = [];

  constructor(private dataService: DataServiceService) {}

  adicionarNumero() {
    this.dataService.addNumeros();
    this.numerosAleatorios = this.dataService.getValoresAleatorios();
  }
}
