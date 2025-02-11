import {HttpClient, HttpHeaders} from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs';
import {PlayerResponseModel} from '@app/core/models/response-models/player-response.model';
import {PlayerAdapter} from '@app/core/adapters/player.adapter';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private http = inject(HttpClient);

  header: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + environment.TOKEN_API,
  });

  getPlayerInfo(tag:string) {

    const url = '/coc-api/players/' + encodeURIComponent(tag);

    return this.http.get<PlayerResponseModel>(url, { headers: this.header }).pipe(
      map((playerResponse: PlayerResponseModel) => PlayerAdapter(playerResponse))
    );
  }
}
