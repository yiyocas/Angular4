import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  Artista: any = {};
  Loading: boolean;
  TopTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private SpotifyService: SpotifyService) {
    this.Loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['idArtista']);
      this.getTopTrack(params['idArtista']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(idArtista: string) {
    this.Loading = true;
    this.SpotifyService.getArtista(idArtista).
      subscribe(artista => {
        this.Artista = artista;
        this.Loading = false;
      });
  }

  getTopTrack(idArtista: string) {
    this.Loading = true;
    this.SpotifyService.getTopTracks(idArtista).
      subscribe(Tracks => {
        console.log(Tracks);
        this.TopTracks = Tracks;
        this.Loading = false;
      });
  }
}
