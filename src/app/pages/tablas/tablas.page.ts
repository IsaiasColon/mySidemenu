import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable,  } from 'rxjs';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { TablasService } from 'src/app/servicios/tablas.service';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tablas-page',
  templateUrl: './tablas.page.html',
  styleUrls: ['./tablas.page.scss'],
})
export class TablasPage implements OnInit {

  tablasSeleccionadas: ITabla[] = [];
  tablas: Array<ITabla>;

  constructor(
    public localstorage: LocalStorageService,
    private tablasService: TablasService
  ) { }

  ngOnInit() {
    this.obtenerTablas(this.localstorage.usuarioConectado.id);
    console.log(JSON.parse(localStorage.getItem('tablas')));
    
  }

  obtenerTablas(jugador: number){

    this.tablasService.getsByJugador(jugador).subscribe( (tablas:ITabla[]) => {
      this.tablas = tablas;
      console.log(this.tablas);
    });

  }

  // seleccionarTabla(tabla: ITabla){
  //   if (tabla) {
  //    if ( this.tablasSeleccionadas.find(element => element == tabla)) {
  //      this.tablasSeleccionadas.splice(this.tablas.indexOf(tabla));
       
  //    } else{
  //      this.tablasSeleccionadas.push(tabla);
  //    }
  //   }
    
  //   this.localstorage.guardarTablas(this.tablasSeleccionadas);
  //   console.log(this.tablasSeleccionadas);
    
  // }

}
