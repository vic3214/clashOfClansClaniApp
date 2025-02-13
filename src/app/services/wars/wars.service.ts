import {computed, inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {WarModel} from '@app/core/models/war.model';
import {rxResource, toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class WarsService {
  private http = inject(HttpClient);

  getActualWarInfoUrl = '/coc-api/clans/' + encodeURIComponent(environment.clanTag) + '/currentwar';

  header: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + environment.TOKEN_API,
  });

  warResource = rxResource({
    loader:()=> this.http.get<WarModel>(this.getActualWarInfoUrl, {headers: this.header}),

  })

  actualWar$ = computed(()=> this.warResource.value())

}
