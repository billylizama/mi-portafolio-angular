import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi';
@Component({
  selector: 'app-root',
  imports: [SobreMiComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-portafolio-angular');
}
