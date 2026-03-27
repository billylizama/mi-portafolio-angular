import { Component, signal, HostListener } from '@angular/core';
import { SobreMiComponent } from './sobre-mi/sobre-mi';
import { ProyectoCardComponent } from './proyecto-card/proyecto-card';
import { ProyectosService } from './services/proyectos';

@Component({
  selector: 'app-root',
  imports: [SobreMiComponent, ProyectoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  misProyectos: any[] = [];
  navScrolled = false;

  constructor(private proyectosService: ProyectosService) {
    this.misProyectos = this.proyectosService.obtenerProyectos();
  }

  protected readonly title = signal('mi-portafolio-angular');

  @HostListener('window:scroll')
  onScroll() {
    this.navScrolled = window.scrollY > 60;
  }
}
