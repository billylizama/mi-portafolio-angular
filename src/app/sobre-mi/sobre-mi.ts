import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMiComponent {
  descripcion =
    'Apasionado por construir experiencias web modernas, accesibles y de alto rendimiento. Me especializo en arquitecturas Angular escalables y código limpio que sea fácil de mantener y escalar.';

  skills: { categoria: string; items: string[] }[] = [
    { categoria: 'Frontend', items: ['Angular 21', 'TypeScript', 'JavaScript', 'HTML5 & CSS3'] },
    { categoria: 'Herramientas', items: ['Git & GitHub', 'Git Flow', 'VS Code', 'npm'] },
    { categoria: 'Backend / DB', items: ['Node.js', 'Python', 'Flask', 'SQL'] },
  ];

  stats = [
    { value: '4+', label: 'Proyectos completados' },
    { value: '2+', label: 'Años de práctica' },
    { value: '100%', label: 'Compromiso y calidad' },
  ];
}
