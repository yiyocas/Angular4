import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  Albumes: any[] = [];
  Loading: boolean = true;

  constructor(private spotify: SpotifyService) {
    spotify.getReleases().subscribe((resp: any) => {
      this.Albumes = resp;
      this.Loading = false;
    });
  }

  ngOnInit(): void {
  }
}
