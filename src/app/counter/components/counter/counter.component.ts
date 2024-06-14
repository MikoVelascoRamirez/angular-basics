import { Component } from '@angular/core';

@Component({
  selector: 'app-counter', // Indica como vamos a usar el componente
  template: `<h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(2)">+2</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button> `, // Indica cual es el template asociado.
})
export class CounterComponent {

    public counter: number = 10;

    increaseBy(value: number){
        this.counter += value;
    }

    resetCounter(){
        this.counter = 10;
    }
}
