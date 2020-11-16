import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SalasService } from 'src/app/servicios/salas.service';
import { SignalrService } from 'src/app/servicios/signalr.service';
import { IJuego } from 'src/app/_models/juego';
import { IJugador } from 'src/app/_models/jugador';
import { ISala } from 'src/app/_models/sala';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss'],
})
export class SalaPage implements OnInit {

  jugadores: any[] = [];
  // jugadores: IJugador[] = [];
  tablas: ITabla[] = [];
  jugador: IJugador;
  sala: ISala;
  conteo: number = 20;
  juego: IJuego;
  cartasLanzadas: number[] = [];

  constructor(
    private activated: ActivatedRoute,
    private localStorage: LocalStorageService,
    private salasServices: SalasService,
    private signalr: SignalrService
  ) { }

  ngOnInit() {
    const id = this.activated.snapshot.url.values();
    console.log(id);
    this.tablas = this.localStorage.obtenerTablasSeleccionadas();

    // this.getSala( id );
    
    this.misTablas();

    this.signalr.emNotifica.subscribe( resp =>{
      this.jugadores.push(resp);
    });

    this.signalr.emNotificaJuego.subscribe( (resp: IJuego) =>{
      console.log(resp);
      this.juego = resp;
      console.log(this.juego);
      
      // this.tablas.forEach(tabla => {        
      //   this.crearTablaJugada(tabla, this.juego);
      // });

    });

    this.entrarSala();

    
    this.signalr.emNotificaCarta.subscribe( (carta ) =>{
      console.log(carta);
        // this.cartasLanzadas.push(carta.numero);
        // this.speechCarta(carta.name);

    });
  }

  misTablas(){
    this.tablas = this.localStorage.obtenerTablasSeleccionadas();
    console.log(this.tablas);    
  }

  entrarSala(){
    this.jugador = this.localStorage.obtenerUsuarioConectado() as IJugador;
    this.signalr.entrarEnSala(this.jugador).subscribe( resp =>{
      console.log(resp);
      
    });
  }

}
