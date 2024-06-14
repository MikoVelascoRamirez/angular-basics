import { Component } from '@angular/core';

// Component define el selector, el html y los estilos
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // Propiedades
  public name: string = 'iron Man';
  public age:  number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {    
    return `${this.name} - ${this.age}`
  }

  changeHero(name: string): void {
    this.name = name;
  }

  changeAge(age: number) : void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'iron man';
    this.age = 45;

    // Esto esta fuera del ciclo de detección de Angular.
    /* document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    }) */
  }
}
