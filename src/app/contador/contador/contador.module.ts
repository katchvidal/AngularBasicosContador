import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core'
import { ContadorComponent } from './contador.component';




@NgModule({
 
    declarations : [

        //  Componentes y Pipes que contiene este modulo
        ContadorComponent

    ],

    imports : [
        CommonModule
    ],

    exports : [
        //  Exportamos Los Modulos Declarados
        ContadorComponent
    ]
    

})
export class ContadorModule {

}