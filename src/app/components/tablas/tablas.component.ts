import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { TablasService } from 'src/app/servicios/tablas.service';
import { IJugador } from 'src/app/_models/jugador';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
})
export class TablasComponent implements OnInit {

  @Input() sala: number;

  tablasSeleccionadas: ITabla[] = [];
  @Input() tablas: Array<ITabla>;
  jugador: IJugador;

  @Output() newItemEvent = new EventEmitter<ITabla[]>();

  addNewItem(value: ITabla[]) {
    this.newItemEvent.emit(value);
  }

  constructor(
    private tablasService: TablasService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    console.log(this.sala);
    
    // this.obtenerTablas(this.localStorage.usuarioConectado.id);
    // console.log(JSON.parse(localStorage.getItem('tablas')));
    
  }

  obtenerTablas(jugador: number){

    this.tablasService.getsByJugador(jugador).subscribe( (tablas:ITabla[]) => {
      this.tablas = tablas;
      console.log(this.tablas);
    });

  }

  // ngOnInit() {
  //   console.log(this.localStorage.obtenerTablas());
  //   this.tablasSeleccionadas = this.localStorage.obtenerTablas();
  //   console.log(this.sala);
  //   this.jugador = this.localStorage.obtenerUsuarioConectado();
  //   this.tablasService.getsByJugador(this.jugador.id).subscribe( tablas => {
  //     this.tablas = tablas;
  //     console.log(tablas);      
  //   })
  // }

  getTablas(sala){
    
  }

  seleccionarTabla(tabla: ITabla){
    console.log(tabla);
    if (tabla) {
      
      if (this.tablasSeleccionadas.includes(tabla)) {        
        this.tablasSeleccionadas.splice(this.tablasSeleccionadas.indexOf(tabla), 1);
      } else{
        this.tablasSeleccionadas.push(tabla);
      }

    } else{
      return;
    }
    console.log(this.tablasSeleccionadas);
    this.addNewItem(this.tablasSeleccionadas);
  }

}
