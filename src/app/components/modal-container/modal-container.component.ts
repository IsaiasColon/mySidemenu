import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { TablasService } from 'src/app/servicios/tablas.service';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent implements OnInit {

  tablasSeleccionadas: ITabla[] = [];
  tablas: Array<ITabla>;

  @Input() sala: number;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    private localStorage: LocalStorageService,
    private tablasService: TablasService
    ) { }

  ngOnInit() {
    this.obtenerTablas(this.localStorage.usuarioConectado.id);
  }

  obtenerTablas(jugador: number){

    this.tablasService.getsByJugador(jugador).subscribe( (tablas:ITabla[]) => {
      this.tablas = tablas;
      console.log(this.tablas);
    });

  }

  addItem(tablas: ITabla[]){
    console.log(tablas);
    this.tablasSeleccionadas = tablas;
  }

  guardarTablas(){
    this.dismiss();
    this.localStorage.guardarTablasSeleccionadas(this.tablasSeleccionadas);
    this.router.navigateByUrl(`salas/${this.sala}`);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
