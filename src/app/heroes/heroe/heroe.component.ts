import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{

    nombre : String = 'Iron Man'
    edad : number = 45

    getHeroe ( ) : string {

        return ` ${ this.nombre } - ${ this.edad } `

    }

    nombreCapitalizado () : string {

        return this.nombre.toUpperCase()
    }

    cambiarHeroe() : string {
        return this.nombre = 'Spiderman'
    }

    cambiarEdad () : number {
        return this.edad = 40
    }
}

