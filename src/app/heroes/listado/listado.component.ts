import { Component, OnInit } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string[] = [ 'Spiderman', 'Batman', 'Naruto', 'Capitan America' , 'Sasuke']
  //  Crear Propiedad -> Para poder Recibir lo que Arroge un Metodo
  heroeBorrado : string = ""

  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
