import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablasPageRoutingModule } from './tablas-routing.module';

import { TablasPage } from './tablas.page';
import { TablaComponent } from 'src/app/components/tablas/tabla/tabla.component';
import { CartaPipe } from 'src/app/pipes/carta.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablasPageRoutingModule
  ],
  declarations: [TablasPage, TablaComponent, CartaPipe]
})
export class TablasPageModule {}
