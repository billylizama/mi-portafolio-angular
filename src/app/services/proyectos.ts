import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private listaProyectos = [
    {
      titulo: 'EPG Sistema',
      desc: 'Sistema web de gestión de presupuestos y planillas para una Escuela de Posgrado. Desarrollado con Python y Flask.',
      link: 'https://github.com/billylizama/epg-sistema'
    },
    {
      titulo: 'Abigail Fotografía',
      desc: 'Portafolio profesional para fotógrafa desarrollado en HTML y CSS.',
      link: 'https://billylizama.github.io/AbigailLizamaFotografia/'
    },
    {
      titulo: 'TaskMaster Angular',
      desc: 'Aplicación de gestión de tareas desarrollada con Angular 21 aplicando Git Flow.',
      link: 'https://billylizama.github.io/mi-portafolio-angular/'
    },
    {
      titulo: 'Generador de Facturas',
      desc: 'Aplicación de lógica avanzada en JavaScript para gestión de cobros. En construcción.',
      link: '#'
    }
  ];

  obtenerProyectos() {
    return this.listaProyectos;
  }
}
