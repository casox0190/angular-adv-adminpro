import { Component } from '@angular/core';


@Component({
  selector: 'app-examplengmodel',
  template: `
    <div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">
      <p (click)="isActive">Hola Mundo</p>
    </div>
  `,
  styles: [
    `
    .active {
      background-color: green;
    }

    .disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    `
  ]
})
export class ExamplengmodelComponent {
  isActive = true;
  isDisabled = false;
}
