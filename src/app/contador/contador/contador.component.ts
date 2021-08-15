import { Component } from '@angular/core'


@Component({
    selector : 'primer-componente',
    template : ` 
        <h1> {{ title }} - Master en Angular 0 - 100 / Primer Componente  </h1>
        <h2>

        <strong> {{ numero }} </strong>
        
        </h2> 

        <button class="btn btn-primary" (click) = " operacion ( base )" > {{ base }} </button>
        <br>
        <button class="btn btn-primary" (click) = " operacion ( -base ) "> {{ base }} </button>

    `
})
export class ContadorComponent {

    //  Constantes -> 
    title : String = ' Contandor APP ';
    numero : number = 10;
    base : number = 5

    operacion ( valor : number) {

        this.numero += valor;

    }
}