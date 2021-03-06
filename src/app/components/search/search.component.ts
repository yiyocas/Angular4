import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  Artistas: any[] = [];
  Loading: boolean = false;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(Text: string) {
    if (Text != '') {
      this.Loading = true;
      this.spotify.getArtistas(Text).
        subscribe((resp: any) => {
          this.Artistas = resp;
          this.Loading = false;
        });
    }
  }
}
