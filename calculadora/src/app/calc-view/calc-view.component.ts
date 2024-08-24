import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent, FormsModule],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  actualizarResultado(res: number) {
    this.resultado = res;
  }

  limpiarValores() {
    this.valor1 = 0;
    this.valor2 = 0;
  }
}
