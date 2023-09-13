import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NumberDisplayComponentComponent } from '../number-display-component/number-display-component.component';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {
  public enviar!: boolean
  public numeroAleatorio!: any

  constructor(private dataService: DataServiceService) { }

  atualizar() {
    this.enviar = true
    this.numeroAleatorio = this.dataService.addNumeros()
    console.log(this.numeroAleatorio); 
  }
}
