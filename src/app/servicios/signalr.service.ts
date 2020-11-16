import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { Observable } from 'rxjs';
import { IArticulo } from '../_models/articulo.model';
import { IJuego } from '../_models/juego';
import { IJugador } from '../_models/jugador';


@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public hubConnection : HubConnection;
  emNotifica: EventEmitter<any> = new EventEmitter();
  emNotificaJuego: EventEmitter<IJuego> = new EventEmitter();
  emNotificaCarta: EventEmitter<number> = new EventEmitter();
  // emIniciarJuego: EventEmitter<boolean> = new EventEmitter();

  url = "https://localhost:44324/api/Hubs/";

  constructor(private http: HttpClient) { 
    // console.log("Inicio el servicio SingalR");
    let builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl('https://localhost:44324/hub/oLoteria').build();

    this.hubConnection.on("enviartodos", (mensaje) =>{
      console.log(mensaje);
      let art: IArticulo = JSON.parse(mensaje);
      this.emNotifica.emit(art);
    });

    this.hubConnection.on("prueba", (mensaje) =>{
      console.log(mensaje);
      let art: IArticulo = JSON.parse(mensaje);
      this.emNotifica.emit(art);
    });
    
    this.hubConnection.on("enviarjuego", (resp) =>{
      console.log(resp);
      let juego: IJuego = JSON.parse(resp);
      this.emNotificaJuego.emit(juego);
    });

    this.hubConnection.on("lanzarcarta", (resp) =>{
      // console.log(resp);
      let carta = JSON.parse(resp);
      this.emNotificaCarta.emit(carta);
    });
    
    // this.hubConnection.on("iniciarjuego", (resp) =>{
    //   console.log(resp);
    //   let juego: IJuego = JSON.parse(resp);
    //   this.emNotificaJuego.emit(juego);
    // });

    this.hubConnection.start();
  }

  entrarEnSala(jugador: IJugador): Observable<IJugador>{
    // console.log(jugador);
    return this.http.post<IJugador>(this.url + 'Entrar', jugador);
  }

  prueba(user){
    console.log("User en Signalr: " + user);
    let mensaje: string = JSON.stringify(user);
    
    this.hubConnection.invoke("NotificarTodos", mensaje);
  }

  enviarJuego(juego: IJuego): Observable<IJuego>{
    return this.http.post<IJuego>(this.url + 'EnviarJuego', juego);
  }

  enviarCarta(carta){
    console.log("Mandar Carta en Signalr: " + carta);
    carta = JSON.stringify(carta);
    
    this.hubConnection.invoke("LanzarCarta", carta);
  }
}
