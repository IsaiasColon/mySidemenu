import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarta } from "../_models/carta";

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  url = "https://localhost:44324/api/Cartas/";

  constructor( private http: HttpClient ) { }

  gets(): Observable<ICarta[]>{
    return this.http.get<ICarta[]>(this.url + 'Listar');
  }

  getCarta(id): Observable<ICarta[]>{
    return this.http.get<ICarta[]>(this.url + 'Mostrar/' + id);
  }

  getCartasByTabla(id): Observable<number[]>{
    return this.http.get<number[]>(this.url + 'CartasTablaList/' + id);
    // return this.http.get<ICarta[]>(this.url + 'ListarByTabla/' + id);
  }

  GenerarCartas(id){
    return this.http.post(this.url + 'GenerarCartas/' + id, '');
  }

  crearCarta(carta: ICarta): Observable<ICarta> {
    return this.http.post<ICarta>(this.url + 'Crear', carta);
  }

  editarCarta(carta: ICarta): Observable<ICarta> {
    return this.http.put<ICarta>(this.url + 'Actualizar', carta);
  }

  eliminarCarta(id){
    return this.http.delete<ICarta>(this.url + 'Eliminar/' + id);
  }

  activar(id){
    return this.http.put(this.url + 'Activar/' + id, '');
  }

  desactivar(id){
    return this.http.put(this.url + 'Desactivar/' + id, '');
  }

  actualizarTabla(tablas, id) {
    return this.http.put(this.url + 'ActualizarCartas/' + id, tablas);
  }
}
