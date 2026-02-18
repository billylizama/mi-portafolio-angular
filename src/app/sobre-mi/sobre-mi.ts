import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMiComponent {
 nombre: string = 'Billy Lizama';
  profesion: string = 'Desarrollador Frontend';
  descripcion: string = 'Especializándome en Angular 19 para crear soluciones web de alto impacto.';
}
