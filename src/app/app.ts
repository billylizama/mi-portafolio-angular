import { Component, signal, inject, OnInit } from '@angular/core'; // 1. Añadimos inject y OnInit
import { RouterOutlet } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi';
import { ProyectoCardComponent } from './proyecto-card/proyecto-card';
import { ProyectosService } from './services/proyectos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreMiComponent, ProyectoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // 2. "implements OnInit" dice que haremos algo al cargar
  
  // 3. Usamos un Signal para que la pantalla se actualice sola al llegar los datos
  misProyectos = signal<any[]>([]); 
  
  // 4. Inyectamos el servicio
  private proyectosService = inject(ProyectosService);

  ngOnInit() {
    // 5. Llamamos a la API apenas cargue la página
    this.proyectosService.obtenerProyectosDesdeAPI().subscribe({
      next: (data) => {
        // 6. Cuando los datos llegan, los guardamos en el Signal
        this.misProyectos.set(data);
        console.log('Datos recibidos de la API:', data);
      },
      error: (err) => console.error('Error al traer datos de la API', err)
    });
  }
}