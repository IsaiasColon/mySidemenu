import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartasService } from 'src/app/servicios/cartas.service';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {

  @Input() tabla: Observable<number>;
  cartas:number[] = [];

  constructor(
    private _cs: CartasService
  ) { }

  ngOnInit() {    
    if (this.tabla) {
      console.log(this.tabla);      
    }
    
    this.getCartasByTabla( this.tabla );
  }

  getCartasByTabla( tabla ) {
    this._cs.getCartasByTabla( tabla ).subscribe( cartas => {
      console.log(cartas);
      
      this.cartas = cartas;
    });
  }

}
