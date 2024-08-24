import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcActionsComponent } from "./calc-actions/calc-actions.component";
import { CalcViewComponent } from "./calc-view/calc-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcActionsComponent, CalcViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
