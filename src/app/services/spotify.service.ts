import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private HTTP: HttpClient) { }

  getQuery(Query: string) {

    const URL = `https://api.spotify.com/v1/${Query}`;

    const Headers: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer BQBMPox7eO1F4uvW9EMd7_hQNnDFTk-epjOhVLEZucVRCLO__hu1QKq2u_5llW3A4Nm533r996ueYHmz05E"
    });

    return this.HTTP.get(URL, { 'headers': Headers });
  }

  getReleases() {
    return this.getQuery('browse/new-releases?limit=20').
      pipe(map((data: any) => data.albums.items));
  }

  getArtistas(Text: string) {
    return this.getQuery(`search?q=${Text}&type=artist`).
      pipe(map((data: any) => data.artists.items));
  }

  getArtista(Text: string) {
    return this.getQuery(`artists/${Text}`);
  }

  getTopTracks(Text: string) {
    return this.getQuery(`artists/${Text}/top-tracks?market=mx`).
      pipe(map((data: any) => data.tracks));
  }
}
