import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITabla } from "../_models/tabla";

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  url = "https://localhost:44324/api/Tablas/";

  constructor( private http: HttpClient ) { }

  gets(): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.url + 'Listar');
  }

  getsByJugador(id): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.url + 'MostrarByJugador/' + id);
  }

  getTabla(id): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.url + 'Mostrar/' + id);
  }

  crearTabla(tabla: ITabla): Observable<ITabla> {
    return this.http.post<ITabla>(this.url + 'Crear', tabla);
  }

  editarTabla(tabla: ITabla): Observable<ITabla> {
    return this.http.put<ITabla>(this.url + 'Actualizar', tabla);
  }

  eliminarTabla(id){
    return this.http.delete<ITabla>(this.url + 'Eliminar/' + id);
  }

  activar(id){
    return this.http.put(this.url + 'Activar/' + id, '');
  }

  desactivar(id){
    return this.http.put(this.url + 'Desactivar/' + id, '');
  }
}
