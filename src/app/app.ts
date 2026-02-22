import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi';
import { ProyectoCardComponent } from './proyecto-card/proyecto-card';
import { ProyectosService } from './services/proyectos'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreMiComponent,ProyectoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  misProyectos: any[] = [];
  constructor(private proyectosService: ProyectosService) {
    this.misProyectos = this.proyectosService.obtenerProyectos();
  }
  protected readonly title = signal('mi-portafolio-angular');
  
}
