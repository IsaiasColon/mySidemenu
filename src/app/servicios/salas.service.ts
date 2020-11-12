import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISala } from "../_models/sala";

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  url = "https://localhost:44324/api/Salas/";

  constructor( private http: HttpClient ) { }

  gets(): Observable<ISala[]>{
    return this.http.get<ISala[]>(this.url + 'Listar');
  }

  getSala(id): Observable<ISala>{
    return this.http.get<ISala>(this.url + 'Mostrar/' + id);
  }

  crearSala(sala: ISala): Observable<ISala> {
    return this.http.post<ISala>(this.url + 'Crear', sala);
  }

  editarSala(sala: ISala): Observable<ISala> {
    return this.http.put<ISala>(this.url + 'Actualizar', sala);
  }

  eliminarSala(id){
    return this.http.delete<ISala>(this.url + 'Eliminar/' + id);
  }

  activar(id){
    return this.http.put(this.url + 'Activar/' + id, '');
  }

  desactivar(id){
    return this.http.put(this.url + 'Desactivar/' + id, '');
  }
}
