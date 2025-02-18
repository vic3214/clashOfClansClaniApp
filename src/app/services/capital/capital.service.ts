import {computed, inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {rxResource} from '@angular/core/rxjs-interop';
import {CapitalModel} from '@app/core/models/capital.model';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private http = inject(HttpClient);

  private capitalHistoryUrl = '/coc-api/clans/' + encodeURIComponent(environment.clanTag) + '/capitalraidseasons';

  private header: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + environment.TOKEN_API
  })

  private capitalResource = rxResource({
    loader:() => this.http.get<CapitalModel>(this.capitalHistoryUrl,{headers: this.header})
  })

  capitalHistory$ = computed(()=>this.capitalResource.value())

}
