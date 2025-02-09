import {ClanBaseModel, MemberListResponse} from '@app/core/models/base-models/clan-base.model';


export interface ClanResponseModel extends ClanBaseModel {
  memberList: MemberListResponse[];
}
