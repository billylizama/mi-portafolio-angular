import { Component, Input } from '@angular/core'; // Importamos Input

@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css'
})
export class ProyectoCardComponent {
  // Estas son las "puertas" por donde entrarán los datos desde afuera
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() enlace: string = '';
}