import { Injectable, OnInit } from '@angular/core';
import { IJuego } from '../_models/juego';
import { IJugador } from '../_models/jugador';
import { ITabla } from '../_models/tabla';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public usuarioConectado: IJugador;
  private tablas: ITabla[] = [];
  private juego: IJuego;
  
  constructor() { }

  obtenerUsuarioConectado() {
    if (localStorage.getItem("usuarioConectado")) {
      this.usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));     
      return this.usuarioConectado; 
    }else {
      console.log("No ha iniciado sesion");      
    }
  }

  guardarUsuarioConectado(usuario: IJugador){
    localStorage.setItem( "usuarioConectado", JSON.stringify( usuario ) );
  }

  borrarUsuarioConectado(){
    localStorage.removeItem( "usuarioConectado" );
    this.usuarioConectado = null;
  }

  obtenerTablas(){    
    this.tablas = JSON.parse(localStorage.getItem("tablas"));
    if (this.tablas) {
      // console.log(this.tablas);
      return this.tablas;
    }else {
      console.log("No se han seleccionado tablas");      
    }
  }

  guardarTablas(tablas: ITabla[]){    
    localStorage.setItem( "tablas", JSON.stringify( tablas ) );
  }

  borrarTablas(){
    localStorage.removeItem( "tablas" );
  }

  obtenerJuego(){    
    this.juego = JSON.parse(localStorage.getItem("juego"));
    if (this.juego) {
      // console.log(this.Juego);
      return this.juego;
    }else {
      console.log("No se han seleccionado Juego");      
    }
  }

  guardarJuego(Juego: IJuego){    
    localStorage.setItem( "juego", JSON.stringify( Juego ) );
  }

  borrarJuego(){
    localStorage.removeItem( "juego" );
  }

  obtenerTablasSeleccionadas(){    
    this.tablas = JSON.parse(localStorage.getItem("tablas-seleccionadas"));
    if (this.tablas) {
      // console.log(this.tablas);
      return this.tablas;
    }else {
      console.log("No se han seleccionado tablas");      
    }
  }

  guardarTablasSeleccionadas(tablas: ITabla[]){    
    localStorage.setItem( "tablas-seleccionadas", JSON.stringify( tablas ) );
  }

  borrarTablasSeleccionadas(){
    localStorage.removeItem( "tablas-seleccionadas" );
  }
}
