import { Component, OnInit } from '@angular/core';
import { Observable,  } from 'rxjs';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { TablasService } from 'src/app/servicios/tablas.service';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.page.html',
  styleUrls: ['./tablas.page.scss'],
})
export class TablasPage implements OnInit {

  tablas: Array<ITabla>;

  constructor(
    public localstorage: LocalStorageService,
    private tablasService: TablasService
  ) { }

  ngOnInit() {
    this.obtenerTablas(this.localstorage.usuarioConectado.id);
  }

  obtenerTablas(jugador: number){

    this.tablasService.getsByJugador(jugador).subscribe( (tablas:ITabla[]) => {
      this.tablas = tablas;
      console.log(this.tablas);
    });

  }

}
