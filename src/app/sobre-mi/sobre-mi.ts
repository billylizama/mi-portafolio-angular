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
  habilidades: string[] = ['Angular', 'TypeScript', 'JavaScript', 'Git & GitHub', 'SQL', 'Node.js'];
  // El "Estado": ¿se muestra el contacto o no?
mostrarContacto: boolean = false;

// La "Acción": una función para cambiar el estado
alternarContacto() {
  this.mostrarContacto = !this.mostrarContacto;
}
}
