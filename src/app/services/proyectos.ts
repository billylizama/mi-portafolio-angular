import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private listaProyectos = [
    {
      titulo: 'EPG Sistema',
      desc: 'Sistema web de gestión de presupuestos y planillas para una Escuela de Posgrado de la UNP. Automatiza procesos administrativos críticos con reportes dinámicos.',
      link: 'https://github.com/billylizama/epg-sistema',
      techs: ['Python', 'Flask', 'SQL', 'HTML & CSS'],
    },
    {
      titulo: 'Abigail Fotografía',
      desc: 'Portafolio profesional para fotógrafa con galería optimizada, diseño responsivo y enfoque en la experiencia visual del usuario.',
      link: 'https://billylizama.github.io/AbigailLizamaFotografia/',
      techs: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      titulo: 'Portafolio Personal',
      desc: 'Este portafolio — construido con Angular 21, componentes standalone, arquitectura de servicios y Git Flow. Desplegado en GitHub Pages.',
      link: 'https://github.com/billylizama/mi-portafolio-angular',
      techs: ['Angular 21', 'TypeScript', 'CSS3'],
    },
  ];

  obtenerProyectos() {
    return this.listaProyectos;
  }
}
