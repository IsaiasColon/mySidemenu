import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { JugadoresService } from './servicios/jugadores.service';
import { LocalStorageService } from './servicios/local-storage.service';
import { IJugador, JugadorConectado } from 'src/app/_models/jugador';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public usuario: IJugador = JugadorConectado;
  public appPages = [
    {
      title: 'Inicio',
      url: 'home',
      icon: 'mail'
    },
    {
      title: 'Configuraciones',
      url: 'config',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertCtrl: AlertController,
    private jugadoresService: JugadoresService,
    public localStorage: LocalStorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.localStorage.obtenerUsuarioConectado();
  }

  async login(){
    // this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar Sesion',
      inputs:[
        { name: 'nickName', type:'text', placeholder: 'user' }
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
          text: 'Login',
          handler: (data) =>{
            console.log(data);      
            if (data.nickName.length === 0) {
              return;
            }
            // Iniciar Sersion
            this.jugadoresService.login(data.nickName).subscribe( (user: IJugador) => {
              
              this.usuario = user;
              if (this.usuario) {
                this.localStorage.guardarUsuarioConectado(user);
              }
            });
          }
        }
      ]
    });

    alert.present();
  }

  logout(){
    this.localStorage.borrarUsuarioConectado();
    this.usuario = null;
  }
}
