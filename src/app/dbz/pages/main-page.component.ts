import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class DbzComponent{

    // Al poner any indica que desconocemos el tipo de dato, ahí es donde hay que definir interfaces.

    constructor(private dbZService: DbzService){}

    get characters(): Character[]{
        return [...this.dbZService.characters];               
    }
    
    onDeleteCharacter(id: string): void{
        this.dbZService.deleteCharacterById(id)
    }

    onNewCharacter(character: Character): void{
        this.dbZService.addCharacter(character);
    }
}