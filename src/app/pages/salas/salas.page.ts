import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TablasComponent } from 'src/app/components/salas/tablas/tablas.component';
import { SalasService } from 'src/app/servicios/salas.service';
import { ISala } from 'src/app/_models/sala';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {

  salas: ISala[];

  constructor(
    private salasService: SalasService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.salasService.gets().subscribe( salas => {
      console.log({salas});
      
      this.salas = salas;
    })
  }

  async verTablas(sala) {
    const modal = await this.modalCtrl.create({
      component: TablasComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'sala': `${sala}`
      }
      
    });
    
    return await modal.present();
  }

  async entrarEnSala(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Selecciona tus tablas',
      message: `<app-tabla></app-tabla>`,
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

}
