import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaPipe } from './carta.pipe';



@NgModule({
  declarations: [CartaPipe],
  imports: [
    CommonModule
  ],
  exports:[
    CartaPipe
  ]
})
export class PipesModule { }
