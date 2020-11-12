import { Component, Input, OnInit } from '@angular/core';
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
  tablas: ITabla[] = [];
  jugador: IJugador;

  constructor(
    private tablasService: TablasService,
    private localStorage: LocalStorageService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.localStorage.obtenerTablas());
    this.tablasSeleccionadas = this.localStorage.obtenerTablas();
    console.log(this.sala);
    this.jugador = this.localStorage.obtenerUsuarioConectado();
    this.tablasService.getsByJugador(this.jugador.id).subscribe( tablas => {
      this.tablas = tablas;
      console.log(tablas);
      
    })
  }

  getTablas(sala){

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
