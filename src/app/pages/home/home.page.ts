import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SalasService } from 'src/app/servicios/salas.service';
import { ISala } from 'src/app/_models/sala';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    private salasService: SalasService
    ) { }

  ngOnInit() {
  }

  async agregarSala(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva sala',
      inputs:[
        { name: 'nombre', type:'text', placeholder: 'Nombre de la sala' }
      ],
      buttons: [
        { 
          text:'Cancel', 
          role: 'cancel', 
          handler: () =>{
          console.log('Cancelar');
          } 
        },
        {
          text: 'Crear',
          handler: (data: ISala) =>{
            console.log(data);      
            if (data.nombre.length === 0) {
              return;
            }

            // Crear la Sala
            // const salasId = this.salasService.crearSala();
            // this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);

          }
        }
      ]
    });

    alert.present();
  }

  verTablas(){
    this.router.navigateByUrl('tablas');
  }

  verSalas(){
    this.router.navigateByUrl('salas');
  }

}
