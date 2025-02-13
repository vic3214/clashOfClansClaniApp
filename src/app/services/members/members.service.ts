import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs';

import {MemberAdapter} from '@app/core/adapters/member-list.adapter';
import {MemberListResponseModel} from '@app/core/models/response-models/member-list-response.model';


@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private http = inject(HttpClient);
  private clanTag = environment.clanTag;

  header: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + environment.TOKEN_API,
  });

  getAllClanMembers() {
    const url = '/coc-api/clans/' + encodeURIComponent(this.clanTag) + '/members';

    return this.http.get<MemberListResponseModel>(url, { headers: this.header }).pipe(
      map((membersListResponse: MemberListResponseModel) => MemberAdapter(membersListResponse))
    );
  }
}
