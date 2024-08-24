import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  @Output() resultado = new EventEmitter<number>();
  @Output() limpiarInputs = new EventEmitter<void>();

  realizarOperacion(operacion: string) {
    let result = 0;
    switch (operacion) {
      case 'sumar':
        result = this.valor1 + this.valor2;
        break;
      case 'restar':
        result = this.valor1 - this.valor2;
        break;
      case 'multiplicar':
        result = this.valor1 * this.valor2;
        break;
      case 'dividir':
        if(this.valor2 == 0) {
          result = 0;
          break;
        }
        result = this.valor1 / this.valor2;
        break;
      case 'potencia':
        result = Math.pow(this.valor1, this.valor2);
        break;
      case 'raiz':
        result = Math.pow(this.valor1, 1 / this.valor2);
        break;
    }
    this.resultado.emit(result);
  }

  limpiar() {
    this.resultado.emit(0);
    this.limpiarInputs.emit();
  }
}
