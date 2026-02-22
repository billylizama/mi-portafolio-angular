import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private listaProyectos = [
    {
      titulo: 'Abigail Fotografía',
      desc: 'Portafolio profesional para fotógrafa hecho en HTML/CSS.',
      link: 'https://billylizama.github.io/AbigailLizamaFotografia/'
    },
    {
      titulo: 'TaskMaster Angular',
      desc: 'Aplicación profesional creada con Angular 19 y Git Flow.',
      link: 'https://billylizama.github.io/mi-portafolio-angular/'
    },
    {
      titulo: 'Generador de Facturas',
      desc: 'Lógica avanzada de JavaScript para gestión de cobros.',
      link: '#'
    }
  ];

  constructor() { }

  obtenerProyectos() {
    return this.listaProyectos;
  }
}