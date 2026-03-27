import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMiComponent {
  descripcion =
    'Desarrollo aplicaciones web completas de principio a fin. En el frontend construyo interfaces modernas con Angular y TypeScript; en el backend diseño APIs y gestiono bases de datos con Python, Flask y SQL. Me enfoco en código limpio, arquitecturas escalables y soluciones que generan impacto real.';

  skills: { categoria: string; items: string[] }[] = [
    { categoria: 'Frontend', items: ['Angular 21', 'TypeScript', 'JavaScript', 'HTML5 & CSS3'] },
    { categoria: 'Backend', items: ['Python', 'Flask', 'Node.js', 'REST APIs'] },
    { categoria: 'Base de Datos', items: ['SQL', 'MySQL', 'PostgreSQL'] },
    { categoria: 'Herramientas', items: ['Git & GitHub', 'Git Flow', 'VS Code', 'npm'] },
  ];

  stats = [
    { value: '4+', label: 'Proyectos completados' },
    { value: '2+', label: 'Años de práctica' },
    { value: '100%', label: 'Compromiso y calidad' },
  ];
}
