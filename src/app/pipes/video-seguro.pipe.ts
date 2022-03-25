import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'videoSeguro'
})
export class VideoSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string): SafeResourceUrl {
    const url = `https://open.spotify.com/embed?uri=${value}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
