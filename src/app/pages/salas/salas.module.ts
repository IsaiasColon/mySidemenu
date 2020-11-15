import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalasPageRoutingModule } from './salas-routing.module';

import { SalasPage } from './salas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SalasPage],
  exports:[]
})
export class SalasPageModule {}
