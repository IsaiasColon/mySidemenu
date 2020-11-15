import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablasPageRoutingModule } from './tablas-routing.module';

import { TablasPage } from './tablas.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablasPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [TablasPage]
})
export class TablasPageModule {}
