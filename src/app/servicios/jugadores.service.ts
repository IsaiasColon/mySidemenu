import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJugador } from '../_models/jugador';
import { environment } from "src/environments/environment";
import { IArticulo } from "src/app/_models/articulo.model";

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private api: string = 'https://localhost:44324/api/Jugadores/';

  constructor( private http: HttpClient ) { }
  
  entrarEnSala(jugador: IJugador): Observable<IJugador>{
    // console.log(jugador);
    return this.http.post<IJugador>(this.api + 'Entrar', jugador.id);
  }

  gets(): Observable<IJugador[]>{
    return this.http.get<IJugador[]>(this.api + 'Listar');
  }

  getJugador(id): Observable<IJugador[]>{
    return this.http.get<IJugador[]>(this.api + 'Mostrar/' + id);
  }

  login(nickName): Observable<IJugador>{
    return this.http.get<IJugador>(this.api + 'Login/' + nickName);
  }

  crearJugador(jugador: IJugador): Observable<IJugador> {
    return this.http.post<IJugador>(this.api + 'Crear', jugador);
  }

  editarJugador(jugador: IJugador): Observable<IJugador> {
    return this.http.put<IJugador>(this.api + 'Actualizar', jugador);
  }

  eliminarJugador(jugador){
    return this.http.delete<IJugador>(this.api + 'Eliminar/' + jugador);
  }

  activar(jugador){
    return this.http.put(this.api + 'Activar/' + jugador, jugador);
  }

  desactivar(jugador){
    return this.http.put(this.api + 'Desactivar/' + jugador, jugador);
  }
  
}
