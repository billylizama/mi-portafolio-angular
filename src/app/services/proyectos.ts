import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  // 1. Inyectamos el "teléfono" para hablar con internet
  private http = inject(HttpClient); 
  
  // 2. Esta es la dirección del servidor (API)
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

  // 3. Este método devuelve un "Observable" (un flujo de datos que llegará en el futuro)
  obtenerProyectosDesdeAPI(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}