import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {

  @Input() Albumes: any[] = [];

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  verArtista(Item: any) {
    let idArtista;
    if (Item.type === 'artist') {
      idArtista = Item.id;
    } else {
      idArtista = Item.artists[0].id;
    }

    this.Router.navigate(['/artista', idArtista]);
  }

}
