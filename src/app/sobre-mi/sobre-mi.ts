import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMiComponent {
  descripcion =
    'Desarrollador de Software enfocado en el ecosistema JavaScript y TypeScript. Experiencia comprobada optimizando procesos internos y gestionando bases de datos SQL en entornos reales. Especialista en crear soluciones escalables con Angular, mentalidad ágil y sólido control de versiones con Git & GitHub.';

  experiencia = [
    {
      cargo: 'Software Developer · Fullstack Web Engineer',
      empresa: 'Posgrado de la Universidad Nacional de Piura',
      periodo: 'Enero 2026 — Presente',
      descripcion:
        'Lidero el ciclo completo de desarrollo (End-to-End) del portal institucional con Angular y TypeScript como único responsable técnico. Automaticé procesos administrativos críticos y administro bases de datos SQL garantizando seguridad, integridad y escalabilidad.',
      techs: ['Angular 21', 'TypeScript', 'SQL', 'HTML & CSS'],
    },
    {
      cargo: 'Asistente de Soporte / Desarrollo Junior',
      empresa: 'RAPEL S.A.C',
      periodo: 'Sep 2025 — Dic 2025',
      descripcion:
        'Optimicé interfaces interactivas con HTML5/CSS3 y automaticé validaciones complejas con JavaScript. Diseñé consultas SQL avanzadas para extracción de métricas gerenciales y resolví incidencias críticas de lógica de negocio.',
      techs: ['JavaScript', 'HTML5', 'CSS3', 'SQL'],
    },
    {
      cargo: 'Auxiliar de Gestión Humana / Desarrollo Interno',
      empresa: 'ECOSACAGRICOLAS S.A.C',
      periodo: 'Feb 2025 — Sep 2025',
      descripcion:
        'Digitalicé el proceso de contratación masiva mediante aplicaciones web, reduciendo la carga operativa manual de RR.HH. Programé scripts en JavaScript para validación de datos de postulantes en tiempo real.',
      techs: ['JavaScript', 'HTML5', 'CSS3'],
    },
    {
      cargo: 'Practicante Profesional de Desarrollo de Software',
      empresa: 'Universidad Nacional de Piura',
      periodo: 'Abr 2024 — Jul 2024',
      descripcion:
        'Desarrollé dashboards dinámicos para el monitoreo de métricas institucionales mediante limpieza y estructuración de datos en SQL. Implementé componentes frontend para el registro administrativo bajo estándares modernos.',
      techs: ['SQL', 'JavaScript', 'HTML5', 'CSS3'],
    },
  ];

  educacion = {
    titulo: 'Bachiller en Ingeniería Informática',
    institucion: 'Universidad Nacional de Piura',
    periodo: 'Marzo 2018 — Febrero 2025',
  };

  certificaciones = [
    { nombre: 'Programación Web con JavaScript (Frontend)', estado: '2025' },
    { nombre: 'Introducción al Desarrollo de Software', estado: '2025' },
    { nombre: 'Especialización en Power BI Avanzado', estado: '2025' },
    { nombre: 'Especialización en Excel Avanzado', estado: '2025' },
    { nombre: 'Introducción a la Ciberseguridad', estado: '2024' },
  ];

  skills: { categoria: string; items: string[] }[] = [
    { categoria: 'Frontend', items: ['Angular 21', 'TypeScript', 'JavaScript ES6+', 'HTML5 & CSS3'] },
    { categoria: 'Backend', items: ['Python', 'Flask', 'Node.js', 'REST APIs'] },
    { categoria: 'Base de Datos', items: ['SQL Server', 'MySQL', 'PostgreSQL'] },
    { categoria: 'Herramientas', items: ['Git & GitHub', 'Git Flow', 'GitHub Pages', 'VS Code'] },
    { categoria: 'Habilidades Blandas', items: ['Autogestión', 'Resolución de problemas', 'Trabajo en equipo', 'Aprendizaje rápido'] },
  ];

  stats = [
    { value: '4', label: 'Empresas' },
    { value: '2+', label: 'Años de experiencia' },
    { value: '5+', label: 'Certificaciones' },
  ];
}
