import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  Albumes: any[] = [];

  constructor(private spotify: SpotifyService) {
    spotify.getReleases().subscribe((resp: any) => {
      console.log(resp);
      this.Albumes = resp;
    });
  }

  ngOnInit(): void {
  }

}
