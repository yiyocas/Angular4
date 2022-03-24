import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(Imagenes: any[]): unknown {
    if (!Imagenes) {
      return 'assets/img/banner-ico.png'
    } else {
      if (Imagenes.length > 0) {
        return Imagenes[0].url;
      } else {
        return 'assets/img/banner-ico.png'
      }
    }
  }
}
