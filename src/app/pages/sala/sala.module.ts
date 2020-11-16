import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaPageRoutingModule } from './sala-routing.module';

import { SalaPage } from './sala.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SalaPage]
})
export class SalaPageModule {}
