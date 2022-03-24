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
      "Authorization": "Bearer BQDtedn6dc4RuaUGMfsy_zXuH5Mma0PIu1cmWqYFJsXn8uGyWRwRROHalTSS3B63e-iHa52dRm1WpQ7rVQo"
    });

    return this.HTTP.get(URL, { 'headers': Headers });
  }

  getReleases() {
    return this.getQuery('browse/new-releases?limit=20').
      pipe(map((data: any) => data.albums.items));
  }

  getArtista(Text: string) {
    return this.getQuery(`search?q=${Text}&type=artist`).
      pipe(map((data: any) => data.artists.items));
  }
}
