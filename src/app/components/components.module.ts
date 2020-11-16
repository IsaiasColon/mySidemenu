import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tablas/tabla/tabla.component';
import { TablasComponent } from './tablas/tablas.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ModalContainerComponent } from './modal-container/modal-container.component';



@NgModule({
  declarations: [TablasComponent, TablaComponent, ModalContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    TablasComponent,
    TablaComponent,
    PipesModule,
    ModalContainerComponent
  ]
})
export class ComponentsModule { }
