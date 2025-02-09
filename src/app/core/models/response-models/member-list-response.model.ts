import {Item, MemberListBaseModel} from '@app/core/models/base-models/member-list-base.model';


export interface MemberListResponseModel extends MemberListBaseModel{
  items:  Item[];
}
