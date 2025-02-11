import {
  Item

} from '@app/core/models/base-models/member-list-base.model';
import { RoleTranslation } from '@app/core/enums/role-translation.enum';
import {MemberListResponseModel} from '@app/core/models/response-models/member-list-response.model';
import {Member, MemberListModel} from '@app/core/models/member-list.model';
import {Role} from '@app/core/models/base-models/clan-base.model';


const roleMapping: { [key in Role]: RoleTranslation } = {
  [Role.Admin]: RoleTranslation.Admin,
  [Role.CoLeader]: RoleTranslation.CoLeader,
  [Role.Leader]: RoleTranslation.Leader,
  [Role.Member]: RoleTranslation.Member,
};

export const MemberAdapter = (membersResponse: MemberListResponseModel): MemberListModel => {

  const adaptMember = (item: Item & { role: Role }): Member => {
    return {
      ...item,
      role: roleMapping[item.role] || item.role as unknown as RoleTranslation,
    };
  };

  return {
    items: (membersResponse.items as (Item & { role: Role })[]).map(adaptMember),
    paging: membersResponse.paging,
  };
};
