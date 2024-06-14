// Un módulo no es mas que un contenedor que junta código con funcionamiento en común.
// Cuando se trabaja em módulos, estos son visibles únicamente dentro del módulo per sé.

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
    declarations: [CounterComponent],
    exports: [CounterComponent] // Indica que componentes pueden ser consumidos fuera de este módulo.
})
export class CounterModule{}