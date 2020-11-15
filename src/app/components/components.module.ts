import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tablas/tabla/tabla.component';
import { TablasComponent } from './tablas/tablas.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [TablasComponent, TablaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    TablasComponent,
    TablaComponent,
    PipesModule
  ]
})
export class ComponentsModule { }
