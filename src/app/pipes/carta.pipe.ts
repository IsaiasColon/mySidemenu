import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carta'
})
export class CartaPipe implements PipeTransform {

  transform(value: any): string {
    var ruta: string = `assets/img/cartas/${value}.jpg`;
    return ruta;
  }

}
