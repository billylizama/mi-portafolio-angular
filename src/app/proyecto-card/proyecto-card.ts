import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css',
})
export class ProyectoCardComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() enlace: string = '';
  @Input() techs: string[] = [];
}
